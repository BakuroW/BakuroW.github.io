module.exports = function(grunt) {

    grunt.config('html2js', {
        options:{
            module: "hackupApp.templates",
            rename: function (moduleName) {

                var path_content = moduleName.split('/');

                var ngpath = '';
                var next = '';
                for(var i = 1; i < path_content.length;i++){
                    next = path_content[i+1];
                    if (path_content[i] == '..'  ||
                        path_content[i] == 'source' ||
                        path_content[i] == 'main' ||
                        path_content[i] == 'content' ||
                        path_content[i] == 'modal' ||
                        path_content[i]+'.html' == next){
                        continue;
                    }
                    ngpath +=  '/'+path_content[i];
                }
                console.log(ngpath);
                return ngpath;
            },
            process: true,
            singleModule: true,
            htmlmin: {
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
                removeIgnored:                  true
            }
        },
        html: {
            flatten: true,
            src: ['<%= path.main %>/content/**/*.html','<%= path.main %>/content/**/**/*.html'],
            dest: '<%= path.tmp %>/js/templates.js'
        }
    });

    grunt.loadNpmTasks('grunt-html2js');

};
