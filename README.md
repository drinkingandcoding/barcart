# barcart

Everything you need to make drinks from your CLI

## run locally
* `yarn install`
* `yarn build`

## Usage

### Make

* Should return an array of objects declared in [drinkInterfaces](https://github.com/drinkingandcoding/barcart/blob/main/src/interfaces/drinkInterface.ts)

```js
import { makeByName, makeByRandom } from 'barcart/dist';

const foo = makeByName('manhattan');
const bar = makeByRandom();
```

### Find

* Should return an array of objects declared in [drinkInterfaces](https://github.com/drinkingandcoding/barcart/blob/main/src/interfaces/drinkInterface.ts)

```js
import { findByGlass, findByLiquor, findByIngredients } from 'barcart/dist';

const foo = findByGlass('martini');
const bar = findByLiquor('rum');
const baz = findByIngredients(['vodka', 'orange juice']);
```

### Other Utils
```js
import { getRandomInt, normalizeLiquor, findByIngredients } from 'barcart/dist';

const foo = getRandomInt(10); // num 0-10
const bar = normalizeLiquor('whisky'); // whisky
const baz = capitalizeFirstLetter('foo bar'); // Foo bar
const drink = findSimilarDrink('Vesperr') // Should return an array of objects declared in drinkInterfaces
```