/**
 * @file gulpfile.js
 * @description Gulp task automator javascript file.
 */
const gulp = require('gulp'),
    fs = require('fs'),
    // SASS
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

// Apps to be launched on server bootstrap
const apps = [
    {
        srcFolder: './src',
        port: 3000,
        uiPort: 3001,
        start: true,
        buildSCSS: true
    }
]

/**
 * Build SCSS task.
 * This task is responsible for processing SASS files converting them to plain CSS.
 */
gulp.task('build:scss', function() {
    for (var i = 0; i < apps.length; i++) {
        if (apps[i].start && apps[i].buildSCSS) {
            gulp.src(apps[i].srcFolder + '/assets/scss/styles.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(
                autoprefixer({
                    browsers: ['last 2 versions']
                })
            )
            .pipe(gulp.dest(apps[i].srcFolder));
        }
    }
    return true;
});

/**
 * Serve task.
 * This task is responsible for launching Browser Sync and setting up watchers over the file types involved in the
 * development process. If any changes are detected in one of those files, the build process is triggered and subsequently
 * Browser Sync reloads the application in all connected browsers.
 */
gulp.task('serve', function() {
    var index = 0;
    // make sure the application is built before launching
    for (var i = 0; i < apps.length; i++) {
        // this timeout function guarantees all browser sync instances have time to bootstrap
        setTimeout(function() {
            var srcFolder = apps[index].srcFolder,
                port = apps[index].port,
                uiPort = apps[index].uiPort,
                start = apps[index].start;

            index++;
            if (!start) return;

            fs.stat(srcFolder + '/index.html', function(err) {
                if (!err) {
                    var bs = require('browser-sync').create();
                    bs.init({
                        server: { baseDir: srcFolder, index: 'index.html' }, port: port, ui: { port: uiPort }
                    });
                    // listen for changes in the following file types
                    gulp.watch(srcFolder + '/**/*.scss', ['build:scss']);
                    gulp.watch([srcFolder + '/**/*.js', srcFolder + '/**/*.html', srcFolder + '/**/*.css' ]).on('change', bs.reload);
                } else {
                    // detect specific errors
                    switch (err.code) {
                        case 'ENOENT':
                            console.log(
                                '\x1b[31mGulp "serve" task error\x1b[0m: There is no build available. ' +
                                    'Please, run the command \x1b[32mgulp build\x1b[0m before starting the server ' +
                                    'or simply \x1b[32mgulp\x1b[0m.\n'
                            );
                            break;
                        default:
                            console.log(
                                '\x1b[31mGulp "serve" task error\x1b[0m: Unknown error. Details: ',
                                err
                            );
                            break;
                    }
                }
            });

        }, 250 * i+1);
    }
});

/**
 * Default task.
 * This task is responsible for bundling and running all tasks associated with the production of the application
 * in a distributable format. This task also starts the application server in development mode.
 */
gulp.task('default', ['build:scss', 'serve'], function() {
    // run the serve task as default
});
