'use strict';

angular.module('myApp.services.menu', [])
    .service('$menu', [function() {
        var self = this;
        self.showMenu = false;
        self.callback = undefined;

        self.getShowMenu = function(){
            //console.log('getShowMenu');
            return  self.showMenu;
        };

        self.setCallback = function(callback){
            //console.log('setCallback');
            self.callback = callback;
        };//nav bar

        self.setShowMenu = function(value){
            //console.log('setShowMenu', value);
            self.showMenu = value;
            if (self.callback)
                self.callback(value);
        };//норм работает только както гемора много мб через свитч было проще
        //проще но коду больше было бы * кол контроллеров
        //тут идея какая, когда включается контроллер меню, он ставит колбек мол если чё поменяется то сообщи
        //когда меняються страницы они сообщают сервису состояние меню. сервис передает другому контроллеру
        //по крутому паттер
        //велик еще тот)


    }]);