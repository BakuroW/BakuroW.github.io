module.exports = function(grunt) {

    grunt.config('watch', {
        html: {
            files: [
                '<%= path.main %>/content/*.html',
                '<%= path.main %>/content/**/*.html',
                '<%= path.main %>/content/**/**/*.html',
                '<%= path.main %>/index.html'
            ],
            tasks: ['html2js','concat:js','copy:js','copy:html'],

            options: {
                spawn: false,
                interrupt: true,
                reload: true,
                livereload: true
            }
        },
        js: {
            files: [
                '<%= path.main %>/js/**/**/*.js',
                'grunt/*.js',
                '<%= path.main %>/js/**/*.js',
                '<%= path.main %>/js/*.js'
            ],
            tasks: ['concat:js','copy:js'],
            options: {
                spawn: false,
                interrupt: true,
                reload: true,
                livereload: true
            }
        },
        css: {
            files: [
                '<%= path.main %>/less/**/**/*.less',
                '<%= path.main %>/less/**/*.less',
                '<%= path.main %>/less/*.less'
            ],
            tasks: ['less:css','copy:css'],
            options: {
                spawn: false,
                reload: true,
                livereload: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');

};