#!/usr/bin/env node

import { data } from '../cocktails';
import logMakeOutput from './output';
import { getRandomInt } from '../utils/utils';
import { log, logBody } from '../utils/logUtils';
import stringSimilarity from 'string-similarity';
import { DrinkInterface } from '../interfaces/drinkInterface';

export const makeByName = (input:string, amount:number):DrinkInterface|DrinkInterface[] => {

  const drinkInput = input.toLowerCase();
  const recipe = data.find(x => x.name.toLowerCase() === drinkInput);

  if(recipe) {
    logMakeOutput(recipe, amount);
    return(recipe);
  } else {
    const errorString = "I don't know that one";
    const similarDrinks:DrinkInterface[] = [];
    
    // find similar strings, if above .6, log it
    data.map(x => {
      if(stringSimilarity.compareTwoStrings(x.name.toLowerCase(), drinkInput) > .6) {
        similarDrinks.push(x);
      }
    });

    // output for similar drinks
    if(similarDrinks.length) {
      log(`${errorString}, but I did find some similar drinks:`);
      similarDrinks.map(x => logBody(x.name))
    } else {
      log(errorString);
    }
    return(similarDrinks);
  }
};

export const makeByRandom = (amount:number):DrinkInterface => {
  
  const drinkInput = getRandomInt(data.length);
  const recipe = data[drinkInput];

  log('✨ Picking a random cocktail for you! ✨');
  logMakeOutput(recipe, amount);
  
  return recipe;
};