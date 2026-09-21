function search(data) {
  let text = new URL(location.href).searchParams.get("q") || "";
  let lang = new URL(location.href).searchParams.get("lang") || ui.lang;

  $("input[name='q']").val(text);

  let results = [];
  let regexp = new RegExp();
  try {
    regexp = new RegExp(text, "im");
  } catch (e) {
    $(".search-results .content").empty();
    $(".search-results .summary").html(ui.i18n.search_results_not_found);
    $(".search-results h2").html(ui.i18n.search_results);
    return debug(e.message);
  }

  function appendHighlightedText(element, content, expression) {
    expression.lastIndex = 0;
    const match = expression.exec(content);

    if (!match || !match[0]) {
      element.append(document.createTextNode(content));
      return;
    }

    element.append(document.createTextNode(content.slice(0, match.index)));
    element.append(
      $("<span/>").addClass("bg-yellow").text(match[0])
    );
    element.append(
      document.createTextNode(content.slice(match.index + match[0].length))
    );
  }
  for (page of data) {
    let [title, content] = [null, null];
    try {
      if (page.title) {
        title = page.title.match(regexp);
      } else {
        if (page.url == "/") {
          page.title = ui.title;
        } else {
          page.title = page.url;
        }
      }
    } catch (e) {
      debug(e.message);
    }
    try {
      if (page.content) {
        page.content = $("<div/>").html(page.content).text();
        content = page.content.match(regexp);
      }
    } catch (e) {
      debug(e.message);
    }
    if (title || content) {
      const result = $("<li/>").addClass("border-top py-4");
      const url = new URL(`${ui.baseurl}${page.url}`, location.origin);
      url.searchParams.set("highlight", text);
      result.append(
        $("<a/>")
          .attr("href", `${url.pathname}${url.search}${url.hash}`)
          .text(page.title)
      );
      if (content) {
        let [min, max] = [content.index - 100, content.index + 100];
        let [prefix, suffix] = ["...", "..."];

        if (min < 0) {
          prefix = "";
          min = 0;
        }
        if (max > page.content.length) {
          suffix = "";
          max = page.content.length;
        }
        const summary = $("<p/>").addClass("text-gray");
        summary.append(document.createTextNode(prefix));
        appendHighlightedText(
          summary,
          page.content.slice(min, max),
          regexp
        );
        summary.append(document.createTextNode(suffix));
        result.append(summary);
      }
      results.push(result);
    }
  }
  if (results.length > 0 && text.length > 0) {
    $(".search-results .content").empty().append(results);
    $(".search-results .summary").html(
      ui.i18n.search_results_found.replace("#", results.length)
    );
  } else {
    $(".search-results .content").empty();
    $(".search-results .summary").html(ui.i18n.search_results_not_found);
  }
  $(".search-results h2").html(ui.i18n.search_results);
}

function initialize(name) {
  let decodedName;
  try {
    decodedName = decodeURI(name);
  } catch (e) {
    return debug(e.message);
  }
  let link = $(".toctree")
    .find("[href]")
    .filter(function () {
      return $(this).attr("href") === decodedName;
    });

  if (link.length > 0) {
    $(".toctree .current").removeClass("current");
    link.addClass("current");
    link.closest(".level-1").parent().addClass("current");
    for (let i = 1; i <= 11; i++) {
      link.closest(`.level-${i}`).addClass("current");
    }
  }
}

function toggleCurrent(link) {
  let closest = link.closest("li");
  closest.siblings("li.current").removeClass("current");
  closest.siblings().find("li.current").removeClass("current");
  closest.find("> ul li.current").removeClass("current");
  closest.toggleClass("current");
}

function toc() {
  $(".toctree li.current")
    .append('<ul class="content-toc"></ul>')
    .html(function () {
      let level = parseInt(this.dataset.level);
      let temp = 0;
      let stack = [$(this).find(".content-toc")];

      $(".markdown-body")
        .find("h2,h3,h4,h5,h6")
        .each(function () {
          let anchor = $("<a/>")
            .addClass("d-flex flex-items-baseline")
            .text($(this).text())
            .attr("href", `#${this.id}`);
          let tagLevel = parseInt(this.tagName.slice(1)) - 1;

          if (tagLevel > temp) {
            let parent = stack[0].children("li:last")[0];
            if (parent) {
              stack.unshift($("<ul/>").appendTo(parent));
            }
          } else {
            stack.splice(
              0,
              Math.min(temp - tagLevel, Math.max(stack.length - 1, 0))
            );
          }
          temp = tagLevel;

          $("<li/>")
            .addClass(`toc level-${level + tagLevel}`)
            .append(anchor)
            .appendTo(stack[0]);
        });
      if (!stack[0].html()) {
        stack[0].remove();
      }
    });
}

