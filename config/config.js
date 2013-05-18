seajs.config({
	plugins: ['shim'],
	alias: {
		'jquery': {
			src: 'lib/jquery.1.9.1.min.js',
			exports: 'jQuery'
		},
		'd3': {
			src: 'lib/d3.min.js',
			exports: 'd3'
		},
		'svg': {
			src: 'lib/svg.min.js',
			exports: 'SVG'
		},
		'underscore': {
			src: 'lib/underscore.min.js',
			exports: '_'
		},
		'async': {
			src: 'lib/async.js',
			exports: 'async'
		},
		'moment': {
			src: 'lib/moment.min.js',
			exports: 'moment'
		},
		'cufon': {
			src: 'lib/cufon.yui.js',
			exports: 'Cufon'
		},
		'mustache' : {
			src: 'lib/mustache.js',
			exports: 'Mustache'
		}
	}
});