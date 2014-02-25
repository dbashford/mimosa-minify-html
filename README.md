mimosa-minify-html
===========

## Overview

This module uses [html-minifier](https://github.com/kangax/html-minifier/) to minify `.html` files.

For more information regarding Mimosa, see http://mimosa.io.

## Usage

Add `'minify-html'` to your list of modules.  That's all!  Mimosa will install the module for you when you start `mimosa watch` or `mimosa build`.

## Functionality

During `mimosa build` and `mimosa watch`, when the `--minify` flag is enabled, this module will optimize `.html` files.

## Default Config

```javascript
minifyHtml: {
  options: {}
}
```

* `options` an object, pass-through options to the [html-minifier](https://github.com/kangax/html-minifier/) library.

Option Reference:

* [`collapseWhitespace`](https://github.com/kangax/html-minifier/blob/gh-pages/tests/minifier.js#L80)
* [`useShortDoctype`](https://github.com/kangax/html-minifier/blob/gh-pages/tests/minifier.js#L99)
* [`removeComments`](https://github.com/kangax/html-minifier/blob/gh-pages/tests/minifier.js#L110)
* [`removeCommentsFromCDATA`](https://github.com/kangax/html-minifier/blob/gh-pages/tests/minifier.js#L185)
* [`removeCDATASectionsFromCDATA`](https://github.com/kangax/html-minifier/blob/gh-pages/tests/minifier.js#L212)
* [`removeEmptyAttributes`](https://github.com/kangax/html-minifier/blob/gh-pages/tests/minifier.js#L235)
* [`cleanAttributes`](https://github.com/kangax/html-minifier/blob/gh-pages/tests/minifier.js#L253)
* [`removeRedundantAttributes`](https://github.com/kangax/html-minifier/blob/gh-pages/tests/minifier.js#L354)
* [`removeAttributeQuotes`](https://github.com/kangax/html-minifier/blob/gh-pages/tests/minifier.js#L478)
* [`removeScriptTypeAttributes`](https://github.com/kangax/html-minifier/blob/gh-pages/tests/minifier.js#L428)
* [`removeStyleLinkTypeAttributes`](https://github.com/kangax/html-minifier/blob/gh-pages/tests/minifier.js#L451)
* [`removeEmptyElements`](https://github.com/kangax/html-minifier/blob/gh-pages/tests/minifier.js#L566)
* [`collapseBooleanAttributes`](https://github.com/kangax/html-minifier/blob/gh-pages/tests/minifier.js#L603)
* [`keepClosingSlash`](https://github.com/kangax/html-minifier/blob/gh-pages/tests/minifier.js#L623)
* [`removeOptionalTags`](https://github.com/kangax/html-minifier/blob/gh-pages/tests/minifier.js#L627)
* [`html5`](https://github.com/kangax/html-minifier/blob/gh-pages/tests/minifier.js#L686)
* [`removeIgnored`](https://github.com/kangax/html-minifier/blob/gh-pages/tests/minifier.js#L707)
* [`caseSensitive`](https://github.com/kangax/html-minifier/blob/gh-pages/tests/minifier.js#737)

