#!/usr/bin/env node

import { data } from '../cocktails';
import logMakeOutput from './output';
import { getRandomInt } from '../utils/utils';
import { log } from '../utils/logUtils';

// todo fix any
export const makeByName = (input:string, amount:number):any => {

  const drinkInput = input.toLowerCase();
  const recipe = data.find(x => x.name.toLowerCase() === drinkInput);

  if(recipe) {
    logMakeOutput(recipe, amount);
    return(recipe);
  } else {
    const errorString = "I don't know that one 😭";
    log(errorString);
    return(errorString);
  }
};

// todo fix any
export const makeByRandom = (amount:number):any => {
  
  const drinkInput = getRandomInt(data.length);
  const recipe = data[drinkInput];

  log('✨ Picking a random cocktail for you! ✨');
  logMakeOutput(recipe, amount);
  
  return recipe;
};