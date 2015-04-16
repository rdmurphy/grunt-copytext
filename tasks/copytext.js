/*
 * grunt-copytext
 *
 *
 * Copyright (c) 2015 Ryan Murphy
 * Licensed under the MIT license.
 */

'use strict';

var copytext = require('copytext');
var chalk = require('chalk');

module.exports = function(grunt) {
  grunt.registerMultiTask('copytext', 'A Grunt plugin to convert a properly formatted XLSX spreadsheet into a JSON file for templates', function() {
    var options = this.options({
      output: function(input) {
        return JSON.stringify(input);
      }
    });

    this.files.forEach(function(file) {
      var src = file.src.filter(function(filepath) {
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file ' + chalk.cyan(filepath) + ' not found.');
          return false;
        } else {
          return true;
        }
      });

      src.forEach(function(filepath) {
        var buffer = grunt.file.read(filepath, {encoding: null});
        var contents = copytext(buffer, options);

        grunt.file.write(file.dest, options.output(contents));
        grunt.log.writeln('File "' + chalk.cyan(file.dest) + '" created.');
      });
    });
  });
};
