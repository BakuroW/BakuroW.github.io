module.exports = function(grunt) {

    grunt.config('uglify', {
        js:{
            files:{
                '<%= path.public %>/js/common.js' : ['<%= path.tmp %>/js/common.js']
            }
        },
        options: {
           // sourceMap: true,
            banner: '/*! common.js 1.0.0 | Maksym Bugai (@marvelsrp) | Private Licensed */',
            report: 'gzip',
            mangle: false
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

};
