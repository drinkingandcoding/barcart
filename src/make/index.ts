import { data } from '../cocktails';
import { getRandomInt } from '../utils';
import stringSimilarity from 'string-similarity';
import { DrinkInterface } from '../interfaces/drinkInterface';

export const makeByName = (input: string):DrinkInterface[] => {

  const drinkInput = input.toLowerCase();
  const recipe = data.find(x => x.name.toLowerCase() === drinkInput);

  if(recipe) {
    return(Array(recipe));
  } else {
    const similarDrinkReceipes:DrinkInterface[] = [];
    
    // find similar strings, if above .6, log it
    data.map(x => {
      if(stringSimilarity.compareTwoStrings(x.name.toLowerCase(), drinkInput) > .6) {
        similarDrinkReceipes.push(x);
      }
    });
    return(similarDrinkReceipes);
  }
};

export const makeByRandom = ():DrinkInterface[] => {
  const drinkInput = getRandomInt(data.length);
  const recipe = data[drinkInput];  
  return Array(recipe);
};