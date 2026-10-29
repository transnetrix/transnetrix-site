---
# HOW TO PUBLISH A NEW POST
# 1. On GitHub, open src/content/articles and choose Add file, then Create new file.
# 2. Name it with the address you want, in lower case words joined by dashes,
#    for example: why-campaigns-fade.md  (the post will live at /articles/why-campaigns-fade/)
# 3. Copy everything in this file into it, replace the values below and write the post under the second line of dashes.
# 4. Click Commit changes. Cloudflare rebuilds the site in about two minutes.
# Files whose names start with an underscore, like this one, never appear on the site.

title: Your headline goes here
type: article            # article (your writing) or news (a Transnetrix update)
date: 2026-11-01         # year, month, day
author: Abid Majeed Khawar
summary: One or two sentences that appear on the card, in search results and when the link is shared.
cover: /images/articles/your-image.jpg   # optional: upload the picture to public/images/articles first, or delete this line
coverAlt: What the picture shows, for readers who cannot see it
tags: [Marcom, Gilgit Baltistan]          # optional
draft: false             # set to true to keep the post off the site while you work on it
---

Write the opening paragraph here. Leave a blank line between paragraphs.

## A subheading

Use two hash signs for a subheading, **two stars for bold** and *one star for italics*.

> A line starting with a greater than sign becomes a pull quote.

- A line starting with a dash becomes a bullet point.

[Text for a link](https://example.com)

PICTURES
Upload the picture to public/images/articles first, then:

![What the picture shows](/images/articles/another-image.jpg)

A picture with a caption underneath:

<figure>
  <img src="/images/articles/another-image.jpg" alt="What the picture shows" />
  <figcaption>Your caption here.</figcaption>
</figure>

VIDEO AS A LINK
[Watch the documentary on YouTube](https://www.youtube.com/watch?v=VIDEO_ID)

VIDEO PLAYING INSIDE THE ARTICLE (YouTube: Share, then Embed, copy the code and paste it on its own line)
<iframe src="https://www.youtube.com/embed/VIDEO_ID" title="Video title" allowfullscreen></iframe>

A short video file of your own (keep it under 20 MB, upload to public/images/articles):
<video src="/images/articles/clip.mp4" controls></video>
