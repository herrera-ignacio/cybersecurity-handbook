# Defacing

## Overview

_Defacing_ a website means changing its looks for anyone who visits the website. Such attacks can carry great media echo and may significantly affect a company's investments.

## Defacement elements

We can utilize injected JavaScript to make a web page look any way we like. However, it's usually used to send a simple message. The following elements are commonly used in defacement attacks:

- Background color: `document.body.style.background`.
- Background: `document.body.background`
- Page title: `document.title`.
- Page text: `document.getElementById("someId").innerHTML`.
