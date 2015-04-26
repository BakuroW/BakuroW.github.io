module.exports = function(grunt) {

    grunt.config('concat', {
        lessApp:{
            options: {
                process: function(src, filepath) {
                    console.log(filepath);
                    return src;
                }
            },
            src: [
                '<%= path.main %>/content/*.less',
                '<%= path.main %>/content/**/*.less',
                '<%= path.main %>/content/**/**/*.less'
            ],
            dest: '<%= path.tmp %>/less/app.less'
        },
        cssCommon:{
            options: {
                process: function(src, filepath) {
                    console.log(filepath);
                    return src;
                }
            },
            src: [
                '<%= path.tmp %>/css/app.css',
                '<%= path.tmp %>/css/vendors.css',
                '<%= path.bower %>/wow/css/libs/animate.css'
            ],
            dest: '<%= path.tmp %>/css/common.css'
        },
        js:{
            options: {
                process: function(src, filepath) {
                    console.log(filepath);
                    return src;
                }
            },
            src: [
                //jquery
                '<%= path.bower %>/jquery/dist/jquery.js',

                //AngularJS
                '<%= path.bower %>/angular/angular.js',
                '<%= path.bower %>/angular-route/angular-route.js',
                '<%= path.bower %>/angular-sanitize/angular-sanitize.js',

                //fileUpload AngularJS
                '<%= path.bower %>/angular-file-upload/angular-file-upload.js',

                //grug&drop
                '<%= path.main %>/vendors/dnd/angular-drag-and-drop-lists.js',

                //redactor
                '<%= path.bower %>/imperavi-redactor-widget/assets/redactor.js',
                '<%= path.bower %>/imperavi-redactor-widget/assets/lang/ru.js',
                '<%= path.bower %>/imperavi-redactor-widget/assets/plugins/table/table.js',
                '<%= path.bower %>/imperavi-redactor-widget/assets/plugins/fullscreen/fullscreen.js',
                '<%= path.bower %>/imperavi-redactor-widget/assets/plugins/fontcolor/fontcolor.js',

                //angular-redactor
                '<%= path.bower %>/angular-redactor/angular-redactor.js',

                //html5 video AngularJS
                '<%= path.bower %>/videogular/videogular.js',
                '<%= path.bower %>/videogular-controls/controls.js',
                '<%= path.bower %>/videogular-overlay-play/overlay-play.js',

                //viewport is show element
                '<%= path.bower %>/wow/dist/wow.js',

                //Приложение
                '<%= path.main %>/js/app.js',
                '<%= path.main %>/js/messages.js',

                //Сервисы
                '<%= path.main %>/js/services/*',

                //Директивы
                '<%= path.main %>/js/directives/*',

                //Контроллеры
                '<%= path.main %>/content/*.js',
                '<%= path.main %>/content/**/*.js',
                '<%= path.main %>/content/**/**/*.js',

                //Шаблоны
                '<%= path.tmp %>/js/templates.js'
            ],
            dest: '<%= path.tmp %>/js/common.js'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');

};
