const mix = require('laravel-mix');

    mix.less('assets/less/style.less', 'assets/css/style.css').options({
        // Disable this option or Laravel Mix will move our fonts and images files in new directories
        processCssUrls: false
    });