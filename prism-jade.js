Prism.languages.jade = {
	'comment': /^[\t ]*\/\/.*$/gm,
	'mixin': {
		pattern: /\+\w+.*$/gm,
		inside: {
			'regex': {
				pattern: /\+\w+/,
				inside: {
					'punctuation': /\+/
				}
			},
			'attr-value': {
				pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,
				inside: {
					'punctuation': /=|>|"/g
				}
			},
			'attr-name': {
				pattern: /[\w:-]+/g,
				inside: {
					'namespace': /^[\w-]+?:/
				}
			}
		}
	},
	'tagLine': {
		pattern: /\n[\t ]*\w+[\( ].*$/gm,
		inside: {
			'tag': {
				pattern: /(\n[\t ]*)\w+/m,
				lookbehind: true
			},
			'string': {
				pattern: /\b\w+\b/g,
			},
			'attr-value': {
				pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,
				inside: {
					'punctuation': /=|>|"/g
				}
			},
			'attr-name': {
				pattern: /[\w:-]+/g,
				inside: {
					'namespace': /^[\w-]+?:/
				}
			}
		}
	},
	'entity': /\&#?[\da-z]{1,8};/gi
};

// Plugin to make entity title show the real entity, idea by Roman Komarov
/*
Prism.hooks.add('wrap', function(env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});
*/
