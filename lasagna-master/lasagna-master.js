/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus( time ) {
    if ( time === undefined ) return  'You forgot to set the timer.'
    else if ( time === 0 ) return  'Lasagna is done.'
    else return 'Not done, please wait.'
}

/**
 * @param {string | any[]} arr
 * @param {number} promedio
 */
export function preparationTime( arr, promedio ){
    if ( typeof(promedio) !== 'number') return arr.length * 2  
    else return arr.length * promedio  
}

// @param {Array} arr
export function quantities( arr ){
    let retorno = { noodles: 0, sauce: 0 }
    arr.forEach(element => {
        if ( element === 'sauce') retorno.sauce = retorno.sauce + 0.2
        if ( element === 'noodles') retorno.noodles = retorno.noodles + 50
    });
    return retorno
}

/**
 * @param {any[]} friendsList
 * @param {any[]} myList
 */
export function addSecretIngredient(friendsList, myList){
    myList.push(friendsList[ friendsList.length-1])
}


export function scaleRecipe( recipe, number_portions) {
    let recipeScale = { ...recipe }
    for (let ingredient in recipeScale) {
      recipeScale[ingredient] = recipeScale[ingredient]/2 * number_portions
    }
  
  return recipeScale
}


