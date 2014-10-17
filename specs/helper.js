/*
 * gulp-cartesian
 *
 * Copyright(c) 2014 Ian Mercer <ian@signswift.com>
 * MIT Licensed
 *
 */

'use strict';

var fs        = require('fs'),
    os        = require('os'),
    path      = require('path'),
    imagesize = require('imagesize'),
    gutil     = require('gulp-util');

/**
 * Creates a vinyl file descriptor for testing.
 *
 * @return {object}
 *
 */
exports.createTestFile = function createTestFile () {
    return new gutil.File({
        cwd:  './specs/assets/',
        base: './specs/assets/',
        path: './specs/assets/test.txt',
        contents: fs.readFileSync('./specs/assets/test.txt')
    });
};