# Jaejong Baek

![CI](https://github.com/rundocs/jekyll-rtd-theme/workflows/CI/badge.svg?branch=develop)
![jsDelivr](https://data.jsdelivr.com/v1/package/gh/rundocs/jekyll-rtd-theme/badge)

## Mission Statement

On advancing my expertise in cybersecurity and undertaking critical challenges,**my goal is to deliver my insights and findings to the pedagogical and research activities**  so that it would tremendously help produce future leaders who would effectively manage our national cybersecurity issues.

## About Me
<img align=left src="../images/jaejong.jpg"  width="20%">

Hello, I am an Assistant Teaching Professor, working for [SCAI](https://scai.engineering.asu.edu/){:target="_blank"}, the [SEFCOM](https://sefcom.asu.edu/){:target="_blank"} lab and [Center for Cybersecurity and Trusted Foundations (CTF)](https://globalsecurity.asu.edu/cybersecurity-and-trusted-foundations){:target="_blank"} at [Arizona State University](https://www.asu.edu/) as. I received my Ph.D. from [Yonsei University](https://www.yonsei.ac.kr/en_sc/index.jsp){:target="_blank"} in South Korea. My research interests lie in the filed of mobile and wireless network security issues like Telco (5G), Access Control, Blockchain, Digital Forensics, and Vehicle security. 

🎓 Ph.D. Computer Science, Yonsei University, Seoul, Korea,  2011\
🎓 M.S. Computer Science, Yonsei University, Seoul, Korea,  2001

📫 jaejong at asu . edu

## Latest News
 1. I am grateful to share that since August of this year, I have embarked on a new semester as an assistant teaching professor in the [SCAI](https://scai.engineering.asu.edu/){:target="_blank"} at ASU. I am truly thankful for this opportunity.
 2. Our paper ["**Targeted Privacy Attacks by Fingerprinting Mobile Apps in LTE Radio Layer**"](https://sefcom.asu.edu/publications/jaejong-dsn23.pdf){:target="_blank"} has been accepted in [IEEE IFIP DSN  2023 (June 27-30, Porto, Portugal)](https://dsn2023.dei.uc.pt/){:target="_blank"}  This paper presents novel privacy attacks against LTE using machine learning to identify patterns in the communication between the UEs and eNBs without breaking into users' devices and the base station.

3. Our paper ["**SpaceMediator: Leveraging Authorization Policies to Prevent Spatial and Privacy Attacks in Mobile Augmented Reality**"](https://sefcom.asu.edu/publications/jaejong-sactmat23.pdf){:target="_blank"} has been accepted in [SACMAT 2023 (June 7-9, Trento, Italy)](https://sacmat2023.fbk.eu/){:target="_blank"}. We present a new approach for managing access control policies in a mobile augmented reality (MAR) application based on policy-governed MAR apps against space invasion, space affectation attacks, and privacy leaks.

4. Our Blockchain Patent application has been issued on Feb. 21, 2023 [**Systems and Methods for Blockchain-Based Automatic Key Generation**](https://patentcenter.uspto.gov/applications/17067426){:target="_blank"}" by USPTO. (Patent # 11588631)

5. Our NSF proposal has been awarded on August  29, 2022, **CICI: UCSS: ScienceAccess: Enabling Zero-Trust Resource Access Management for Scientific Collaborations**, which will be collaborated with TAMU-CC. from Oct. 2022 to Sept. 2025. ([Award # 2232911, $591,644](https://nsf.gov/awardsearch/showAward?AWD_ID=2232911){:target="_blank"})

6. Our extended edition of the Dypoldroid paper has been accepted to [Information Systems Frontier](https://www.springer.com/journal/10796){:target="_blank"}s: **DyPolDroid: Protecting Against Permission-Abuse Attacks in Android** in August 2022. (Impact Factor: 5.261)

7. Our paper has been accepted to [Applied Energ](https://www.journals.elsevier.com/applied-energy){:target="_blank"}, titled [A Secure Distributed Ledger for Transactive Energy: The Electron Volt Exchange](https://doi.org/10.1016/j.apenergy.2020.116208){:target="_blank"} in November 2020. (Impact Factor: 8.848)

8. Our team (Jaejong Baek, Sukwha Kyung, Gail-Joon Ahn) was recognized as the Most Innovative Capability in the Blockchain Innovation Challenge hosted by ASURE. The title of the project is [**"Cryptographic Key Management System using a Distributed Shared Ledger**.](https://twitter.com/ASUREASU/status/1138645169828294656){:target="_blank"} (Patent issued)

9. Our paper "[**Wi Not Calling: Practical Privacy and Availability Attacks in Wi-Fi Calling**](https://adamdoupe.com/publications/wi-not-calling-acsac2018.pdf){:target="_blank"} " has been accepted in [ACSAC ’18, December 3–7, 2018, San Juan, PR, USA.](https://www.acsac.org/){:target="_blank"} In this paper, we analyze the security of Wi-Fi Calling specifications and discover several vulnerabilities that allow an adversary to track the location of users and perform DoS attacks.

<!--- 
```yml
remote_theme: rundocs/jekyll-rtd-theme
```

You can [generate](https://github.com/rundocs/starter-slim/generate) with the same files and folders from [rundocs/starter-slim](https://github.com/rundocs/starter-slim/)

## Usage

Documentation that can guide how to create with Github pages, please refer to [rundocs.io](https://rundocs.io) for details

## Features

- Shortcodes (Toasts card, mermaid)
- Pages Plugins (emoji, gist, avatar, mentions)
- Auto generate sidebar
- [Attribute List Definitions](https://kramdown.gettalong.org/syntax.html#attribute-list-definitions) (Primer/css utilities, Font Awesome 4)
- Service worker (caches)
- SEO (404, robots.txt, sitemap.xml)
- Canonical Link (Open Graph, Twitter Card, Schema data)

## Options

| name          | default value        | description       |
| ------------- | -------------------- | ----------------- |
| `title`       | repo name            |                   |
| `description` | repo description     |                   |
| `url`         | user domain or cname |                   |
| `baseurl`     | repo name            |                   |
| `lang`        | `en`                 |                   |
| `direction`   | `auto`               | `ltr` or `rtl`    |
| `highlighter` | `rouge`              | Cannot be changed |

```yml
# folders sort
readme_index:
  with_frontmatter: true

meta:
  key1: value1
  key2: value2
  .
  .
  .

google:
  gtag:
  adsense:

mathjax: # this will prased to json, default: {}

mermaid:
  custom:     # mermaid link
  initialize: # this will prased to json, default: {}

scss:   # also _includes/extra/styles.scss
script: # also _includes/extra/script.js

translate:
  # shortcodes
  danger:
  note:
  tip:
  warning:
  # 404
  not_found:
  # copyright
  revision:
  # search
  searching:
  search:
  search_docs:
  search_results:
  search_results_found: # the "#" in this translate will replaced with results size!
  search_results_not_found:

plugins:
  - jemoji
  - jekyll-avatar
  - jekyll-mentions
```

## The license

The theme is available as open source under the terms of the MIT License
-->
