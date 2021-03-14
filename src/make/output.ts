import { DrinkInterface } from '../interfaces/drinkInterface';

const logMakeOutput = (result: DrinkInterface, inputAmount:number):void => {

  const outputArray = [];
  const ingredientsArray:string[] = [];
  
  // Name
  const drinkName = `Here's how you make ${inputAmount > 1 ? `${inputAmount} ${result.name}s` : `a ${result.name}`}`;
  outputArray.push(drinkName);

  // Glass
  const glassType = `Glassware: ${result.glass}`;
  outputArray.push(glassType);
  
  // List ingredients
  result.ingredients?.map(x => {
    if(x.unit) {
      const amounts = x.amount && (x.amount * inputAmount)
      const ingredient = `${amounts}${x.unit} of ${x.label || x.ingredient}`;
      ingredientsArray.push(ingredient);
    }
    if(x.special) {
      const special = x.special
      ingredientsArray.push(special);
    }
  });
  outputArray.push(ingredientsArray);

  // Preparation
  const prep = `${result.preparation}`;
  outputArray.push(prep);

  // Garnish
  const garnish = `Garnish: ${result.garnish?.toLowerCase()}`;
  outputArray.push(garnish);

  // Finish
  const finish = 'Drink up 🥃';
  outputArray.push(finish);
}

export default logMakeOutput;