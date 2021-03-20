import { data } from '../cocktails';
import stringSimilarity from 'string-similarity';
import { DrinkInterface } from '../interfaces/drinkInterface';

export const getRandomInt = (max: number):number => {
  return Math.floor(Math.random() * Math.floor(max));
}

export const getCocktailName = (input:(string | number)[]):string => {
  let drinkInput = `${input[1]}`;
  //check if two word cocktail
  if(input[2]) {
    drinkInput = `${drinkInput} ${input[2]}`;
  }

  return drinkInput;
}

export const normalizeLiquor = (input: string):string => {
  
  const drinkInput = input.toLowerCase();
  let normalized: string;

  if(drinkInput === 'whisky' || drinkInput === 'whiskey') {
    normalized = 'whiskey';
  } else if(drinkInput.includes('rum')) {
    normalized = 'rum';
  } else {
    normalized = input.toLowerCase();
  }
  return normalized;
}

export const capitalizeFirstLetter = (string:string):string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const findSimilarDrinks = (input: string):DrinkInterface[] => {

  const drinkInput = input.toLowerCase();
  const similarDrinkReceipes:DrinkInterface[] = [];
    
  // find similar strings, if above .6, log it
  data.map(x => {
    if(stringSimilarity.compareTwoStrings(x.name.toLowerCase(), drinkInput) > .6) {
      similarDrinkReceipes.push(x);
    }
  });

  if(similarDrinkReceipes.length) {
    return(similarDrinkReceipes);
  } else {
    return [];
  }
}