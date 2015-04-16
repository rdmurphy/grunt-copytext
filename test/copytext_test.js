'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.copytext = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.readJSON('tmp/basic_keyvalue.json');
    var expected = grunt.file.readJSON('test/expected/basic_keyvalue.json');
    test.deepEqual(actual, expected, 'should return a copytext processed sheet using the default `keyvalue` basetype');

    test.done();
  },
  basetype_options: function(test) {
    test.expect(1);

    var actual = grunt.file.readJSON('tmp/basic_objectlist.json');
    var expected = grunt.file.readJSON('test/expected/basic_objectlist.json');
    test.deepEqual(actual, expected, 'should return a copytext processed sheet using a set `objectlist` basetype');

    test.done();
  },
  overrides_options: function(test) {
    test.expect(1);

    var actual = grunt.file.readJSON('tmp/mixed_keyvalue_objectlist.json');
    var expected = grunt.file.readJSON('test/expected/mixed_keyvalue_objectlist.json');
    test.deepEqual(actual, expected, 'should return a copytext processed sheet with basetype and override set');

    test.done();
  }
};
