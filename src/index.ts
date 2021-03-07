#!/usr/bin/env node

import yargs from 'yargs'
import { findByGlass, findByLiquor, findByIngredients } from './find';
import { makeByName, makeByRandom } from './make';
import { getCocktailName } from './utils/utils';

const argv = yargs
  .command('make', 'Learn how to make a cocktail of your choice', {
    make: {
      description: 'the cocktail to search for',
      type: 'string',
    }
  })
  .option('random', {
    alias: 'r',
    description: 'Make a random cocktail'
  })
  .option('amount', {
    alias: 'a',
    description: 'Make amount of a cocktail',
    type: 'number'
  })
  .command('find', 'Find cocktails by attribute', {
    find: {
      description: 'the cocktail to search for',
      type: 'string',
    }
  })
  .option('glass', {
    alias: 'g',
    description: 'Find a cocktail by glassware',
    type: 'string',
  })
  .option('liquor', {
    alias: 'l',
    description: 'Find a cocktail by liquor',
    type: 'string',
  })
  .options('ingredients', {
    alias: 'i',
    description: 'Find a cocktail by ingredients',
    type: 'array',
  })
  .help()
  .alias('help', 'h')
  .argv;

// Make a cocktail
if (argv._.includes('make')) {

  if(argv.r) {
    makeByRandom(argv.amount ? argv.amount : 1);
  } else {
    const input = argv._;
    makeByName(getCocktailName(input), argv.amount ? argv.amount : 1);
  }
}

// Find a cocktail
if(argv._.includes('find')) {
  switch(Object.keys(argv)[1].toString()) {
    case 'g':
      argv.glass && findByGlass(argv.glass);
      break;
    case 'l':
      argv.liquor && findByLiquor(argv.liquor);
      break;
    case 'i':
      argv.ingredients && findByIngredients(argv.ingredients.map(String));
  }
}

// Debug with this
// console.log('All of the args', argv);
