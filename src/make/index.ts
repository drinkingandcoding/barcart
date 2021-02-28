#!/usr/bin/env node

import { data } from '../cocktails';
import logOutput from './output';
import { getRandomInt } from '../utils/utils';

const log = console.log;

// todo fix any
export const makeByName = (input: string):any => {

  const drinkInput = input.toLowerCase();
  const recipe = data.find(x => x.name.toLowerCase() === drinkInput);

  if(recipe) {
    logOutput(recipe);
    return(recipe);
  } else {
    const errorString = "I don't know that one 😭";
    log(errorString);
    return(errorString);
  }
};

// todo fix any
export const makeRandom = ():any => {
  
  const drinkInput = getRandomInt(data.length);
  const recipe = data[drinkInput];

  log('Picking a random cocktail for you!');
  logOutput(recipe);
  
  return recipe;
};