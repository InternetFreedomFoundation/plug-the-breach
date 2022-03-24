---
title: Tracker Methodology
published: true
description: A brief overview of how the tracker works and Our long-term vision for this project
date_published: "2022-03-23"
og_image: ./og/ogImage.png
author: Rohin Garg
---

**About the Project**

The main purpose of PlugTheBreach aims to improve transparency with regards to increasing incidence of data breaches in India by providing a comprehensive database of breaches that occur. Our long-term vision for the project involves two phase:

1. **Phase 1:** Setting up the tracker using publicly available resources and conducting basic analytics
2. **Phase 2:** Creating a portal for reporting live data breaches and conducting independent analysis of security vulnerabilities

**How will we collect data?**

As has been reported earlier, in many cases, companies even go after researchers who bring to light incidents of security breaches. Cybersecurity researchers in India have long faced threats for their work. Previously, there was the case of journalist [Dissent Doe, who was sued for disclosing a leak in client data](https://internetfreedom.in/security-researchers-need-legislative-protection-from-vexatious-lawsuits/). A more recent incident is the case of the [Mobikwik data breach earlier in March this year](https://internetfreedom.in/mobikwik-data-breach/), in which Mobikwik [threatened](https://twitter.com/MobiKwik/status/1367489330902675463) to take legal action against the security researcher who uncovered the breach and suggested that the researcher was ‘_trying to grab media attention_’.

During phase 1 of the project, we will rely solely on publicly available reports to populate our breach database with weekly updates. While this will primarily include news reports, we may also include verified information that is scraped from social media. Additionally, we will also provide a form through which affected persons may report any breaches they may have been affected by. The basis for adopting such an approach that focuses on publicly available reportes is the aforementioned reluctance of Indian entities to acknowledge vulnerabilities or breaches in their information management systems.

Once we reach phase 2 of the project, we will hope to be to have the legal and technical capacity to move beyond our reliance on publicly available reports and start conducting analysis of leaked datasets that may be available online, including by creating a portal through which researchers can highlight instances of such leaks to us in a secure manner.

**What sort of analytics can be expected?**

The key problem here, and indeed, something that is part of the \_raison d'etre \_of this project, is the lack of transparency, which results in a near complete lack of information. In most cases, companies fail to even acknowledge these breaches. Thus, initially, our analytics will be based on the limited data we are able to collect.

To estimate losses due to data breaches, we will use a weighted average of several publicly available tools for estimation. This is because many techniques either overestimate or underestimate these costs, and so increased reliance on any one single approach may decrease accuracy. The following tools are used:

1. [At-Bay tool](https://keeprisk.at-bay.com/svc/data_breach_calculator)
2. [Breach secure now](https://www.breachsecurenow.com/breach-cost-calculator/#calculator)
3. [E-risk hub](https://eriskhub.com/mini-calc-usli)
4. [IBM (TBD)](https://www.ibm.com/downloads/cas/OJDVQGRY)

Since most tools for estimating breach costs use the USD ($) as a benchmark, we then convert these estimates to INR, accounting for purchasing power parity.

_All suggestions to improve our processes are welcomed, and, indeed, solicited. For all such feedback, please write to @Xx_
