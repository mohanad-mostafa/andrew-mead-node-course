// tutorial 1
// const fs = require('fs');

// fs.writeFileSync('notes.txt', 'My name is Andrew.');

// fs.appendFileSync('notes.txt', ' I live in Philadelphia.');
// ----------------------------------------------------------------------------

// tutorial 2
// const getNotes = require('./utils.js');
// console.log(getNotes());

// ----------------------------------------------------------------------------

// tutorial 3
const validator = require('validator');
const chalk = require('chalk');

console.log(chalk.green('Success!'));
console.log(chalk.blue('Hello world!'));

const error = chalk.red.bold.inverse;
console.log(error('Error!'));