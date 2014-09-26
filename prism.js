  Blaze.Template.registerHelper("prism", new Template('prism', function () {
    var view = this;
    var data = Blaze.getData(view);

    if (!data.language && data.lang)
    	data.language = data.lang;

    var content = '';
    if (view.templateContentBlock) {
      content = Blaze._toText(view.templateContentBlock, HTML.TEXTMODE.STRING);
    }

    // strip blank first line / last line
    content = content.replace(/^\n|\n\s*$/g, '');

    // deindent by first indent (TODO, make optional)
    var indent = content.match(/^[\t ]+/);
    if (indent) {
			indent = new RegExp('^' + indent[0], 'gm');
			content = content.replace(indent, '');
    }

    /*
     * This following approach - construction inside a real div - works
     * better overall.  It looks like some prism plugins rely on it too.
     */

    var div = document.createElement('div');
    var pre = document.createElement('pre');
    var code = document.createElement('code');

    div.appendChild(pre); pre.appendChild(code);
    code.className = "language-" + data.language;
    code.textContent = content;

    if (data.class)
    	pre.className += ' ' + data.class;
    for (var key in data)
    	if (/^data-/.test(key))
    		pre.setAttribute(key, data[key]);

    Prism.highlightElement(code);
    return HTML.Raw(div.innerHTML);

    /*
    var extra = '';
    if (data.class)
    	extra += ' class="' + data.class + '"';
    for (var key in data)
    	if (/^data-/.test(key))
    		extra += ' ' + key + '="' + data[key] + '"';

    return HTML.Raw('<pre' + extra +'><code class="language-' + data.language + '">'
    	+ Prism.highlight(content, Prism.languages[data.language])
    	+ '</code></pre>');
    */

  }));
