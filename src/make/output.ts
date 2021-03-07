import { log, logTitle, logBody } from '../utils/logUtils';
import { DrinkInterface } from '../interfaces/drinkInterface';

const logMakeOutput = (result: DrinkInterface, inputAmount:number):(string | string[])[] => {

  const outputArray = [];
  const ingredientsArray:string[] = [];
  
  // Name
  const drinkName = `Here's how you make ${inputAmount > 1 ? `${inputAmount} ${result.name}s` : `a ${result.name}`}`;

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
      const amounts = x.amount && (x.amount * inputAmount)
      const ingredient = `${amounts}${x.unit} of ${x.label || x.ingredient}`;
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