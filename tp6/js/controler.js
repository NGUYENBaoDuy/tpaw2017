var meteoControllers = angular.module('meteoControllers', []);
meteoControllers.controller('MainController', ['$scope', '$http',
    function ($scope, $http) {
        $scope.recherche = function () {
            /* appel AJAX à l’API openweathermap */
            $http.get('https://demo.bilelz.fr/owmap/?q=' + $scope.city + '&units=metric&appid=ae3e8be45d47ccd5941b17ff8f3aba94')
                .success(function (data) {
                    /* on met dans l’objet ​meteo les données retournées
                     par openweathermap */
                    $scope.meteo = data;
                    $scope.meteo.date = new Date($scope.meteo.dt * 1000);

                }).error(function (data) {
                    /* en cas d’erreur */
                    $scope.errorMsg = "Hum. Error... please retry.";
                });
        }
        $scope.GPS = function () {
            navigator.geolocation.getCurrentPosition(function (position) {
                /* appel AJAX à l’API openweathermap */
                $http.get('http://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&units=metric&appid=ae3e8be45d47ccd5941b17ff8f3aba94')
                    .success(function (data) {
                        /* on met dans l’objet ​meteo les données retournées
                         par openweathermap */
                        $scope.meteo = data;
                        $scope.meteo.date = new Date($scope.meteo.dt * 1000);
                    }).error(function (data) {
                        /* en cas d’erreur */
                        $scope.errorMsg = "Hum. Error... please retry.";
                    });
            })
        }
    }]);
