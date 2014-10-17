/*
 * gulp-cartesian
 *
 * Copyright(c) Ian Mercer <ian@signswift.com>
 * MIT Licensed
 *
 */

'use strict';

var fs      = require('fs'),
    cartesian = require('../'),
    helper  = require('./helper');

describe('The "gulp-cartesian" plugin', function () {

    it('should annotate a single file with metadata', function (done) {
        var filename = 'test.txt',
            stream   = cartesian({annotations:[{name:'A test string'}]}),
            testFile = helper.createTestFile();

        stream.on('data', function (outputFile) {
            expect(outputFile.meta.name).toBe('A test string');
            done();
        });

        stream.write(testFile);
        stream.end();
    });


    it('should repeat a single file multiple times', function (done) {
        var filename = 'test.txt',
            stream   = cartesian({annotations:[{name:'#1'},{name:'#2'}]}),
            testFile = helper.createTestFile();

        var count = 0;

        stream.on('data', function (outputFile) {
            count++;
            expect(outputFile.meta.name).toBe('#'+count);
            done();
        });

        stream.write(testFile);
        stream.end();

        expect(count).toBe(2);
    });

});