function set(name, value) {
  return localStorage.setItem(name, value);
}

function get(name) {
  return localStorage.getItem(name) || false;
}

function debug() {
  console.debug.apply(console, arguments);
}

function restore() {
  let scroll = get("scroll");
  let scrollTime = get("scrollTime");
  let scrollHost = get("scrollHost");

  if (scroll && scrollTime && scrollHost) {
    if (scrollHost == location.host && Date.now() - scrollTime < 6e5) {
      $(".sidebar").scrollTop(scroll);
    }
  }
  $(".sidebar").scroll(function () {
    set("scroll", this.scrollTop);
    set("scrollTime", Date.now());
    set("scrollHost", location.host);
  });
}

function highlight() {
  let text = new URL(location.href).searchParams.get("highlight");

  if (text) {
    let regexp;
    try {
      regexp = new RegExp(text, "im");
    } catch (e) {
      return debug(e.message);
    }

    const root = document.querySelector(".markdown-body");
    if (root) {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const textNodes = [];
      let node;

      while ((node = walker.nextNode())) {
        if (!node.parentElement.closest("script, style, .bg-yellow")) {
          textNodes.push(node);
        }
      }

      textNodes.forEach(function (textNode) {
        regexp.lastIndex = 0;
        const match = regexp.exec(textNode.nodeValue);
        if (!match || !match[0]) return;

        const fragment = document.createDocumentFragment();
        fragment.appendChild(
          document.createTextNode(textNode.nodeValue.slice(0, match.index))
        );
        const marker = document.createElement("span");
        marker.className = "bg-yellow search-result";
        marker.textContent = match[0];
        fragment.appendChild(marker);
        fragment.appendChild(
          document.createTextNode(
            textNode.nodeValue.slice(match.index + match[0].length)
          )
        );
        textNode.parentNode.replaceChild(fragment, textNode);
      });
    }
    $(".search input").val(text);
  }
}

$(window).bind("hashchange", () =>
  initialize(location.hash || location.pathname)
);

$(document).on("scroll", function () {
  let start = $(this).scrollTop() + 5;
  let items = [];

  $(".markdown-body")
    .find("h1,h2,h3,h4,h5,h6")
    .each(function () {
      items.push({
        offset: $(this).offset().top,
        id: this.id,
        level: parseInt(this.tagName.slice(1)),
      });
    });
  for (let i = 0; i < items.length; i++) {
    if (start > items[i].offset) {
      if (i < items.length - 1) {
        if (start < items[i + 1].offset) {
          if (items[i].level == 1) {
            initialize(location.pathname);
          } else {
            initialize("#" + items[i].id);
          }
        }
      } else {
        initialize("#" + items[i].id);
      }
    }
  }
});

$("#toggle").click(function () {
  $(".sidebar-wrap,.content-wrap,.addons-wrap").toggleClass("shift");
});
$(".status").click(function () {
  $(".addons").toggleClass("d-none");
});

if (location.pathname == `${ui.baseurl}/search.html`) {
  $.ajax(`${ui.baseurl}/data.json`)
    .done(search)
    .fail((xhr, message) => debug(message));
}

toc();
initialize(location.pathname);
initialize(location.hash);
restore();
highlight();

/* nested ul */
$(".toc ul")
  .siblings("a")
  .each(function () {
    let link = $(this);
    let expand = $('<i class="fa fa-plus-square-o"></i>');

    expand.on("click", function (e) {
      e.stopPropagation();
      toggleCurrent(link);
      return false;
    });
    link.prepend(expand);
  });

$(".markdown-body :header").append(function () {
  return `<a href="#${this.id}" class="anchor"><i class="octicon-link fa fa-link text-blue"></i></a>`;
});

$("div.highlighter-rouge").each(function () {
  const match = $(this)
    .attr("class")
    .match(/language-(\w+)/);
  if (match) {
    $(this).attr("data-lang", match[1]);
  }
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register(`${ui.baseurl}/sw.caches.js`);
} else {
  debug("Service Worker not supported!");
}
