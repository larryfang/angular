module.exports = function(grunt) { // Load the plugins
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      dev: ['dev']
    },
    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    },

    connect: {
      dev: {
        options: {
          port: 4000,
          base: 'dev',
          keepalive: true
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function(connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static('dev')
            ];
          }
        }
      },
    },
    protractor: {
      options: {
        //configFile: "config/protractor/e2e.conf.js", // Default config file
        keepAlive: false, // If false, the grunt process stops when the test fails.
        noColor: false, // If true, protractor will not use colors in its output.
        debug: false, // If true, puts protractor into debug mode (browser.debugger() will pause the browser)
        args: {
          // Arguments passed to the command
          seleniumServerJar: 'node_modules/selenium-standalone/.selenium/selenium-server/2.44.0-server.jar',
          chromeDriver: 'node_modules/selenium-standalone/.selenium/chromedriver/2.13-x64-chromedriver',
        }
      },
      debug: {
        options: {
          debug: true
        },
        configFile: "test/localhost.conf.js"
      },
      localhost: {
        configFile: "test/localhost.conf.js"
      }
    },
    copy: {
      html: {
        files: [{
          expand: true,
          flatten: true,
          src: ['app/*.html'],
          dest: 'dev/'
        }]
      },
      js: {
        files: [{
            expand: true,
            flatten: true,
            src: ['app/*.js'],
            dest: 'dev/'
          }, {
            expand: true,
            flatten: true,
            src: ['bower_components/**/*.js'],
            dest: 'dev/lib/'
          }

        ]
      },
      css: {
        files: [{
          expand: true,
          flatten: true,
          src: ['app/*.css'],
          dest: 'dev/'
        }]
      }
    },
    cssmin: {
      options: {
        report: 'min'
      },
      'dev/style.css': 'dev/style.css'
    },
    htmlmin: {
      options: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      all: {
        files: [{
          expand: true,
          cwd: 'dev',
          src: ['*.html'],
          dest: 'dev'
        }]
      }
    },



    // configure nodemon
    nodemon: {
      dev: {
        script: 'server.js',
        env: {
          PORT: '5000'
        },
        cwd: __dirname,
        ignore: ['node_modules/**'],
        ext: 'js,coffee'
      }
    },

    uglify: {
      options: {
        report: 'min',
        compress: {
          dead_code: true
        },
        mangle: true
      },
      'dev/app.js': 'dev/app.js'
    },
  });

  // Build task
  grunt.registerTask('build', ['clean:dev', 'copy', 'cssmin', 'htmlmin', 'uglify']);

  // Development task
  grunt.registerTask('dev', ['build', 'connect:dev']);
  grunt.registerTask('test', [
    'build',
    'connect:test',
    'karma',
    'protractor:localhost'
  ]);


  // load nodemon
  grunt.loadNpmTasks('grunt-nodemon');

  // register the nodemon task when we run grunt
  grunt.registerTask('server', ['nodemon']);

};