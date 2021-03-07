#!/usr/bin/env node

import { data } from '../cocktails';
import logMakeOutput from './output';
import { getRandomInt } from '../utils/utils';
import { log, logBody } from '../utils/logUtils';
import stringSimilarity from 'string-similarity';
import { DrinkInterface } from '../interfaces/drinkInterface';

export const makeByName = (input:string, amount:number):DrinkInterface[] => {

  const drinkInput = input.toLowerCase();
  const recipe = data.find(x => x.name.toLowerCase() === drinkInput);

  if(recipe) {
    logMakeOutput(recipe, amount);
    return(Array(recipe));
  } else {
    const errorString = "I don't know that one";
    const similarDrinkReceipes:DrinkInterface[] = [];
    
    // find similar strings, if above .6, log it
    data.map(x => {
      if(stringSimilarity.compareTwoStrings(x.name.toLowerCase(), drinkInput) > .6) {
        similarDrinkReceipes.push(x);
      }
    });

    // output for similar drinks
    if(similarDrinkReceipes.length) {
      log(`${errorString}, but I did find some similar drinks:`);
      similarDrinkReceipes.map(drink => logBody(drink.name))
    } else {
      log(errorString);
    }
    return(similarDrinkReceipes);
  }
};

export const makeByRandom = (amount:number):DrinkInterface[] => {
  
  const drinkInput = getRandomInt(data.length);
  const recipe = data[drinkInput];

  log('✨ Picking a random cocktail for you! ✨');
  logMakeOutput(recipe, amount);
  
  return Array(recipe);
};