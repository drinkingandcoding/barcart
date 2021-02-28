import { data } from '../cocktails';
import output from './output';
import { getRandomInt } from '../utils/utils';

const random = () => {
  console.log('Picking a random cocktail for you!');
  output(data[getRandomInt(data.length)]);
};

export default random;