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
      }
    },
    watch: {
      js: {
        files: ['*.js', 'problems/*.js'],
        tasks: ['jshint', 'shell']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['jshint', 'shell', 'watch']);
};

