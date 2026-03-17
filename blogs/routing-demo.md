---
title: "Introducing Our Routing Optimization Demo"
date: "2026-03-17"
excerpt: "See how AI-powered routing optimization can cut costs and improve efficiency. Try our live demo at routing.ascentdi.com!"
author: "Parker Kain"
tags: ["AI", "Optimization", "Logistics", "Demo"]
heroImage: "/routing_demo.png"
---

## The Problem

It's a tale as old as time: 
* You create a great product, but lose half of your margin paying to ship it to stores.
* Product arrives at warehouses or stores late, delaying when that product starts generating revenue. 
* You spend hours and hours trying manually to figure out how best to get products from location A to location B, whether on the highways or on your conveyor belts. 

This is where optimization shines! The idea is simple. You define your outcomes (lower miles driven), you define your requirements, and the optimization does the rest. We've created a demo to help see how optimization can come to life at your company.

## Try It Yourself

You can see our approach to optimization live at work at our [new live demo](https://routing.ascentdi.com).

The idea is simple: 
1. **Gather** starting information, where do we start, and where do we need to get? How much product are we moving, and how are our trucks structured?
2. **Optimize** in real-time. Results come back in seconds, not minutes, enabling optimizations to be rerun as needed as conditions change (a wreck on the highway, traffic patterns change).
3. **Visualize** the results. We don't just tell you our results are better - we **prove it**. We compare a base routing choice to our optimized solution and show the miles you save. 

![Routing Demo Full App](/routing-full-app.png)


## How It Works

The underpinning of our solution is the [Traveling Salesman Problem](https://en.wikipedia.org/wiki/Travelling_salesman_problem). It's a classic, 100 year old mathematics problem. A salesman starts somewhere, and needs to visit some number of other locations as quickly as possible! Out of this one problem comes a century of optimization algorithms, puzzles, and variants on the initial problem for new scenarios.

The version of the Traveling Salesman Problem we solve here is the "Multiple Traveling Salesman Problem". The core change is while we have some number of locations to visit, we also have multiple starting locations! This changes the math considerably as we have to figure out how the various starting locations influences the locations we visit. 

Where the science gets exciting is how you can continue to fine-tune and personalize the optimization problem: 

* Your company has time windows for each location, meaning you need to be at location X at 9:00 and location Y by 11:00. We can bake that in to respect arriving to locations within their time windows! 
* Maybe certain trucks can only carry certain items? You have frozen items that need to be on trucks with freezers, or larger pallets that can only go on your largest trucks!
* You want trucks to finish at a different location than they started at, arriving at a new truck depot for the following day!

All of this is possible through tuning the optimization problem to your needs.

## Why It Matters

At the end of the day, logistics is all about efficiency and cost mitigation. You worked hard to create a great product. Now you need to get it where it needs to go as quickly as possible and protect your margins. 

Optimization was *built* for this scenario, and with the right optimization algorithm, you can see savings of over 10% on miles driven. That's less wear and tear on your trucks, less late arrivals, and more of your products getting where they need to go. 

Furthermore - this same science can be applied to use cases **outside** of truck routing. Optimization is the science of making any process more efficient, and the same framework of defining outcomes and constraints applies to virtually any process. 

## What's Next

We've worked on optimization problems for Fortune 50 companies, helping them drive millions in incremental profit annually. Need proof? Check out [our case study here](/case-studies/routing-optimization).

If routing optimization sounds like something your business could benefit from, [let's talk](/contact).
