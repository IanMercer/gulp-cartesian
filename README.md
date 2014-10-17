# gulp-cartesian

> A gulp plugin for repeating files with separate metadata attached to each

## Usage

First, install `gulp-cartesian` as a development dependency:

```shell
npm install --save-dev gulp-cartesian
```

Then, add it to your `gulpfile.js`:

```javascript
var cartesian = require('gulp-cartesian');

gulp.task('multiply', function () {
    gulp.src('./specs/assets/**/*.txt')
        .pipe(cartesian({annotations:[{scale:32},{scale:64}]}))
        .pipe(gulp.dest('./build'));
});
```

## Arguments

### cartesian(annotations[])

`annotations`

An array of objects that will be looped over, one file emitted for each and the object
will be added to the file as the `meta` property.

## Changelog

See [HISTORY.md](https://github.com/ianmercer/gulp-cartesian/blob/master/HISTORY.md)

## Author

Copyright 2014, [Ian Mercer](http://blog.abodit.com) (ian@signswift.com)