
bookModule.factory('Country', function($http) {

    var isMobileValue;
    
    var Service =  {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        isMobile: function() {
            if(isMobileValue === undefined) {
                isMobileValue = (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows());
            }
            return isMobileValue;
        }
    };
    
    return Service;
});