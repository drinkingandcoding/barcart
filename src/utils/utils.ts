export const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * Math.floor(max));
}

export const spacer = '   - ';

export const getCocktailName = (input: any) => {
  let drinkInput = `${input[1]}`;
  //check if two word cocktail
  if(input[2]) {
    drinkInput = `${drinkInput} ${input[2]}`;
  }

  return drinkInput;
}