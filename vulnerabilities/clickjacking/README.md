# Clickjacking

Generally takes the form of an _ad-covered page_ with what looks like a video player in the middle. When the user clicks the play button on the player, nothing happens. That's because they really just clicked a Facebook 'Like' button, posting the video site to their wall and spreading this to their friends (__likejacking__).

## How it works

Page you want to surreptitiously control is placed into an IFrame, laid over the page you control and made transparent by CSS.

By enticing a user to click an element on the page you control, you're really causing them to click on an element of the victim page.

## Variations

One of the most interesting clickjacking techniques involved duplicating your mouse cursor, a fixed distance away from the original, then hiding the original. Victim would click on safe elements with the new cursor, when in reality, they're click other unsafe elements.

## False Reporting

Unless the user can perform authorized/sensitive actions on the victim page, clickjacking is just an oversight and not a security issue.

## Mitigation

* __Framekiller JS__ sent to clients will break out of the IFrame, but IE has serious issues here.
* __Content Security Policy headers__ can mitigate this.
* __X-Frame-Options header__ can restrict which origins can embed a given page, mitigating clickjacking. (__Most accepted__)
