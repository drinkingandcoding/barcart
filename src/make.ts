import { data } from './cocktails';
import output from './output';

const make = (input: string) => {

  const drink = input.toLowerCase();
  const item = data.find(x => x.name.toLowerCase() === drink);

  if(item) {
    output(item);
  } else {
    return 'Oops, something went wrong';
  }
};

export default make;
