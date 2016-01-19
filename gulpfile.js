var gulp = require('gulp');
var fs = require('fs');

var config = {
  paths: {
    src: './src',
    tmp: './tmp',
    styles: 'styles',
    ts: 'src/**/*.ts',
    tsd: 'typings/tsd.d.ts',
    jspmTsd: 'jspm_packages/**/*.d.ts',
    // important to keep this path updated to exclude from jsc 
    jspmTypescriptTsd: 'jspm_packages/npm/typescript@1.7.5/**/*.d.ts', 
    tsConfig: 'tsconfig.json'
  }
};

// LOAD TASKS

var files = fs.readdirSync('./gulp-tasks');
for (var i = 0; i < files.length; i++) {
   require('./gulp-tasks/' + files[i])(gulp, config);
}