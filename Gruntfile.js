module.exports = function(grunt) {

    // once per system install
    // $ npm install -g grunt-cli

    // once per project install
    // $ npm install

    // unused grunt modules - possible future use
    // "grunt-pagespeed": "^0.3.0",
    // "grunt-contrib-qunit": "^0.5.1",
    // "time-grunt": "^0.3.2", // include... require('time-grunt')(grunt);

    require('load-grunt-tasks')(grunt); // looks in package.json for "devDependencies"

    grunt.initConfig({

        // dev server
        nodemon: {
            dev: {
                script: 'app.js',
                options: {
                    ext: 'js,mst'
                }
            }
        },

        concurrent: {
            target: {
                tasks: ['nodemon', 'watch'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },

        watch: {
            sass: {
                files: 'public/css/sass/**/*.scss',
                tasks: 'sass:dev'
            },
            scripts: {
                files: ['public/js/partial/*.js'],
                tasks: 'concat:dev',
                options: {
                    spawn: false,
                },
            }
        },

        sass: {
            dev: {
                files: {
                    'public/css/compiled/style.css': 'public/css/sass/style.scss'
                }
            }
        },

        concat: {
            dev: {
                src: [
                    'public/js/partial/**/*.js'
                ],
                dest: 'public/js/global.js',
            }
        },

        uglify: {
            build: {
                files: {
                    'public/js/global.min.js': 'public/js/global.js',
                }
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,                   // Enable dynamic expansion
                    cwd: 'public/img/',             // src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],    // Actual patterns to match
                    dest: 'public/img/dist/'        // Destination path prefix
                }]
            }
        }

    });

    grunt.registerTask('default', ['concurrent:target']);  // run `grunt default`, or just `grunt`
    grunt.registerTask('dist',    'uglify');               // run `grunt uglify`
    grunt.registerTask('image',   'imagemin');             // run `grunt image`
    grunt.registerTask('server',  'nodemon');              // run `grunt server`

};