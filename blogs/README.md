# Blog Posts Directory

This directory contains all blog posts for the Ascent Data Insights website. Each blog post is a markdown file with YAML frontmatter.

## Creating a New Blog Post

1. Create a new `.md` file in this directory
2. Name it using kebab-case (e.g., `my-blog-post.md`)
3. Add frontmatter at the top of the file
4. Write your content in Markdown

## Frontmatter Format

Every blog post should start with YAML frontmatter between `---` markers:

```markdown
---
title: "Your Blog Post Title"
date: "2026-02-03"
excerpt: "A brief description of your post that will appear in the blog listing."
author: "Author Name"
tags: ["Tag1", "Tag2", "Tag3"]
---

# Your Blog Post Content Here
```

### Required Fields:
- **title**: The title of your blog post (will be displayed as H1)
- **date**: Publication date in YYYY-MM-DD format
- **excerpt**: Short description shown on the blog listing page

### Optional Fields:
- **author**: Author name (defaults to blank if not provided)
- **tags**: Array of tags for categorization

## Markdown Features

You can use all standard Markdown features:

- **Headings**: `#`, `##`, `###`, etc.
- **Bold**: `**bold text**`
- **Italic**: `*italic text*`
- **Links**: `[link text](url)`
- **Lists**: Unordered (`-`) and ordered (`1.`)
- **Code**: Inline \`code\` and fenced code blocks
- **Blockquotes**: `> quote text`
- **Tables**: GitHub-flavored markdown tables

## Examples

See the existing blog posts in this directory for examples:
- `welcome-to-ascent-data-insights.md`
- `ai-hype-vs-reality.md`

## Deployment

Blog posts are automatically picked up when you deploy the site. No additional configuration needed!
