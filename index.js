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
  return array[0]
}
console.log(getFirst(["cheese", "wine", "chocolate"]))

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
  return array[array.length-1]
}
console.log(getLast(["cloud", "tifa", "REDXIII"]))


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
  if (array.length == 0) {
    return []
  } else if (array.length == 1) {
    return array
  } else {
    return [array[0], array[array.length-1]]
  }
}
console.log(getFirstLast([42]))

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
  if (str1.length == 0 || str2.length == 0) {
    return false
  } else {
    return (str1[0] == str2[0])
  }
}
console.log(sharesFirstLetter("", ""))

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
  let newArray = []
  for (let i = 0; i < numbers.length; i++) {
    newArray.push(numbers[i]*5)
  }
  return newArray
}
console.log(quintuple([3,6,2,7,1]))

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
  let newArray = []
  for (let i = 0; i < words.length; i++) {
    if (words[i].endsWith("s")) {
      newArray.push(words[i]+"es")
    } else {
      newArray.push(words[i]+"s")
    }
  }
  return newArray
}
console.log(pluralize(["summon", "chocobo", "weapon", "grass"]))

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
  let sumPresent = 0
  for (let i = 0; i < attendance.length; i++) {
    if (attendance[i] == true) {
      sumPresent = sumPresent + 1
    }
  } 
  return sumPresent
}
console.log(countAttendance([true, false, true, true, false, true]))

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
  if (sentence.length === 0) {
    return null
  } 
  let longestWord = null
  let longestLength = 0
  for (let i = 0; i < sentence.length; i++)
    if (sentence[i].length > longestLength) {
      longestLength = sentence[i].length
      longestWord = sentence[i]
    }
  return longestWord
}
console.log(getLongestWord(["bell", "blueberries", "grandpa", "braggadocious"]))

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
  for (let i = 0; i < playlist.length; i++) {
    if (song === playlist[i]) {
      return i
    } 
  } 
  return -1
}
console.log(findSong(["Aerith's Theme", "Balamb Garden", "One Winged Angel", "Find Your Way", "Eyes on Me"], "Cosmo Canyon"))

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
  
}
