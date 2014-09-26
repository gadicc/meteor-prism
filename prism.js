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

    var extra = '';
    if (data.class)
    	extra += ' class="' + data.class + '"';
    for (key in data)
    	if (/^data-/.test(key))
    		extra += ' ' + key + '="' + data[key] + '"';

    return HTML.Raw('<pre' + extra +'><code class="language-' + data.language + '">'
    	+ Prism.highlight(content, Prism.languages[data.language])
    	+ '</code></pre>');

  }));
