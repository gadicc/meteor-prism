Package.describe({
  summary: "Prism Syntax Highlighter, integrated with Meteor",
  version: "1.0.1",
  git: "https://github.com/gadicc/meteor-prism"
});

Package.onUse(function(api) {
  api.use('blaze@2.0.0', 'client');
  api.use('templating@1.0.6', 'client');

  /* Base */

  api.addFiles('lib/prism/prism.js', 'client', { bare: true } );

  /* Themes */

  //api.addFiles('lib/prism/themes/prism.css', 'client');
  api.addFiles('lib/prism/themes/prism-okaidia.css', 'client');

  /* Languages */

  api.addFiles('lib/prism/components/prism-bash.js', 'client', { bare: true } );
  api.addFiles('lib/prism/components/prism-css.js', 'client', { bare: true } );
  api.addFiles('lib/prism/components/prism-javascript.js', 'client', { bare: true } );
  api.addFiles('lib/prism/components/prism-markup.js', 'client', { bare: true } );

  api.addFiles('prism-spacebars.js', 'client', { bare: true } );

  /* Plugins */

  api.addFiles('lib/prism/plugins/line-numbers/prism-line-numbers.js', 'client');
  api.addFiles('lib/prism/plugins/line-numbers/prism-line-numbers.css', 'client');

//  api.addFiles('lib/prism/plugins/show-language/prism-show-language.js', 'client');
//  api.addFiles('lib/prism/plugins/show-language/prism-show-language.css', 'client');

  api.addFiles('lib/prism/plugins/line-highlight/prism-line-highlight.js', 'client');
  api.addFiles('lib/prism/plugins/line-highlight/prism-line-highlight.css', 'client');

  /* Smart Package */

  api.addFiles('prism.js', 'client');
});

/*
Package.onTest(function(api) {
  api.use('tinytest');
  api.use('gadicohen:prism');
  api.addFiles('gadicohen:prism-tests.js');
});
*/
