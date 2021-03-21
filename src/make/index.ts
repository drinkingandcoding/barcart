import { data } from '../cocktails';
import { getRandomInt } from '../utils';
import { DrinkInterface } from '../interfaces/drinkInterface';

export const makeByName = (input: string):DrinkInterface[] => {

  const drinkInput = input.toLowerCase();
  const recipe = data.find(x => x.name.toLowerCase() === drinkInput);

  if(recipe) {
    return(Array(recipe));
  } else {
    return [];
  }
};

export const makeByRandom = ():DrinkInterface[] => {
  const drinkInput = getRandomInt(data.length);
  const recipe = data[drinkInput];  
  return Array(recipe);
};
