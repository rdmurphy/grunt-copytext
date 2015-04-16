# grunt-copytext

> A Grunt plugin to convert a properly formatted XLSX spreadsheet into a JSON file for templates using the [`copytext`](https://github.com/rdmurphy/node-copytext) library.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-copytext --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-copytext');
```

## The `copytext` task

### Overview
In your project's Gruntfile, add a section named `copytext` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  copytext: {
    base: {
      options: {
        // Target-specific options go here.
      },
      src: // input file
      dest: // output file
    }
  }
});
```

`grunt-copytext` fully supports the [all methods](http://gruntjs.com/configuring-tasks#files) of file globbing `Grunt` provides, as well.

### Options

#### options.basetype
Type: `String`
Default value: `'keyvalue'`

The default processor to use for converting XLSX sheets.

#### options.overrides
Type: `Object`
Default value: `[]`

A set of key/value pairs that override the `basetype` for each specified sheet.

```js
// an example of `overrides` in use
{
  basetype: 'objectlist',
  overrides: {
    META: 'keyvalue'
  }
}
```

#### options.output
Type: `Function`
Default value: `function(input) { return JSON.stringify(input); }`

By default the output of any XLSX files passed into `grunt-copytext` will be written to the `dest` as JSON. Provide your own function to bypass that. `input` represents the `Object` that `copytext` produces after processing the XLSX file.

### Usage Examples

#### Default Options
In this example, it is assumed that all XLSX sheets being passed in are in the `keyvalue` format.

```js
grunt.initConfig({
  node_copytext: {
    base: {
      options: {},
      src: './test/fixtures/basic_keyvalue.xlsx',
      dest: './tmp/basic_keyvalue.json'
    }
  }
})
```

#### Custom Options
In this example, custom options are used to tell `grunt-copytext` what to pass on to the `copytext` library.

```js
grunt.initConfig({
  copytext: {
    base: {
      options: {
        basetype: 'objectlist',
        overrides: {
          SHIBA: 'keyvalue'
        }
      },
      src: './test/fixtures/mixed_keyvalue_objectlist.xlsx',
      dest: './tmp/mixed_keyvalue_objectlist.json'
    }
  }
});
```

If you wanted to process a whole bunch of XLSX files, that is also possible – as long as they all use the same sheet options. Otherwise you'll need to create separate tasks.

```js
grunt.initConfig({
  copytext: {
    base: {
      options: {
        basetype: 'objectlist'
      },
      files: [{
        expand: true,
        cwd: './test/fixtures/',
        src: '*.xlsx',
        dest: './tmp/',
        ext: '.json'
      }]
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License
By [Ryan Murphy](https://twitter.com/rdmurphy).

Available under the MIT license.
