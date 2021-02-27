#!/usr/bin/env node

import yargs from 'yargs'
import make from './make';
import random from './random';
const log = console.log;

const argv = yargs
  .command('make', 'Learn how to make a cocktail of your choice', {
    cocktail: {
      description: 'the cocktail to search for',
      alias: 'y',
      type: 'string',
    }
  })
  .option('random', {
    alias: 'r',
    description: 'Make a random cocktail',
    type: 'boolean',
  })
  .help()
  .alias('help', 'h')
  .argv;

// Find a cocktail
if (argv._.includes('make')) {

  let recipe;

  if(!argv.r) { // Not random, User inputted name
    let drinkInput = `${argv._[1]}`;

    //check if two word cocktail
    if(argv._[2]) {
      drinkInput = `${drinkInput} ${argv._[2]}`;
    }

    recipe = make(drinkInput);
  } else { // Get a random cocktail
    const randomPick = random();
    recipe = make(randomPick);
  }
}

log('All of the args', argv);

