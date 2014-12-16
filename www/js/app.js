// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var yptIonic = angular.module('yptIonic', ['ionic']);

yptIonic.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});

//yptIonic.config(function($httpProvider) {
//    $httpProvider.interceptors.push(function($rootScope) {
//        return {
//            request: function(config) {
//                $rootScope.$broadcast('loading:show');
//                return config;
//            },
//            response: function(response) {
//                $rootScope.$broadcast('loading:hide');
//                return response;
//            }
//        }
//    })
//});
//
//yptIonic.run(function($rootScope, $ionicLoading) {
//    $rootScope.$on('loading:show', function() {
//        $ionicLoading.show({template: 'chargement'});
//    });
//
//    $rootScope.$on('loading:hide', function() {
//        $ionicLoading.hide();
//    });
//});

yptIonic.run(function($rootScope, $state, $stateParams) {
    
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});