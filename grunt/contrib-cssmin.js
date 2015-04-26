module.exports = function(grunt) {

    grunt.config('cssmin', {
        css:{
            options:{
                banner: '/*! app.css 1.0.0 | Maksym Bugai (@marvelsrp) | Private Licensed */',
                report:'gzip',
                keepSpecialComments: 0
            },
            files: {
                '<%= path.public %>/css/common.css': ['<%= path.tmp %>/css/common.css']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');

};