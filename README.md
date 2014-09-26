## prism

Smart package for [Prism](http://prismjs.com/), a Syntax Highlighter.

Features:

* Optional bundling of additional languages (default: css,html,js,handlebars)
* Optional bundling of additional plugins
* Template helpers and integration with markdown packages
* Blaze/handlebars language definition (early, as yet unsubmitted back to prism)

## Usage

```handlebars
  {{#prism language="javascript" class="line-numbers" data-line="1-2, 4, 5"}}
  	function gadi(hi) {
  		exit();
  	}
  {{/prism}}
```

The `Prism` global JS variable is also available, see the
[API docs](http://prismjs.com/extending.html#api).

Notes:

* Creates a `<pre><code class="language-javascript">` wrapper as per recommendations
* `class=""` and `data-X=""` are passed through to `<pre>` element, useful for plugins
