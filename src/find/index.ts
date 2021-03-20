import { data } from '../cocktails';
import { normalizeLiquor } from '../utils';
import { DrinkInterface } from '../interfaces/drinkInterface';

export const findByGlass = (input: string):DrinkInterface[] => {
  if(input) {
    const drinks = data.filter(x => x.glass.toLowerCase() === input.toLowerCase());
    return drinks;
  } else {
    return [];
  }
}

export const findByLiquor = (input: string):DrinkInterface[] => {
  if(input) {
    const drinkArray:DrinkInterface[] = [];
    // Check the entire list of ingredients (normalized) and push to new array if found
    data.map(drink => drink.ingredients?.map(ingredientList => ingredientList.ingredient && (normalizeLiquor(ingredientList.ingredient) === normalizeLiquor(input)) && drinkArray.push(drink)));

    // The array of found pushes every time it is found, so dedupe list before logging
    const dedeupeDrinkArray = [ ...new Set(drinkArray) ];
    return dedeupeDrinkArray;
  } else {
    return [];
  }
};

export const findByIngredients = (input: string[]):DrinkInterface[] => {
  const inputArrayWithoutHyphens:string[] = [];
  const outputArray:DrinkInterface[] = [];

  input.map(ingredient => {
    const ref = ingredient.replace("-", " ");
    inputArrayWithoutHyphens.push(ref.toLowerCase());
  });

  data.map(drink => {
    const ingredientArray:string[] = [];
    drink.ingredients?.map(ingredientList => {
      ingredientList.ingredient && ingredientArray.push(normalizeLiquor(ingredientList.ingredient));
    })
    ingredientArray.every(i => inputArrayWithoutHyphens.includes(i)) && outputArray.push(drink);
  });
  return outputArray;
}