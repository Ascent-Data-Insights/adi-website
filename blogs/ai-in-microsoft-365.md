---
title: "AI in the Microsoft 365 Ecosystem: Getting the Most From Your Existing Subscription"
date: "2026-03-27"
excerpt: "For those looking to get started with AI, 365 Copilot is a great place to begin. This post explores how to get the most value out of what you're already paying for, and where the limitations are."
author: "Parker Kain"
tags: ["AI", "Microsoft 365", "Copilot", "Enterprise AI"]
heroImage: "/copilot_logo.png"
---

Most organizations pay for Microsoft 365 but aren't sure what its AI features can actually do for them. Below, we'll break down what's included in your existing subscription, where Copilot works well, where it hits its limits, and when a more custom solution makes sense. We'll focus on M365 Copilot, Copilot Studio, and the upcoming Copilot Cowork.

**Note: This article is current as of late March, 2026. This space is moving super fast, and capabilities may be different when you read this!** 

## What Are All of These Services? 

Microsoft is not known for unambiguous or simple offerings. You may be asking what the difference is between M365 Copilot, Copilot Cowork, Copilot Studio, things like Copilot for Excel, etc. Furthermore, you may be asking what is already included in your Microsoft subscription, versus what would be a subscription upgrade. Let's hit the basics real quick:

* **Copilot** is the umbrella term for all of these offerings in the M365 space. Just to bring it up, for programmers, there is a completely unrelated offering called "GitHub Copilot" which is for writing code. For the purpose of this post and discussion, when we say "Copilot", we mean Microsoft Copilot, which is much more focused for business users. 
* **Copilot Chat** is the standard entry point for using Copilot, and think of it mostly like a ChatGPT-like interface. You're chatting with a bot, uploading files, asking it to draft things, etc. As you upgrade your M365 subscription, this chat is able to do more and more, as we'll discuss below.
* **Copilot Studio** is a UI to enable non-programmers to enhance Copilot by giving it custom flows it can do. Perhaps you want a company wide bot to answer questions about your company policies and employee benefits. Copilot Studio is perfect for this, essentially creating a chat interface with those documents ahead of time so it can reference them in real time. 
* **Copilot for Excel** or "Copilot for 'enter MS application here'" is a version of Copilot fine-tuned to work within a particular application. Copilot for Excel, for example, is able to interact with your Excel spreadsheets, add formulas, etc. These integrations come at some of the higher tiers of M365 subscriptions. 

If you pay for Business Standard or Business Premium, you currently have access to Copilot Chat, but it's very much like a Microsoft-centered ChatGPT. It cannot access documents unless you manually upload them, it cannot see any of your Teams messages, meeting transcripts, etc. If you manually upload a file, it is securely stored (not leaking information to the open internet), but it's a manual upload every time.

There are then several different add-ons that give you different levels of these capabilities:

