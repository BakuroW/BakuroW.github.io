module.exports = function(grunt) {
    
      grunt.config('less', {
          vendors: {
              files: {
                  "<%= path.tmp %>/css/vendors.css": '<%= path.main %>/less/vendors.less'
              }
          },
          app: {
              files: {
                  "<%= path.tmp %>/css/app.css": '<%= path.tmp %>/less/app.less'
              }
          }
      });

      grunt.loadNpmTasks('grunt-contrib-less');

};
