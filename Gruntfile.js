    //Gruntfile
    module.exports = function(grunt) {

    //Initializing the configuration object
      grunt.initConfig({
        
        /*1. 
        *Check JS errors
        *
        */
        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            all: ['angular-openweathermap.js','Gruntfile.js']
        },
        
        /*2. 
        *Minify JS file
        *
        */
        uglify: {
            js: {
                files: {
                    'angular-openweathermap.min.js': 'angular-openweathermap.js'
                }
            }
        },
      });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Task definitions
    grunt.registerTask('default', [ 'jshint', 'uglify']);
  };
