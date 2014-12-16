
yptIonic.controller('ApplicationCtrl', function($scope, $log) {
    
    $log.debug('ApplicationCtrl !!');
});

///////////

yptIonic.controller('MenuCtrl', function($scope, $log) {
    $log.debug('MenuCtrl !!');
});

yptIonic.controller('MenuHomeCtrl', function($scope, $log) {
    $log.debug('MenuHomeCtrl !!');
});

yptIonic.controller('MenuWorldCtrl', function($scope, $log) {
    $log.debug('MenuWorldCtrl !!');
});

yptIonic.controller('MenuListCtrl', function($scope, $log, $timeout) {
    $log.debug('MenuListCtrl !!');
    
    $scope.etins = [];
    $scope.noMoreEtinToLoad = false;
    
    var etinPerPage = 12;
    
    var addEtin = function(id) {
        $scope.etins.push({id: id, title: 'Etin n°' + id});
    };
    
    var initList = function() {
        for(var i = 0; i < etinPerPage; i++) addEtin(i);
    };
    initList();
    
    $scope.loadMoreEtins = function() {
        $timeout(function() {
            var nb = $scope.etins.length;
            for(var i = nb; i < nb + etinPerPage; i++) addEtin(i);
            
            $scope.$broadcast('scroll.infiniteScrollComplete');
        }, 4000);
    };
    
});

///////////

yptIonic.controller('PlayerCtrl', function($scope, $log) {
    $log.debug('PlayerCtrl !!');
    
    $scope.steps = [
        {id: 0, title: 'dfg dfgb dfghf dgh'},
        {id: 1, title: 'dflvg dlvglfdbgvjkfkb gfbg'},
        {id: 2, title: 'rit rog roigh fvub'},
        {id: 3, title: 'vcljfd olgvfior hgijfrhij bhgfolibjfh'},
        {id: 4, title: 'sdf ksd kljfujfku bddbf'},
        {id: 5, title: 'df osd fosdfg iodghfuh fudh defgv'},
        {id: 6, title: 'dsf dfm gdmgbvfdb dflb fdgh'}
    ];
    
    $scope.openEtinMap = function() {
        
    };
    
});

yptIonic.controller('PlayerHomeCtrl', function($scope, $log) {
    $log.debug('PlayerHomeCtrl !!');
});

yptIonic.controller('PlayerStepCtrl', function($scope, $log) {
    $log.debug('PlayerStepCtrl !!');
});

yptIonic.controller('PlayerGalleryCtrl', function($scope, $log) {
    $log.debug('PlayerGalleryCtrl !!');
});

yptIonic.controller('PlayerOthersCtrl', function($scope, $log) {
    $log.debug('PlayerOthersCtrl !!');
});

