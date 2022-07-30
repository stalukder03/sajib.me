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
mix.sass( "src/app.scss", "_react/css/style.css" );

// Scripts to js - React
mix.js("src/index.js", "_react/js/script.js").react();
