module.exports = function(grunt) {

    grunt.config('clean', {
        tmp : '<%= path.tmp %>',
        public : [
            '<%= path.public %>/index.html',
            "<%= path.public %>/css/common.css",
            "<%= path.public %>/js/common.js"
        ]
    });

    grunt.loadNpmTasks('grunt-contrib-clean');

};

