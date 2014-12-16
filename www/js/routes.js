
yptIonic.config(function($stateProvider, $urlRouterProvider) {
  
    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        template: '<ion-nav-view></ion-nav-view>',
        controller: 'ApplicationCtrl'
    });

    //////////
    
    $stateProvider.state('app.menu', {
        url: '/menu',
        abstract: true,
        templateUrl: 'templates/menu/menu.tpl.html',
        controller: 'MenuCtrl'
    });
    
    $stateProvider.state('app.menu.home', {
        url: '',
        templateUrl: 'templates/menu/menuHome.tpl.html',
        controller: 'MenuHomeCtrl'
    });
    
    $stateProvider.state('app.menu.world', {
        url: '/world',
        templateUrl: 'templates/menu/menuWorld.tpl.html',
        controller: 'MenuWorldCtrl'
    });
    
    $stateProvider.state('app.menu.list', {
        url: '/list/:codeCountry',
        templateUrl: 'templates/menu/menuList.tpl.html',
        controller: 'MenuListCtrl'
    });
    
    //////////
    
    $stateProvider.state('app.player', {
        url: '/player/:idEtin',
        abstract: true,
        templateUrl: 'templates/player/player.tpl.html',
        controller: 'PlayerCtrl'
    });
    
    $stateProvider.state('app.player.home', {
        url: '',
        views: {
            playerContent: {
                templateUrl: 'templates/player/playerHome.tpl.html',
                controller: 'PlayerHomeCtrl'
            }
        }
    });
    
    $stateProvider.state('app.player.step', {
        url: '/step/:idStep',
        views: {
            playerContent: {
                templateUrl: 'templates/player/playerStep.tpl.html',
                controller: 'PlayerStepCtrl'
            }
        }
    });
    
    $stateProvider.state('app.player.step.gallery', {
        url: '/gallery',
        views: {
            stepContent: {
                templateUrl: 'templates/player/playerGallery.tpl.html',
                controller: 'PlayerStepGalleryCtrl'
            }
        }
    });
    
    $stateProvider.state('app.player.others', {
        url: '/others',
        views: {
            playerContent: {
                templateUrl: 'templates/player/playerOthers.tpl.html',
                controller: 'PlayerOthersCtrl'
            }
        }
    });
    
    //////////
    
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/menu');
});