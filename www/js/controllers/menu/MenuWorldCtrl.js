
yptIonic.controller('MenuWorldCtrl', function($scope, $http, $timeout, $log, $cordovaGeolocation, leafletData) {
    
    $scope.$on("leafletDirectiveMap.geojsonMouseover", function(ev, feature, leafletEvent) {
        var layer = leafletEvent.target;
        layer.setStyle({
            weight: 2,
            color: '#666',
            fillColor: 'white'
        });
        layer.bringToFront();
        $scope.selectedCountry = feature;
        console.log(feature);
        
    });

    $scope.$on("leafletDirectiveMap.geojsonClick", function(ev, featureSelected, leafletEvent) {
        console.log(featureSelected.properties.name);
    });
    
    var continentProperties = {
        "009": {
            name: 'Oceania',
            colors: [ '#CC0066', '#993366', '#990066', '#CC3399', '#CC6699' ]
        },
        "019": {
            name: 'America',
            colors: [ '#006699', '#336666', '#003366', '#3399CC', '#6699CC' ]
        },
        "150": {
            name: 'Europe',
            colors: [ '#FF0000', '#CC3333', '#990000', '#FF3333', '#FF6666' ]
        },
        "002": {
            name: 'Africa',
            colors: [ '#00CC00', '#339933', '#009900', '#33FF33', '#66FF66' ]
        },
        "142": {
            name: 'Asia',
            colors: [ '#FFCC00', '#CC9933', '#999900', '#FFCC33', '#FFCC66' ]
        },
    };

    // Get a country paint color from the continents array of colors
    function getColor(country) {
        if (!country || !country["region-code"]) {
            return "#FFF";
        }

        var colors = continentProperties[country["region-code"]].colors;
        var index = country["alpha-3"].charCodeAt(0) % colors.length;
        return colors[index];
    }
    
    $scope.map = {
        defaults: {
            maxZoom: 18,
            zoomControlPosition: 'bottomleft'
        },
        tiles: {
            url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        },
        center: {
            lat: 40.8471,
            lng: 14.0625,
            zoom: 2
        },
        markers: {},
        events: {
            map: {
                enable: ['context'],
                logic: 'emit'
            }
        },
        selectedCountry: {}
    };
    
    leafletData.getMap().then(function (map) {
        $http.get("data/all.json").success(function(data, status) {
            
            // Put the countries on an associative array
            $scope.countries = {};
            for (var i=0; i< data.length; i++) {
                var country = data[i];
                $scope.countries[country['alpha-3']] = country;
            }
            
            // Get the countries geojson data from a JSON
            $http.get("data/countries.geo.json").success(function(data, status) {
                
                L.geoJson(data, {
                    style: function (feature) {
                        return {
                            fillColor: getColor($scope.countries[feature.id]),
                            weight: 1,
                            opacity: 1,
                            color: 'white',
                            dashArray: '3',
                            fillOpacity: 0.4
                        };
                    },
                    resetStyleOnMouseout: true,
                    onEachFeature: function (feature, layer) {
                        layer.on({
                            click: function(e) {
                                var layer = e.target;
                                map.fitBounds(layer.getBounds());
                                $scope.selectedCountry = layer.feature;
                            }
                        });
                    }
                }).addTo(map);
            });
        });
    });
    
    $scope.locateMe = function() {
        var q = $cordovaGeolocation.getCurrentPosition({enableHighAccuracy: true, timeout: 2*1000, maximumAge: 0});
        
        q.then(function (position) {
//            $scope.map.center.lat  = position.coords.latitude;
//            $scope.map.center.lng = position.coords.longitude;
//            $scope.map.center.zoom = 6;
            
            $scope.map.markers.me = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                message: "You Are Here",
                focus: true,
                draggable: false
            };
            
            leafletData.getMap().then(function (map) {
                var latlngPoint = new L.LatLng(position.coords.latitude, position.coords.longitude);
                map.fireEvent('click', {
                    latlng: latlngPoint,
                    layerPoint: map.latLngToLayerPoint(latlngPoint),
                    containerPoint: map.latLngToContainerPoint(latlngPoint)
                });
            });
            
        });
        
        q.catch(function(err) {
            console.log("Location error!");
            console.log(err);
        });
    };
    
});