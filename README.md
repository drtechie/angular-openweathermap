

![Angular Openweathermap](https://raw.githubusercontent.com/drtechie/angular-openweathermap/master/image/weather.png)

# angular-openweathermap

Angular.js module for displaying current weather using Openweathermap API and weather-icons.
This module depends on [weather-icons created by erikflowers](https://github.com/erikflowers/weather-icons). 
The module fetches weather data from Openweathermap API and displays an appropriate weather icon.

The tooltip to display weather description depends on [AngularUI Bootstrap](https://github.com/angular-ui/bootstrap).

Heavily inspired by [cornell.edu footer weather](http://cornell.edu/)

Getting Started
---------------

 * [View the source of demo file](https://raw.github.com/drtechie/angular-openweathermap/master/index.html)
 * Include the script tag on your page after the AngularJS tag

        <script type='text/javascript' src='path/to/angular.min.js'></script>
        <script type='text/javascript' src='path/to/angular-sanitize.min.js'></script>
        <script src="path/to/ui-bootstrap-tpls.min.js"></script> <!-- If you wish to add tooltip -->
        <script type='text/javascript' src='path/to/angular-openweathermap.min.js'></script>

 * Ensure that your application module specifies angular-parallax` as a dependency:

        angular.module('myApplication', ['angular-openweathermap', 'ngSanitize']);
        
        OR 
        
        angular.module('myApplication', ['angular-openweathermap', 'ngSanitize', 'ui.bootstrap']); // for tooltip

 * Use this directive.

        <angular-openweathermap city-name="New York" offset-hours="-4" offset-minutes="0"></angular-openweathermap>
        
  Set offset-hours and offset-minutes according to your desired timezone.
  
  * Include the CSS files to load weather-icons

        <link rel="stylesheet" href="path/to/weather-icons.min.css">
        <link rel="stylesheet" href="path/to/bootstrap.min.css"> <!-- If you wish to add tooltip -->
  
  License
  -------

**angular-openweathermap** is licensed under the MIT license. See the LICENSE file for more details.

