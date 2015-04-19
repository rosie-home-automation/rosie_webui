/*jslint node: true */
"use strict"

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //bower: {
      //install: {
        //options: {
          //install: true,
          //copy: false,
          //targetDir: './libs',
          //cleanTargetDir: true
        //},
        //bowerOptions: {
          //forceLatest: true
        //}
      //}
    //},

    uglify: {
      dist: {
        files: {
          'public/js/app.js': [ 'public/js/app.js' ]
        },
        options: {
          mangle: false
        }
      }
    },

    html2js: {
      dist: {
        src: [ 'assets/templates/*.html' ],
        dest: 'tmp/templates.js'
      }
    },

    clean: {
      temp: {
        src: [ 'tmp' ]
      },
      dist: {
        src: [ 'dist' ]
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: [ 'assets/modules/*.js', 'assets/controllers/*.js', 'assets/models/*.js', 'tmp/*.js' ],
        dest: 'public/js/app.js'
      }
    },

    jshint: {
      options: {
        asi: true
      },
      all: [ 'Gruntfile.js', 'app/*.js', 'app/**/*.js' ]
    },

    connect: {
      server: {
        options: {
          hostname: '0.0.0.0',
          port: 4000 
        }
      }
    },

    watch: {
      dev: {
        files: ['Gruntfile.js', 'assets/*/*.js', '*.html'],
        tasks: ['jshint', 'html2js:dist', 'concat:dist', 'sass:dev', 'clean:temp'],
        //tasks: [ 'jshint', 'karma:unit', 'html2js:dist', 'concat:dist', 'sass:dev', 'clean:temp' ],
        options: {
          atBegin: true
        }
      },
      min: {
        files: ['Gruntfile.js', 'app.js', 'app/*.js', '*.html', 'app/**/*.scss'],
        tasks: ['jshint', 'karma:unit', 'html2js:dist', 'concat:dist', 'sass:dist', 'clean:temp', 'uglify:dist'],
        options: {
          atBegin: true
        }
      }
    },

    compress: {
      dist: {
        options: {
          archive: 'dist/<%= pkg.name %>-<%= pkg.version %>.zip'
        },
        files: [{
          src: [ 'index.html', 'dist/*.js', 'dist/*.css', 'libs/**' ]
        }]
      }
    },

    sass: {
      dev: {
        files: {
          "public/css/app.css": "assets/scss/app.scss"
        }
      },
    },

    karma: {
      options: {
        configFile: 'config/karma.conf.js'
      },
      unit: {
        singleRun: true
      },

      continuous: {
        singleRun: false,
        autoWatch: true
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-compress')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-html2js')
  grunt.loadNpmTasks('grunt-contrib-watch')
  //grunt.loadNpmTasks('grunt-bower-task')
  grunt.loadNpmTasks('grunt-karma')
  grunt.loadNpmTasks('grunt-sass')

  grunt.registerTask('dev', [ 'clean:dist', 'watch:dev' ])
  grunt.registerTask('test', [ 'clean:dist', 'jshint', 'karma:continuous' ])
  grunt.registerTask('minified', [ 'clean:dist', 'connect:server', 'watch:min' ])
  grunt.registerTask('package', [ 'clean:dist', 'jshint', 'karma:unit', 'html2js:dist', 'concat:dist',
    'uglify:dist', 'sass:dev', 'clean:temp', 'compress:dist' ])
}
