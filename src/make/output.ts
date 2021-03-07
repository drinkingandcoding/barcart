import { log, logTitle, logBody } from '../utils/logUtils';

export interface Result {
  name: string;
  glass: string;
  category?: string | null;
  ingredients?: (IngredientsEntity)[] | null;
  garnish?: string | null;
  preparation?: string | null;
}
export interface IngredientsEntity {
  unit?: string | null;
  amount?: number | null;
  ingredient?: string | null;
  label?: string | null;
  special?: string | null;
}

const logMakeOutput = (result: Result):(string | string[])[] => {

  const outputArray = [];
  const ingredientsArray:string[] = [];
  
  // Name
  const drinkName = `Here's how you make a ${result.name}`;
  logTitle(drinkName);
  outputArray.push(drinkName);

  // Glass
  const glassType = `Glassware: ${result.glass}`;
  log(glassType);
  outputArray.push(glassType);
  
  // List ingredients
  log('Mix together:');
  result.ingredients?.map(x => {
    if(x.unit) {
      const ingredient = `${x.amount}${x.unit} of ${x.label || x.ingredient}`;
      logBody(ingredient);
      ingredientsArray.push(ingredient);
    }
    if(x.special) {
      const special = x.special
      logBody(special);
      ingredientsArray.push(special);
    }
  });
  outputArray.push(ingredientsArray);

  // Preparation
  const prep = `${result.preparation}`;
  log(prep);
  outputArray.push(prep);

  // Garnish
  const garnish = `Garnish: ${result.garnish?.toLowerCase()}`;
  result.garnish && log(garnish);
  outputArray.push(garnish);

  // Finish
  const finish = 'Drink up 🥃';
  log(finish);
  outputArray.push(finish);

  return outputArray;
}

export default logMakeOutput;