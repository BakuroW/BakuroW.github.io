module.exports = function(grunt) {

    grunt.config('copy', {
        js: {
            files: [
                {
                    expand: true, flatten: true,
                    src: ['<%= path.tmp %>/js/common.js'],
                    dest: '<%= path.public %>/js'
                }
            ]
        },
        css: {
            files: [
                {
                    expand: true, flatten: true,
                    src: ['<%= path.tmp %>/css/common.css'],
                    dest: '<%= path.public %>/css'
                }
            ]
        },
        html: {
            files: [
                {
                    expand: true, flatten: true,
                    src: ['<%= path.main %>/index.html'],
                    dest: '<%= path.public %>/',
                    options: {
                        process: function(content, path) {
                            return grunt.template.process(content);
                        }
                    }
                }
            ]
        },
        assets: {
            files: [
                {
                    expand: true, flatten: true,
                    src: ['<%= path.main %>/.htaccess'],
                    dest: '<%= path.public %>/'
                },
                {
                    expand: true, flatten: true,
                    src: ['<%= path.main %>/robots.txt'],
                    dest: '<%= path.public %>/'
                },
                {
                    expand: true, flatten: true,
                    src: ['<%= path.main %>/sitemap.xml'],
                    dest: '<%= path.public %>/'
                }
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');

};