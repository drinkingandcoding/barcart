# barcart

Everything you need to make drinks from your CLI

## run locally
* `npm install`
* `npm link`
* `npm run build`
* `barcart make manhattan`

## CLI commands

### Make
* List instructions based on a drink name: `barcart make manhattan`
* List instructions based on a drink name (with amount): `barcart make manhattan -a 2` (this is two drinks)
* List instructions for random drinks: `barcart make -r`

### Find
* List drinks based on glassware: `barcart find -g martini`
* List drinks based on liquor: `barcart find -l rum`
* List drinks based on ingredients: `barcart find -i vodka orange-juice`

#### Notes:
Liquors are normalized, this means that:

* "whisky" and "whiskey" are considerd the same thing when searching
* "white rum", "black rum", etc. are considered the same thing when searching

## Usage

All functions should return an array of objects declared in [drinkInterfaces](https://github.com/drinkingandcoding/barcart/blob/main/src/interfaces/drinkInterface.ts)

### Make
```js
import { makeByName, makeByRandom } from 'barcart/lib/make';

const foo = makeByName('manhattan');
const bar = makeByRandom();
```

### Find
```js
import { findByGlass, findByLiquor, findByIngredients } from 'barcart/lib/find';

const foo = findByGlass('martini');
const bar = findByLiquor('rum');
const baz = findByIngredients(['vodka', 'orange juice']);
```