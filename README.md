# Jaejong Baek

## Mission Statement

On advancing my expertise in cybersecurity and undertaking critical challenges,**my goal is to deliver my insights and findings to the pedagogical and research activities**  so that it would tremendously help produce future leaders who would effectively manage our national cybersecurity issues.

## About Me
<img align=left src="../images/jaejong.jpg"  width="20%">

Hello, I am an Assistant Teaching Professor, working for [SCAI](https://scai.engineering.asu.edu/){:target="_blank"} and the [SEFCOM](https://sefcom.asu.edu/){:target="_blank"} lab <!--- and [Center for Cybersecurity and Trusted Foundations (CTF)](https://globalsecurity.asu.edu/cybersecurity-and-trusted-foundations){:target="_blank"} --> at [Arizona State University](https://www.asu.edu/) as. I received my Ph.D. from [Yonsei University](https://www.yonsei.ac.kr/en_sc/index.jsp){:target="_blank"} in South Korea. My research interests lie in mobile and wireless network security issues like Telco (5G), Access Control, Blockchain, Digital Forensics, and Vehicle security. 

📫 jaejong at asu . edu

## Latest News
1. Our paper ["**It's almost like Frankenstein: Investigating the Complexities
of Scientific Collaboration and Privilege Management within Research
Computing Infrastructures**"](https://sp2025.ieee-security.org/){:target="_blank"} has been accepted in [46th IEEE Symposium on
Security and Privacy (May 12-15, 2025, SAN FRANCISCO, IEEE S&P 2025)](https://sp2025.ieee-security.org/){:target="_blank"}. This paper examines security considerations in research computing infrastructures (RCIs) through interviews with experts and stakeholders, highlighting a layered access control approach that challenges traditional models, as collaborative, trust-based sharing raises compliance concerns, and concludes with recommendations to enhance RCI security and flexibility.

2. Our paper ["**Unveiling SDN Controller Identity through Timing Side Channel**"](../papers/nof2024.pdf){:target="_blank"} has been accepted in [15th International Conference on Network of the Future (October 02-04, 2024, Castelldefels (Barcelona), Spain)](http://nof.dnac.org/){:target="_blank"}. This paper presents a novel approach to fingerprinting SDN controllers using timing side channels and deep learning techniques.

3. Our paper ["**Targeted Privacy Attacks by Fingerprinting Mobile Apps in LTE Radio Layer**"](https://sefcom.asu.edu/publications/jaejong-dsn23.pdf){:target="_blank"} has been accepted in [IEEE IFIP DSN  2023 (June 27-30, 2023, Porto, Portugal)](https://dsn2023.dei.uc.pt/){:target="_blank"}.  This paper presents novel privacy attacks against LTE using machine learning to identify patterns in the communication between the UEs and eNBs without breaking into users' devices and the base station.

4. Our paper ["**SpaceMediator: Leveraging Authorization Policies to Prevent Spatial and Privacy Attacks in Mobile Augmented Reality**"](https://sefcom.asu.edu/publications/jaejong-sactmat23.pdf){:target="_blank"} has been accepted in [SACMAT 2023 (June 7-9, Trento, Italy)](https://sacmat2023.fbk.eu/){:target="_blank"}. We present a new approach for managing access control policies in a mobile augmented reality (MAR) application based on policy-governed MAR apps against space invasion, space affectation attacks, and privacy leaks.

5. Our Blockchain Patent application has been issued on Feb. 21, 2023 [**Systems and Methods for Blockchain-Based Automatic Key Generation**](https://patentcenter.uspto.gov/applications/17067426){:target="_blank"}" by USPTO. (Patent # 11588631)

6. Our NSF proposal has been awarded on August  29, 2022, **CICI: UCSS: ScienceAccess: Enabling Zero-Trust Resource Access Management for Scientific Collaborations**, which will be collaborated with TAMU-CC. from Oct. 2022 to Sept. 2025. ([Award # 2232911, $591,644](https://nsf.gov/awardsearch/showAward?AWD_ID=2232911){:target="_blank"})

7. Our extended edition of the Dypoldroid paper has been accepted to [Information Systems Frontier](https://www.springer.com/journal/10796){:target="_blank"}s: **DyPolDroid: Protecting Against Permission-Abuse Attacks in Android** in August 2022. (Impact Factor: 5.261)

8. Our paper has been accepted to [Applied Energy](https://www.journals.elsevier.com/applied-energy){:target="_blank"}, titled [A Secure Distributed Ledger for Transactive Energy: The Electron Volt Exchange](https://doi.org/10.1016/j.apenergy.2020.116208){:target="_blank"} in November 2020. (Impact Factor: 8.848)

9. Our team (Jaejong Baek, Sukwha Kyung, Gail-Joon Ahn) was recognized as the Most Innovative Capability in the Blockchain Innovation Challenge hosted by ASURE. The title of the project is [**"Cryptographic Key Management System using a Distributed Shared Ledger**.](https://twitter.com/ASUREASU/status/1138645169828294656){:target="_blank"} (Patent issued)

10. Our paper "[**Wi Not Calling: Practical Privacy and Availability Attacks in Wi-Fi Calling**](https://adamdoupe.com/publications/wi-not-calling-acsac2018.pdf){:target="_blank"} " has been accepted in [ACSAC ’18, December 3–7, 2018, San Juan, PR, USA.](https://www.acsac.org/){:target="_blank"} In this paper, we analyze the security of Wi-Fi Calling specifications and discover several vulnerabilities that allow an adversary to track the location of users and perform DoS attacks.

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
