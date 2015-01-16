
yptIonic.directive('etinCard', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            etin: '='
        },
        templateUrl: 'templates/etinCard.tpl.html',
    };
});