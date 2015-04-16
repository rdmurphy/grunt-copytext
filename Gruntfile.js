/*
 * grunt-copytext
 *
 *
 * Copyright (c) 2015 Ryan Murphy
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    copytext: {
      default_options: {
        src: ['test/fixtures/basic_keyvalue.xlsx'],
        dest: 'tmp/basic_keyvalue.json'
      },
      basetype_options: {
        options: {
          basetype: 'objectlist'
        },
        src: 'test/fixtures/basic_objectlist.xlsx',
        dest: 'tmp/basic_objectlist.json'
      },
      overrides_options: {
        options: {
          basetype: 'objectlist',
          overrides: {
            SHIBA: 'keyvalue'
          }
        },
        src: 'test/fixtures/mixed_keyvalue_objectlist.xlsx',
        dest: 'tmp/mixed_keyvalue_objectlist.json'
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'copytext', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
