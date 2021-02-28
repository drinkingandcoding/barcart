#!/usr/bin/env node

import yargs from 'yargs'
import { findByGlass } from './find/find';
import make from './make/make';
import random from './make/random';
const log = console.log;

const argv = yargs
  .command('make', 'Learn how to make a cocktail of your choice', {
    cocktail: {
      description: 'the cocktail to search for',
      alias: 'm',
      type: 'string',
    }
  })
  .option('random', {
    alias: 'r',
    description: 'Make a random cocktail',
    type: 'boolean',
  })
  .command('find', 'Find cocktails by attribute', {
    cocktail: {
      description: 'the cocktail to search for',
      alias: 'f',
      type: 'string',
    }
  })
  .option('glass', {
    alias: 'g',
    description: 'find a cocktail by glassware',
    type: 'string',
  })
  .help()
  .alias('help', 'h')
  .argv;

// Make a cocktail
if (argv._.includes('make')) {

  if(!argv.r) { // Not random, User inputted name
    let drinkInput = `${argv._[1]}`;

    //check if two word cocktail
    if(argv._[2]) {
      drinkInput = `${drinkInput} ${argv._[2]}`;
    }

    make(drinkInput);
  } else { // Get a random cocktail
    random();
  }
}

if(argv._.includes('find')) {
  if(argv.glass) {
    findByGlass(argv.glass);
  } else {
    log('You need to supply a type of glass!');
  }
}


// log('All of the args', argv);
