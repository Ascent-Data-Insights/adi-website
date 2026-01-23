
The below plan describes the website we would like to create for Ascent Data Insights:

# Tech

* Use typescript, Next, and we will deploy with either Vercel or something like it
* Use Tailwind and Tailwind Plus - the catalyst UI kit from Tailwind plus is in the components directly.

# Ascent Data Insights — Website Content Plan

**Version:** 2.0  
**Last Updated:** January 22, 2026

---

## Company Overview

| Item | Details |
|------|---------|
| **Company Name** | Ascent Data Insights |
| **Location** | Cincinnati, OH |
| **Founders** | Parker (Data Scientist/Engineer, ex-84.51°), Aaron (Data Scientist, ex-84.51°) |
| **Current Client** | Lucho (full-stack engineering) |

---

## Target Market

- **Company Size:** Startups and mid-size businesses
- **Geography:** Greater Cincinnati region (Cincinnati, Columbus, Louisville, Dayton)
- **Industry:** Industry-agnostic on homepage; demonstrate expertise through case studies in specific verticals

---

## Brand Voice & Tone

| Attribute | Description |
|-----------|-------------|
| **Professional** | Clean, clear, credible—no fluff or gimmicks |
| **Approachable** | Warm, conversational, first-person ("we") |
| **Local** | Emphasize regional roots, feel like neighbors |
| **Curious** | Lead with listening, not selling. Genuinely interested in client problems. |
| **Honest** | Anti-hype. Tell clients what works and what doesn't. |

**Voice Example:**
> ✅ "We've spent years working with AI—we know what's real and what's hype. Let's figure out what actually helps your business."

### Theming

We will use Tailwind Plus and Tailwind for styling. 
We use the Google Font Kodchasan for headers, and Manrope for text
Our color palette is: 

  --brand-primary: #03344E;
  --brand-secondary: #4785BF;
  --brand-accent: #FB8500;
---

## Service Pillars (3)

