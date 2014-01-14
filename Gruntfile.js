module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: {
        src: ['*.js', 'problems/*.js']
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
    watch: {
      js: {
        files: ['*.js', 'problems/*.js'],
        tasks: ['jshint', 'shell:run']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['jshint', 'shell:run', 'watch']);
  grunt.registerTask('create', ['shell:create']);
};

