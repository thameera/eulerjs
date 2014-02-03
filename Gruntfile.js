module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: {
        src: ['*.js', 'problems/*.js']
      },
      test: {
        src: ['*.js', 'test/*.js']
      }
    },
    shell: {
      run: {
        options: {
          stdout: true,
          stderr: true
        },
        command: 'node main.js ' + grunt.option('p')
      },
      create: {
        options: {
          stdout: true,
          stderr: true
        },
        command: 'cp template.js problems/' + grunt.option('p') + '.js'
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/*.js']
      }
    },
    watch: {
      js: {
        files: ['*.js', 'problems/*.js'],
        tasks: ['jshint:all', 'shell:run']
      },
      test: {
        files: ['*.js', 'test/*.js'],
        tasks: ['jshint:test', 'mochaTest']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('default', ['jshint', 'shell:run', 'watch:js']);
  grunt.registerTask('create', ['shell:create']);
  grunt.registerTask('test', ['jshint:test', 'mochaTest', 'watch:test']);
};

