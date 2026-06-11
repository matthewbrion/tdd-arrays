/**
 * @param {T[]} array - an array of elements of type T
 * @returns {T} the first element of the array
 *
 * @example
 * getFirst([1,2,3]); // 1
 * @example
 * getFirst(["a", "b", "c"]); // "a"
 * @example
 * getFirst([true,false,true]); // true
 */
export function getFirst(array) {
  // TODO
}

/**
 * @param {T[]} array - an array of elements of type T
 * @returns {T} the last element of the array
 *
 * @example
 * getLast([1,2,3]); // 3
 * @example
 * getLast(["a", "b", "c"]); // "c"
 * @example
 * getLast([true,false,true]); // true
 */
export function getLast(array) {
  // TODO
}

/**
 * @param {T[]} array - an array of elements of type T
 * @returns {T[]} an array containing the first and last elements of the given array
 * @returns {T[]} an empty array if the input is empty
 * @returns {T[]} the same array if the input only contains one element
 *
 * @example
 * getFirstLast([1,2,3]); // [1,3]
 * @example
 * getFirstLast([]); // []
 * @example
 * getFirstLast([42]); // [42]
 */
export function getFirstLast(array) {
  // TODO
}

/**
 * @param {string} str1 - the first string
 * @param {string} str2 - the second string
 * @returns {boolean} whether the first letters of both strings are the same
 * @returns {boolean} false if either string is empty
 *
 * @example
 * sharesFirstLetter("apple", "apricot"); // true
 * @example
 * sharesFirstLetter("banana", "berry"); // true
 * @example
 * sharesFirstLetter("cat", "dog"); // false
 */
export function sharesFirstLetter(str1, str2) {
  // TODO
}

/**
 * @param {number[]} numbers - an array of numbers
 * @returns {number[]} a new array with each number multiplied by 5
 *
 * @example
 * quintuple([1,2,3]); // [5,10,15]
 * @example
 * quintuple([0,4]); // [0,20]
 * @example
 * quintuple([]); // []
 */
export function quintuple(numbers) {
  // TODO
}

/**
 * There is a general rule for making nouns plural in English:
 * Add "s" to the end of the word, unless the word already ends with "s",
 * in which case add "es" instead.
 *
 * Hint: Look up `endsWith` on MDN!
 *
 * @param {string[]} - an array of singular nouns
 * @returns {string[]} an array of the plural forms of those nouns
 *
 * @example
 * pluralize(["cat", "dog"]); // ["cats", "dogs"]
 * @example
 * pluralize(["bus", "glass"]); // ["buses", "glasses"]
 * @example
 * pluralize([]); // []
 */
export function pluralize(words) {
  // TODO
}

/**
 * @param {boolean[]} attendance - an array representing student attendance
 * - true = student is present
 * - false = student is absent
 * @returns {number} the number of students present
 *
 * @example
 * countAttendance([true, false, true]); // 2
 * @example
 * countAttendance([false, false]); // 0
 * @example
 * countAttendance([]); // 0
 */
export function countAttendance(attendance) {
  // TODO
}

/**
 * @param {string[]} sentence - an array of words
 * @returns {string} the first longest word in the sentence
 * @returns {null} null if the sentence is empty
 *
 * @example
 * getLongestWord(["sphinx", "of", "black", "quartz"]); // "sphinx"
 * @example
 * getLongestWord([]); // null
 * @example
 * getLongestWord(["a", "ab", "abc"]); // "abc"
 */
export function getLongestWord(sentence) {
  // TODO
}

/**
 * @param {string[]} playlist - an array of song titles
 * @param {string} song - the name of a song to find
 * @returns {number} the index of the song in the playlist
 * @returns {number} -1 if the song is not found
 *
 * @example
 * findSong(["Midnight Drive", "Golden Skies", "Neon Dreams"], "Golden Skies"); // 1
 * @example
 * findSong(["Midnight Drive", "Golden Skies", "Neon Dreams"], "Afternoon Drink"); // -1
 * @example
 * findSong([], "Midnight Drive"); // -1
 */
export function findSong(playlist, song) {
  // TODO
}

/**
 * @param {string[][]} map - a 2D array in which each element is a string that
 *  represents something in the area, such as "tree", "pigeon", "lamp", or "guard"
 * @returns {number[]} the [x,y] coordinates of the "spy"
 * @returns {null} null if the spy is not found
 *
 * @example
 * findSpy([["tree","spy"],["lamp","guard"]]); // [0,1]
 * @example
 * findSpy([["tree","lamp"],["spy","guard"]]); // [1,0]
 * @example
 * findSpy([["tree","lamp"],["pigeon","guard"]]); // null
 */
export function findSpy(map) {
  // TODO
}
