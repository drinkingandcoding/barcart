export const getRandomInt = (max: number):number => {
  return Math.floor(Math.random() * Math.floor(max));
}

export const spacer = '   - ';

// todo fix any
export const getCocktailName = (input: any):string => {
  let drinkInput = `${input[1]}`;
  //check if two word cocktail
  if(input[2]) {
    drinkInput = `${drinkInput} ${input[2]}`;
  }

  return drinkInput;
}

// TODO:
// all rums return rum
// whiskey || whiskey returns whiskey
export const normalizeLiquor = (input: string):string => {
  
  let drinkInput = input.toLowerCase();
  let normalized: string;

  if(drinkInput === 'whisky' || drinkInput === 'whiskey') {
    normalized = 'whiskey';
  } else if(drinkInput.includes('rum')) {
    normalized = 'rum';
  } else {
    normalized = input;
  }
  return normalized;
}