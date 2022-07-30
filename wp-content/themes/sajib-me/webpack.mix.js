// webpack.mix.js

const mix = require("laravel-mix");

mix.options({
	autoprefixer: {
		remove: false,
	},
	processCssUrls: false,
});

// sourcemap enabled
mix.sourceMaps(true, 'source-map');

// SCSS to CSS
mix.sass( "src/app.scss", "_react/css/sajib-me.css" );

// Scripts to js - React
mix.js("src/index.js", "_react/js/sajib-me.js").react();