| Pillar | Name | Tagline | Description |
|--------|------|---------|-------------|
| 1 | **Data Modernization** | *"Turn your data into a competitive advantage."* | Help clients move from scattered spreadsheets and legacy systems to a modern, usable data foundation that drives decisions. Three-step framework: Collect → Describe → Prescribe. |
| 2 | **AI Strategy & Implementation** | *"Cut through the hype. Get real results."* | Identify where AI creates genuine value (and where it doesn't), then build and deploy solutions—including agentic workflows, pilots, and readiness assessments. |
| 3 | **Innovation Engineering** | *"Your idea. Built and shipped."* | Tech-stack agnostic development for MVPs, internal tools, prototypes, and products that don't exist yet. Emphasis on R&D and creative problem-solving. |

---

## Site Structure

Homepage
├── Hero (animated) + Value Proposition
├── Three Pillars (summary cards → link to detail pages)
├── Why Work With Us
├── Testimonials
├── Case Studies (2–3 highlights)
├── About Us (brief intro)
└── Contact / CTA

/services/data-modernization
/services/ai-strategy
/services/innovation-engineering

/case-studies (or individual pages)

/about
/contact

---

## Hero Section Notes

- **Must include an animation element** — subtle, eye-catching
- **Recommended options:**
    - Animated gradient background
    - Floating data particles / nodes
    - Rotating / typewriter text
    - Subtle line-drawing animation
- Achievable with Tailwind CSS / lightweight libraries (Lottie optional)

---

## Case Studies Plan

- Pull from Lucho engagement + anonymized/generalized examples from previous roles
- Aim for 2–3 case studies at launch
- Each service page includes a mini case study highlight linking to full case study

---

## Tech / Design Notes

- **UI Framework:** Tailwind Plus (paid components & UI kit)
- **Tone in design:** Clean, modern, professional but not cold

---

# PAGE COPY

---

## Homepage

### 1. Hero Section

**Layout notes:**
- Full-width section with animated background (gradient or particles)
- Headline + subheadline centered or left-aligned
- Primary CTA button
- Optional: rotating text element in headline

**Headline:**

> We Help You Build What's Next

**Subheadline:**

> Ascent Data Insights is a Cincinnati-based consultancy helping startups and mid-size companies turn messy data into insight, navigate AI with clarity, and ship products that matter. You know your business best—we use technology to accelerate it.

**Primary CTA:** [Let's Talk]

**Secondary CTA:** [See Our Work]

---

### 2. Three Pillars Section

**Section headline:**

> What We Do

**Section subheadline (optional):**

> Three ways we help businesses move forward.

---

**Card 1 — Data Modernization**

> **Data Modernization**  
> *Turn your data into a competitive advantage.*
>
> Scattered spreadsheets. Legacy systems. Reports no one trusts. We help you build a modern data foundation—so you can finally make decisions with confidence.
>
> [Learn More →]

---

**Card 2 — AI Strategy & Implementation**

> **AI Strategy & Implementation**  
> *Cut through the hype. Get real results.*
>
> We've worked in AI for years—we know what's real and what's noise. Whether you need a readiness assessment, a pilot, or a production-ready solution, we'll help you move from curiosity to value.
>
> [Learn More →]

---

**Card 3 — Innovation Engineering**

> **Innovation Engineering**  
> *Your idea. Built and shipped.*
>
> Got a product idea, internal tool, or prototype that doesn't exist yet? We're tech-stack agnostic problem solvers who love building things from scratch.
>
> [Learn More →]

---

### 3. Why Work With Us Section

**Section headline:**

> Built to Last. Built With You.

**Copy:**

> We don't just drop an app at your feet and walk away. We build intuitive solutions and bring your team along for the journey—so when we're done, you're not dependent on us. You're empowered.
>
> You know your business. We know data, AI, and software. Together, we create solutions that stick.

**Optional bullet points:**

- **Intuitive by design** — Solutions your team can actually use
- **Knowledge transfer built in** — We teach as we build
- **Long-term value** — Not just a deliverable, but a lasting capability

---

### 4. Testimonials Section

**Section headline:**

> What Our Clients Say

**Layout notes:**
- 2–3 testimonial cards
- Each with quote, name, title, company (and optional photo/logo)
- Can rotate or display as carousel if more than 3

**Placeholder testimonials:**

> *"Ascent didn't just build what we asked for—they helped us figure out what we actually needed. And they made sure our team understood it."*  
> — [Name], [Title], Lucho

> *"They cut through the AI noise and helped us focus on what would actually move the needle."*  
> — [Name], [Title], [Company]

> *"Working with Parker and Aaron felt like having experts on our team, not outside vendors."*  
> — [Name], [Title], [Company]

---

### 5. Case Studies Section

**Section headline:**

> Our Work

**Section subheadline:**

> A few examples of how we've helped businesses like yours.

**Placeholder cards:**

| Case Study | Industry | One-liner |
|------------|----------|-----------|
| Lucho | Consumer Products | Full-stack engineering for a growing brand's digital platform |
| [TBD — Data project] | [TBD] | Unified data from multiple sources into a single source of truth |
| [TBD — AI project] | [TBD] | Built an AI-powered workflow that cut manual review time by 60% |

---

### 6. About Us (Brief)

**Section headline:**

> Who We Are

**Copy:**

> Ascent Data Insights was founded by Parker and Aaron, two data scientists who spent years solving complex problems at one of the country's leading analytics companies. We started Ascent because we believe growing businesses deserve the same quality of data and AI expertise that big enterprises get—without the big enterprise price tag or attitude.
>
> We're based in Cincinnati, and we work with companies across Ohio, Kentucky, and Indiana. We're not here to sell you something you don't need. We're here to listen, understand your problem, and build the right solution.

**CTA:** [Meet the Team →]

---

### 7. Contact / CTA Section

**Section headline:**

> Let's Figure It Out Together

**Copy:**

> Tell us what you're working on. We'll have an honest conversation about whether we can help—and if we're not the right fit, we'll tell you that too.

**CTA button:** [Get in Touch]

---

## About Page

### Hero / Intro Section

**Headline:**

> Data & AI Expertise, Rooted in Cincinnati

**Subheadline:**

> We bring enterprise-grade data and AI expertise to growing businesses—with the speed and focus that only a small, dedicated team can offer.

---

### Our Story Section

> Ascent Data Insights started with a simple idea: bring world-class data and AI expertise to the businesses that are shaping the Greater Cincinnati region.
>
> Our founders, Parker and Aaron, spent years working at 84.51°—one of the country's leading analytics companies—where they saw firsthand what great data strategy, AI implementation, and engineering can do at scale. They started Ascent to bring that same level of rigor and quality to startups and mid-size businesses closer to home.
>
> We're based in Cincinnati and work with companies across Ohio, Kentucky, and Indiana. We're growing, but no matter our size, our approach stays the same: listen first, build solutions that last, and make sure your team is set up to succeed long after the project ends.

---

### Meet the Team Section

**Section headline:**

> The Team

**Intro line:**

> Ascent was founded by two data scientists who believe great work comes from curiosity, honesty, and craft.

**Parker**

> **Parker [Last Name]**  
> *Co-Founder*
>
> Former Data Scientist and Engineer at 84.51°. Loves untangling messy problems, building things that work, and explaining complex ideas in plain English.
>
> [LinkedIn]

**Aaron**

> **Aaron [Last Name]**  
> *Co-Founder*
>
> Former Data Scientist at 84.51°. Driven by curiosity and a belief that good data work should make people's jobs easier, not harder.
>
> [LinkedIn]

---

### How We Work Section

**Headline:**

> How We Work

| Value | Description |
|-------|-------------|
| **Listen first** | We start by understanding your problem—not pitching a pre-packaged solution. |
| **Build to last** | We create intuitive tools and transfer knowledge so you're not dependent on us forever. |
| **Stay honest** | If something won't work, we'll tell you. If we're not the right fit, we'll say so. |

---

### CTA Section

**Headline:**

> Want to work together?

**Copy:**

> We'd love to hear what you're building. Reach out and let's see if we're a good fit.

**CTA Button:** [Get in Touch]

---

## Service Page: Data Modernization

### Hero Section

**Headline:**

> Data Modernization

**Tagline:**

> Turn your data into a competitive advantage.

**Intro paragraph:**

> Great data strategy isn't just about collecting information—it's about making that information work for you. We help you build a modern data foundation that takes you from raw data to real decisions.

---

### The Three-Step Framework Section

**Section headline:**

> From Data to Decisions

**Section subheadline:**

> Our approach follows a clear progression—each step building on the last.

**Layout notes:**
- Horizontal stepped visual (1 → 2 → 3) or vertical timeline
- Animation idea: steps reveal sequentially on scroll, or a connecting line "draws" between them
- Icons for each step

| Step | Name | Description |
|------|------|-------------|
| **1** | **Collect** | Bring your data together. We build pipelines and integrations that pull from your systems, clean the mess, and create a reliable, unified foundation. |
| **2** | **Describe** | See what's happening. We create dashboards and reporting tools that make your data visible, understandable, and accessible to your team. |
| **3** | **Prescribe** | Know what to do next. We build forecasting models, optimization tools, and decision-support systems that turn insight into action. |

---

### Who This Is For Section

**Headline:**

> Is This Right for You?

**Copy:**

> This service is a good fit if:
> - You're making decisions based on gut feel because you don't trust your data
> - Your team spends too much time wrangling spreadsheets
> - You've outgrown your current tools but aren't sure what's next
> - You want a single source of truth across your business

---

### Our Approach Section

**Headline:**

> Our Approach

**Copy:**

> We don't just build infrastructure and hand over the keys. We make sure your data platform is intuitive, documented, and understood by your team. When we're done, you'll have a foundation that lasts—and the knowledge to maintain it.

---

### Case Study Highlight

**Section headline:**

> See It in Action

> **[TBD — Data Project]**
>
> *The problem:* Data lived in disconnected spreadsheets and legacy systems, making reporting slow and unreliable.
>
> *What we did:* Built a modern cloud data platform with automated pipelines and self-serve dashboards.
>
> *The result:* Reporting time cut from days to minutes; leadership now has a single source of truth.
>
> [Read the full case study →]

---

### CTA Section

**Headline:**

> Ready to modernize?

**Copy:**

> Let's talk about where your data is today and where it could take you.

**Button:** [Get in Touch]

---

## Service Page: AI Strategy & Implementation

### Hero Section

**Headline:**

> AI Strategy & Implementation

**Tagline:**

> Cut through the hype. Get real results.

**Intro paragraph:**

> AI is everywhere right now—and so is the noise. We've spent years working hands-on with machine learning and AI systems, so we know where it creates genuine value and where it's just a shiny distraction. We'll help you figure out what's right for your business and then actually build it.

---

### What We Do Section

**Headline:**

> How We Help

**Services list:**

- **AI readiness assessments** — Understand where you are and what's possible before you invest
- **Use case identification** — Find the opportunities where AI will actually move the needle
- **Pilot development** — Test ideas quickly with low-risk, high-learning experiments
- **Production deployment** — Scale what works into reliable, maintainable systems
- **Agentic workflows** — Build AI that doesn't just inform decisions—it takes action

---

### Our Perspective Section

**Headline:**

> Our Take on AI

**Copy:**

> We're not here to sell you AI for AI's sake. The reality is that AI isn't the right answer for every problem—and a lot of companies are wasting money finding that out the hard way.
>
> We've been in this space long enough to know the difference between a breakthrough and a buzzword. Our job is to be honest with you: if AI isn't the right fit, we'll tell you. If it is, we'll build it right.

---

### Who This Is For Section

**Headline:**

> Is This Right for You?

**Copy:**

> This service is a good fit if:
> - You're curious about AI but not sure where to start
> - You've seen demos and pilots but haven't gotten real business value yet
> - You want to automate manual, repetitive processes
> - You need an honest assessment before making a big investment

---

### Our Approach Section

**Headline:**

> Our Approach

**Copy:**

> We start by listening—understanding your business, your goals, and your constraints. From there, we identify opportunities, build fast, and iterate based on what we learn. And like everything we do, we make sure your team understands what we've built so it lasts beyond our engagement.

---

### Case Study Highlight

**Section headline:**

> See It in Action

> **[TBD — AI Project]**
>
> *The problem:* A manual review process was eating up hours of staff time every week.
>
> *What we did:* Developed an AI-powered workflow to automate the review and flag exceptions.
>
> *The result:* Manual review time reduced by 60%, freeing the team to focus on higher-value work.
>
> [Read the full case study →]

---

### CTA Section

**Headline:**

> Ready to explore AI?

**Copy:**

> Let's have an honest conversation about where AI fits in your business—and where it doesn't.

**Button:** [Get in Touch]

---

## Service Page: Innovation Engineering

### Hero Section

**Headline:**

> Innovation Engineering

**Tagline:**

> Your idea. Built and shipped.

**Intro paragraph:**

> Got a product idea, an internal tool, or a prototype that doesn't exist yet? We're tech-stack agnostic problem solvers who love building from scratch. You bring the vision—we'll figure out how to make it real.

---

### What We Do Section

**Headline:**

> How We Help

**Services list:**

- **MVPs & prototypes** — Validate ideas fast with working software, not slide decks
- **Internal tools** — Custom apps that solve the problems off-the-shelf software can't
- **Full-stack development** — Frontend, backend, APIs, integrations—we do it all
- **R&D partnerships** — Collaborate on exploratory projects where the answer isn't obvious yet
- **Tech-stack flexibility** — We work across languages, frameworks, and platforms—whatever fits your needs

---

### Who This Is For Section

**Headline:**

> Is This Right for You?

**Copy:**

> This service is a good fit if:
> - You have an idea but no technical team to build it
> - You need a working prototype to test with users or pitch to investors
> - Your team is stretched thin and needs extra engineering capacity
> - You've got a problem that existing tools don't solve

---

### Our Approach Section

**Headline:**

> Our Approach

**Copy:**

> We start by understanding what you're trying to accomplish—not just what you want us to build. From there, we move fast, stay flexible, and keep you in the loop at every step. When we hand it off, your team will understand how it works and how to maintain it.

---

### Case Study Highlight

**Section headline:**

> See It in Action

> **Lucho**
>
> *The problem:* A growing consumer brand needed a custom digital platform but didn't have in-house engineering.
>
> *What we did:* Full-stack development across their web presence and backend systems.
>
> *The result:* A scalable platform that supports the brand's growth—built on time and built to last.
>
> [Read the full case study →]

---

### CTA Section

**Headline:**

> Got something to build?

**Copy:**

> Tell us about your idea. We'll figure out how to make it happen.

**Button:** [Get in Touch]

---

## To Do

- [ ] Finalize placeholder case studies with real details
- [ ] Collect testimonials from Lucho and others
- [ ] Define Contact page content / form fields
- [ ] Outline full case study page template
- [ ] Choose hero animation style
- [ ] Fill in Parker and Aaron bios with last names and optional details
- [ ] Review and tune copy

---

