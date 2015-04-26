module.exports = function(grunt) {

    grunt.config('htmlmin', {
        html: {
            options: {
                collapseBooleanAttributes:      true,
                collapseWhitespace:             true,
                removeAttributeQuotes:          true,
                removeComments:                 true, // Only if you don't use comment directives!
                removeEmptyAttributes:          true,
                removeRedundantAttributes:      true,
                removeScriptTypeAttributes:     true,
                removeStyleLinkTypeAttributes:  true,
                minifyJS:                       true,
                minifyCSS:                      true,
                removeIgnored:                  true,
                processScripts:                 ['text/ng-template']
            },
            src: ['<%= path.main %>/index.html'],
            dest: '<%= path.public %>/index.html'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');

};
