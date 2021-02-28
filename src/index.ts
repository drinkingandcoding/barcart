#!/usr/bin/env node

import yargs from 'yargs'
import { findByGlass, findByLiquor } from './find';
import { makeByName, makeRandom } from './make';
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
  .command('find', 'Find cocktails by attribute', {
    find: {
      description: 'the cocktail to search for',
      type: 'string',
    }
  })
  .option('glass', {
    alias: 'g',
    description: 'find a cocktail by glassware',
    type: 'string',
  })
  .option('liquor', {
    alias: 'l',
    description: 'find a cocktail by liquor',
    type: 'string',
  })
  .help()
  .alias('help', 'h')
  .argv;

// Make a cocktail
if (argv._.includes('make')) {

  if(argv.r) {
    makeRandom();
  } else {
    const input = argv._;
    makeByName(getCocktailName(input));
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
  }
}

// log('All of the args', argv);
