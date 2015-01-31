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

Check the [Option Reference](https://github.com/kangax/html-minifier#options-quick-reference) on the html-minify website for details on the following options:

* `collapseWhitespace`
* `useShortDoctype`
* `removeComments`
* `removeCommentsFromCDATA`
* `removeCDATASectionsFromCDATA`
* `removeEmptyAttributes`
* `cleanAttributes`
* `removeRedundantAttributes`
* `removeAttributeQuotes`
* `removeScriptTypeAttributes`
* `removeStyleLinkTypeAttributes`
* `removeEmptyElements`
* `collapseBooleanAttributes`
* `keepClosingSlash`
* `removeOptionalTags`
* `html5`
* `removeIgnored`
* `caseSensitive`

