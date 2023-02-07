// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let string1 = ''
  let string2 = ''
  array1.forEach(numero => string1 += numero.toString() );
  array2.forEach(numero => string2 += numero.toString() );
  return Number(string1) + Number(string2)
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
const  string =  value.toString();
const arr = string.split('');
return String(string.split('')) === String(arr.reverse())
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
   if (input == undefined || input == null || input.trim().length === 0) {
     return 'Required field'
   }
   else if ( Number.isNaN(Number(input)) || input === '0' ){
    return 'Must be a number besides 0'
   }
   else return ''
}
