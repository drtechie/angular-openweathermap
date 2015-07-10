'use strict';

angular.module('angular-openweathermap', [
]).directive('angularOpenweathermap', ['$http', function ($http) {
    return {
        restrict: 'EA',
        template: '<i class="wi" ng-class="weatherClass" tooltip="{{weatherDescription}}" style="padding-right:5px;"></i><span ng-bind-html="cityName"></span> | <span ng-bind-html="temperature"></span>',
        transclude: true,
        scope: {
            cityName: '@',
            offsetHours: '@',
            offsetMinutes: '@'
        },
        link: function (scope, element, attrs) {
            $http.get('http://api.openweathermap.org/data/2.5/weather?units=metric&q='+ scope.cityName).success(function(res){
                scope.weather = res;
                // Temperature in Celsius
                var temperatureC = res.main.temp;
                // Convert to Farenheit
                var temperaturF = Math.round(temperatureC*1.8+32);
                // Round Celsius temperature
                temperatureC = Math.round(temperatureC);
                scope.temperature = temperatureC+'&deg;C / '+temperaturF+'&deg;F';

                // Calculate current hour using offset from UTC.
                var datetime = new Date((res.dt*1000)+(scope.offsetHours*3600000)+(scope.offsetMinutes*60000));
                var sunrise = new Date(res.sys.sunrise*1000+(scope.offsetHours*3600000)+(scope.offsetMinutes*60000));
                var sunset = new Date(res.sys.sunset*1000+(scope.offsetHours*3600000)+(scope.offsetMinutes*60000));
                var currentHour = datetime.getUTCHours();
                var sunriseHour = sunrise.getUTCHours();
                var sunsetHour = sunset.getUTCHours();

                // Hour between sunset and sunrise being night time
                var night = false;
                if ( currentHour >= sunsetHour || currentHour <= sunriseHour) {
                    night = true;
                }
                // Format weather description
                scope.weatherDescription = res.weather[0].description.charAt(0).toUpperCase() + res.weather[0].description.slice(1);
                // Change weather icon class according to weather code.
                if (night) {
                    switch (res.weather[0].id) {
                        case 200:
                        case 201:
                        case 202:
                        case 210:
                        case 211:
                        case 212:
                        case 221:
                            scope.weatherClass = "wi-night-alt-thunderstorm";
                            break;
                        case 230:
                        case 231:
                        case 232:
                        case 901:
                            scope.weatherClass = "wi-night-alt-storm-showers";
                            break;
                        case 300:
                        case 301:
                        case 302:
                        case 310:
                        case 311:
                        case 312:
                        case 313:
                        case 314:
                        case 321:
                        case 621:
                        case 622:
                            scope.weatherClass = "wi-night-alt-showers";
                            break;
                        case 500:
                        case 501:
                        case 502:
                        case 503:
                        case 504:
                        case 511:
                        case 520:
                        case 521:
                        case 522:
                        case 531:
                            scope.weatherClass = "wi-night-alt-rain";
                            break;
                        case 600:
                        case 601:
                        case 602:
                        case 611:
                        case 612:
                            scope.weatherClass = "wi-night-alt-snow";
                            break;
                        case 615:
                        case 616:
                        case 620:
                        case 611:
                        case 612:
                            scope.weatherClass = "wi-night-alt-rain-mix";
                            break;
                        case 701:
                        case 721:
                        case 741:
                            scope.weatherClass = "wi-night-fog";
                            break;
                        case 800:
                        case 951:
                            scope.weatherClass = "wi-night-clear";
                            break;
                        case 801:
                        case 802:
                        case 803:
                        case 804:
                            scope.weatherClass = "wi-night-alt-cloudy";
                            break;
                        case 906:
                            scope.weatherClass = "wi-night-alt-hail";
                            break;
                        case 906:
                            scope.weatherClass = "wi-night-alt-cloudy-windy";
                            break;
                    }   
                }
                else {
                    switch (res.weather[0].id) {
                        case 200:
                        case 201:
                        case 202:
                        case 210:
                        case 211:
                        case 212:
                        case 221:
                            scope.weatherClass = "wi-day-thunderstorm";
                            break;
                        case 230:
                        case 231:
                        case 232:
                        case 901:
                            scope.weatherClass = "wi-day-storm-showers";
                            break;
                        case 300:
                        case 301:
                        case 302:
                        case 310:
                        case 311:
                        case 312:
                        case 313:
                        case 314:
                        case 321:
                        case 621:
                        case 622:
                            scope.weatherClass = "wi-day-showers";
                            break;
                        case 500:
                        case 501:
                        case 502:
                        case 503:
                        case 504:
                        case 511:
                        case 520:
                        case 521:
                        case 522:
                        case 531:
                            scope.weatherClass = "wi-day-rain";
                            break;
                        case 600:
                        case 601:
                        case 602:
                        case 611:
                        case 612:
                            scope.weatherClass = "wi-day-snow";
                            break;
                        case 615:
                        case 616:
                        case 620:
                        case 611:
                        case 612:
                            scope.weatherClass = "wi-day-rain-mix";
                            break;
                        case 701:
                        case 721:
                        case 741:
                            scope.weatherClass = "wi-day-fog";
                            break;
                        case 800:
                        case 951:
                            scope.weatherClass = "wi-day-sunny";
                            break;
                        case 801:
                        case 802:
                        case 803:
                        case 804:
                            scope.weatherClass = "wi-day-cloudy";
                            break;
                        case 906:
                            scope.weatherClass = "wi-day-hail";
                            break;
                        case 906:
                            scope.weatherClass = "wi-day-cloudy-windy";
                            break;
                    }  

                }
                switch (res.weather[0].id) {
                    case 731:
                    case 751:
                    case 761:
                    case 762:
                        scope.weatherClass = "wi-dust";
                        break;
                    case 711:
                        scope.weatherClass = "wi-smoke";
                        break;
                    case 771:
                    case 957:
                    case 958:
                    case 959:
                    case 960:
                        scope.weatherClass = "wi-strong-wind";
                        break;
                    case 781:
                    case 900:
                        scope.weatherClass = "wi-tornado";
                        break;
                    case 902:
                    case 961:
                    case 962:
                        scope.weatherClass = "wi-hurricane";
                        break;
                    case 903:
                        scope.weatherClass = "wi-snowflake-cold";
                        break;
                    case 904:
                        scope.weatherClass = "wi-hot";
                        break;
                    case 905:
                    case 951:
                    case 952:
                    case 953:
                    case 954:
                    case 955:
                    case 956:
                        scope.weatherClass = "wi-windy";
                        break;
                }
            });
        }
    };
}]);
