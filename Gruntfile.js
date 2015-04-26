
module.exports = function (grunt) {

    // Project and task configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });

    grunt.config.set('path.public', 'www');

    grunt.config.set('path.bower', 'bower_components');

    grunt.config.set('path.main', 'source/main');
    grunt.config.set('path.tmp', 'tmp');

    grunt.config.set('path.upload_domain', 'http://upload.hackup.net.ua');

    grunt.loadTasks('grunt');

    grunt.registerTask('dev',
        'Build site files for deployment.',

        [   'clean:tmp',
            'less:vendors',     // /tmp/css/vendors.css
            'concat:lessApp',   //  /tmp/less/app.less
            'less:app',         //  /tmp/less/app.less => /tmp/css/app.css
            'concat:cssCommon', // /tmp/css/vendors.css + /tmp/css/app.css => /tmp/css/common.css
            'html2js',          // /tmp/js/templates.js
            'concat:js',        // /tmp/js/common.js
            'clean:public',
            'copy:html',
            'copy:css',
            'copy:js',
            'copy:assets']);

    grunt.registerTask('build',
        'Build site files for production.',

        [   'clean:tmp',
            'less:vendors',     // /tmp/css/vendors.css
            'concat:lessApp',   // /tmp/less/app.less
            'less:app',         // /tmp/less/app.less => /tmp/css/app.css
            'concat:cssCommon', // /tmp/css/vendors.css + /tmp/css/app.css => /tmp/css/common.css
            'html2js',          // /tmp/js/templates.js
            'concat:js',        // /tmp/js/common.js
            'clean:public',
            'cssmin',           /* /www/css/common.css*/
            'uglify',           /* /www/js/common.js */
            'htmlmin',          /* /www/index.html */
            'copy:assets',
            'htmlSnapshot'
        ]);


    grunt.registerTask('default', ['dev']);

};