* **[Teams Premium](https://www.microsoft.com/en-us/microsoft-teams/premium)**, currently $10 a month per user, adds AI-powered meeting features: intelligent meeting recaps, action item extraction, and AI-generated notes. However, this does not include the full Copilot experience as there's no Copilot chat during meetings, no pulling information across multiple applications, and no SharePoint or Outlook integration.
* The full **[Microsoft 365 Copilot](https://www.microsoft.com/en-us/microsoft-365-copilot/pricing)** add-on, at $18 a month per user (if you bill annually), gets you the vast majority of their offerings. This unlocks Copilot across Outlook, Teams, Word, Excel, PowerPoint, and SharePoint. It also includes Copilot Studio for building custom agents. If you use Dynamics 365 as your CRM, the integration is deep here as well - but Dynamics 365 itself requires its own separate licenses.
* Then, you have what they call **[E7](https://www.theregister.com/2026/03/09/microsoft_adds_a_premium_tier/)**, which is $99 a month per user, and bundles everything above along with other Microsoft services for security and compliance.

Below, we'll assume you pay for the full Microsoft 365 Copilot add-on, as that's where the interesting business use cases live.

## Where Copilot Excels (no pun intended!) 

At the end of the day, Copilot is great at working with documents and information that are in the M365 ecosystem. This includes Teams, Outlook, and SharePoint/OneDrive. 

If what you're trying to do involves reading across one or multiple of these systems, and then writing something up (a summary, an email draft, a Word document), M365 Copilot can do it pretty easily today. Under the hood, it uses [Microsoft Graph](https://learn.microsoft.com/en-us/graph/overview), which is how Microsoft knows what you have permissions to. The transcripts from the meetings you were in, emails you were included on, SharePoint docs that you have access to - all of that is fair game for Copilot.

A word of caution: this means if your organization is lax with controlling permissions to documents, Copilot may be able to surface and summarize all of those documents. Consider this your heads up to lock down your SharePoint sites while you roll out Copilot!

Here's what this might look like in practice: 
* You open Copilot Chat, type 'catch me up on everything with Client X this month' and it pulls from your emails, Teams chats, and meeting transcripts to give you a single update. 
* You click on an upcoming meeting in Outlook and Copilot generates a prep brief: who's attending, recent threads with them, documents shared, and open action items.

This is pretty great. However most organizations don't live entirely within M365. If what you're trying to include in your summaries or drafts is outside of M365, it's possible, but it does get more difficult, and compatibility varies by system. If you're trying to navigate how well-supported a system is, the key question is how deeply that system is integrated with Microsoft.

The gold standard is a [Copilot connector](https://learn.microsoft.com/en-us/microsoft-365/copilot/connectors/overview) (formerly called a Microsoft Graph connector). These are integrations that index an external system's data directly into Microsoft Graph, which allows Copilot to reach out to these systems just like it does for Outlook, Teams, or SharePoint/OneDrive. Salesforce, Jira, Confluence, ServiceNow, and [~100 other services](https://learn.microsoft.com/en-us/microsoftsearch/pre-built-connectors-overview) have this level of connectivity. If a Copilot connector exists for your system, setup is pretty simple: an admin at your organization configures the initial setup, and from that point on, every user benefits with only some occasional maintenance. The data shows up in Copilot searches and summaries without users doing anything differently.

One last thing worth mentioning is Dynamics 365, the Microsoft CRM. If you use Dynamics 365, it integrates with the rest of Copilot: [meeting notes can be saved to CRM records directly from the Teams meeting recap](https://learn.microsoft.com/en-us/microsoft-sales-copilot/view-meeting-summary-recap), CRM context surfaces in Outlook alongside emails, and follow-ups can be scheduled without ever opening the CRM. Salesforce has a premium (paid) connector that gets some of this functionality, but if your CRM is not one of these two, consider CRM access to be spotty at best and of much lower quality. How deeply Copilot integrates with your workflow depends heavily on your CRM choice.

To summarize: if all of your systems are inside of Microsoft Graph, either because they are Microsoft products or implement Copilot connectors, Copilot can do quite a lot on its own. Below, we'll discuss what things look like for systems outside of Graph.

### What's Coming Soon - Copilot Cowork

Microsoft is constantly adding new features to the ecosystem, and we won't pretend we could capture everything that may exist in the coming months. However, the big feature to keep an eye out for is [Copilot Cowork](https://www.microsoft.com/en-us/microsoft-365/blog/2026/03/09/copilot-cowork-a-new-way-of-getting-work-done/). This is essentially the next progression for Copilot, enabling much more multi-step thinking and action. Today, regular Copilot is scoped to one app at a time when writing: you draft an email in Outlook, then switch to PowerPoint to build a deck, then manually connect the two. Cowork can do all of this in a single request - creating documents, scheduling meetings, and drafting emails as one connected workflow.

The big catch: this still only works within Microsoft Graph. This might be a game-changer for organizations that are wholly within the Microsoft ecosystem, but will likely prove frustrating for those that are not. It's also unclear which subscription tier Cowork will require when it launches - expect Microsoft to share more details between now and release.

## Copilot's Limitations

### Systems Outside of the Microsoft Ecosystem

The next tier down of integration with Copilot, and it's a pretty big step down, is the "[message extension](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/overview-message-extension-bot)." This is *not* the full Graph integration we discussed before. Instead, it allows Copilot to access that system when you explicitly ask for it. In theory, this sounds similar to a Copilot connector, but in practice, it feels much less reliable.

Because these systems are not fully indexed into Graph, Copilot will sometimes ignore pulling from them if you don't explicitly mention the system by name. Copilot connectors pull rich content, whereas message extensions often return simpler search results with less context. Once you're in this tier, it's hard to build automation that reliably works, but it still works well for ad hoc queries where users explicitly ask for information. Systems at this tier include [NetDocuments](https://support.netdocuments.com/s/article/NetDocuments-Copilot), Adobe, Mural, and many others.

This quality continues to degrade the more systems you have outside of M365. Working entirely on Microsoft products plus a single outside integration might work for many use cases. However, if you utilize multiple systems at once, each additional connection adds another point of unreliability. 

You can also [build custom Copilot connectors](https://learn.microsoft.com/en-us/graph/custom-connector-sdk-overview) within your organization to bring that output quality back up. This is technical work for a software development team, but if Copilot does the *functionality* you need and it's just missing the context from a couple of systems, a custom connector can absolutely be worth it.

### Where Copilot Falls Short

The functionality in Copilot is broad, but shallow. To see what we mean, let's walk through a real scenario: prepping a briefing document before a client meeting.

**Layer one: just ask Copilot Chat.** You type "pull together a briefing for my meeting with Client X on Thursday." Copilot searches your Outlook, Teams, and SharePoint, picks what it thinks is relevant, and generates a summary in OneDrive. Sometimes this works great. Other times, it pulls in a thread from the wrong client contact or misses the proposal you shared in a Teams channel last week. You have no way to tell it which sources to prioritize, and no way to understand why it chose what it chose.

**Layer two: build a flow in Copilot Studio.** You realize you need this every week, so you wire up a more structured workflow with explicit steps for gathering context, summarizing, drafting, and reviewing. This gets you better consistency, but you still can't guarantee the output. You can nudge Copilot, but you can't enforce that the brief always includes, say, a "recent issues" section or follows your firm's template. The output quality varies from run to run, and you're left manually QA'ing every time.

Both layers also share a deeper limitation: there is no memory. Every time you run this workflow, Copilot starts from scratch. It doesn't remember that you corrected it last time, that you prefer a certain format, or that your Client's main contact changed two months ago. You can't build on previous runs, and Copilot can't learn from its mistakes. For ad hoc, one-off queries this is fine. For any truly valuable, more automated processes, this is a problem.

If you want a system that reliably chooses the right sources, enforces a specific document structure, and improves over time, you're looking at a more custom solution. Some of this can be built without code through Power Automate, but your results will vary.

## The Gap: Where Custom Development Fits

This is where the meeting prep example from above gets interesting. A custom system could watch your calendar, see a client meeting in 24 hours, pull context from your CRM, document management system, and email, assemble a briefing in your firm's exact format, and drop it in your inbox. Automatically, every time, without a person in the loop. It remembers what your feedback was from last time and it follows your rules with much more consistency.

That's just one example. Here's what else becomes possible:

* A customer support agent that handles everything from answering FAQs to triaging issues to routing edge cases to a human, adapting its behavior based on the situation rather than following a rigid script.
* Event-driven automation that kicks off when something changes: a document is uploaded, a deal moves stages in your CRM, a support ticket is escalated. This works across any system, not just Microsoft products.
* Quality checks that run automatically. A number gets placed in a report, and the system verifies the calculation and flags discrepancies before it's published.
* Organization-level visibility into how these tools are performing, including how often they run, what they produce, and the time they're saving.

The common thread here is that custom development lets you build systems that work across all your tools, enforce your specific business logic, and get better over time. The investment varies depending on scope, but the right solution typically pays for itself by replacing manual work.

## Next Steps

If you're paying for Copilot, start by getting value from what's built in. Use Copilot Chat, set up Graph connectors for your key systems that support it, and see how far it takes you. When you have an idea that passes what Copilot can do, or you hit issues with the limitations of Copilot currently, that's when custom development pays for itself.

If you're trying to figure out where Copilot ends and custom development begins for your specific setup, that's exactly what we help with at Ascent. [Let's talk](/contact).
