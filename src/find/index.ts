import { data } from '../cocktails';
import { log, logBody, logTitle } from '../utils/logUtils';
import { capitalizeFirstLetter, normalizeLiquor } from '../utils/utils';
import { DrinkInterface } from '../interfaces/drinkInterface';
const prefix = 'You need to supply a type of';

export const findByGlass = (input: string):DrinkInterface[] => {
  if(input) {
    const drinks = data.filter(x => x.glass === input);
    if(drinks.length) {
      logTitle(`Here are all the drinks you can make with a ${input} glass`);
      drinks.map(x => logBody(x.name));
    } else {
      logTitle(`No drinks found using a ${input} glass`);
    }
    return drinks;
  } else {
    const errorString = `${prefix} glass!`;
    log(errorString);
    return [];
  }
}

export const findByLiquor = (input: string):string[] => {
  if(input) {
    const drinkArray:string[] = [];

    // Check the entire list of ingredients (normalized) and push to new array if found
    data.map(drink => drink.ingredients?.map(ingredientList => ingredientList.ingredient && (normalizeLiquor(ingredientList.ingredient) === normalizeLiquor(input)) && drinkArray.push(drink.name)));

    // The array of found pushes every time it is found, so dedupe list before logging
    const dedeupeDrinkArray = [ ...new Set(drinkArray) ];
    if(drinkArray.length) {
      dedeupeDrinkArray.map(drink => log(drink));
    } else {
      log('No drinks found');
    }
    return dedeupeDrinkArray;
  } else {
    const errorString = `${prefix} liquor!`;
    log(errorString);
    return [];
  }
};

export const findByIngredients = (input: string[]):string[] => {
  const inputArrayWithoutHyphens:string[] = [];
  const outputArray:string[] = [];

  input.map(ingredient => {
    const ref = ingredient.replace("-", " ");
    inputArrayWithoutHyphens.push(ref);
  });

  data.map(drink => {
    const ingredientArray:string[] = [];
    drink.ingredients?.map(ingredientList => {
      if (ingredientList.ingredient){
        ingredientArray.push(normalizeLiquor(ingredientList.ingredient));
      }
    })
    ingredientArray.every(i => inputArrayWithoutHyphens.includes(i)) && outputArray.push(drink.name);
  });

  logTitle(`Using these ingredients:`);
  inputArrayWithoutHyphens.map(d => logBody(capitalizeFirstLetter(d)));
  logTitle(`\n You can make:`);
  outputArray.map(d => logBody(d));
  return outputArray;
}