/*
 * gulp-cartesian
 *
 * Copyright(c) 2014 Ian Mercer <ian@signswift.com>
 * MIT Licensed
 *
 */

/**
 * @author Ian Mercer <ian@signswift.com>
 *
 */

'use strict';

var PLUGIN_NAME = 'gulp-cartesian';
var path        = require('path');
var fs          = require('fs');
var gutil       = require('gulp-util');
var through = require('through2');
var extend = require('lodash.assign');
var vinyl = require("vinyl");       /* Not actually used directly, see clone method in it */

var defaultOptions = {
    /* An array of metadata. Each file is repeated once for each item in here. */
    annotations: []
  };

/**
 * gulp-cartesian plugin
 *
 * @param {number} options (optional) The options for each .
 * @param {boolean} verbose (optional) Should the progress be logged?
 *
 */
module.exports = function (config) {

    var options = extend({}, defaultOptions, config || {});
    var annotateIndex = options.annotateIndex;


    /**
     * Annotates the source file, outputing each annotated version.
     *
     * @param  {gutil.File} source The source file
     * @param  {function} cb The callback for completion
     *
     */
    function annotate (source, encoding, cb) {

      /*jshint validthis: true */
      var me = this;

      // Output each variant
      options.annotations.forEach(function (annotation) {

        var file = source.clone(true);
        file.meta = annotation;

        me.push(file);
      });

      cb();  /* Finished output stream */
    }

    return through.obj(annotate);
};