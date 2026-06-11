import { describe, it, expect } from "vitest";

import {
  getFirst,
  getLast,
  getFirstLast,
  sharesFirstLetter,
  quintuple,
  pluralize,
  countAttendance,
  getLongestWord,
  findSong,
  findSpy,
} from "./index.js";

describe("getFirst", function () {
  it("returns the first element of a number array", function () {
    expect(getFirst([1, 2, 3])).toBe(1);
  });
  it("returns the first element of a string array", function () {
    expect(getFirst(["a", "b", "c"])).toBe("a");
  });
  it("returns the first element of a boolean array", function () {
    expect(getFirst([true, false, true])).toBe(true);
  });
  it("returns undefined for an empty array", function () {
    expect(getFirst([])).toBeUndefined();
  });
  it("returns the only element for a single-element array", function () {
    expect(getFirst([42])).toBe(42);
  });
});

describe("getLast", function () {
  it("returns the last element of a number array", function () {
    expect(getLast([1, 2, 3])).toBe(3);
  });
  it("returns the last element of a string array", function () {
    expect(getLast(["a", "b", "c"])).toBe("c");
  });
  it("returns the last element of a boolean array", function () {
    expect(getLast([true, false, true])).toBe(true);
  });
  it("returns undefined for an empty array", function () {
    expect(getLast([])).toBeUndefined();
  });
  it("returns the only element for a single-element array", function () {
    expect(getLast([42])).toBe(42);
  });
});

describe("getFirstLast", function () {
  it("returns [first, last] for a multi-element array", function () {
    expect(getFirstLast([1, 2, 3])).toEqual([1, 3]);
  });
  it("returns [] for an empty array", function () {
    expect(getFirstLast([])).toEqual([]);
  });
  it("returns the same array for a single-element array", function () {
    expect(getFirstLast([-5])).toEqual([-5]);
  });
  it("returns [first, last] for a string array", function () {
    expect(getFirstLast(["a", "b", "c"])).toEqual(["a", "c"]);
  });
  it("returns [first, last] for a boolean array", function () {
    expect(getFirstLast([true, false, true])).toEqual([true, true]);
  });
});

describe("sharesFirstLetter", function () {
  it("returns true if first letters match", function () {
    expect(sharesFirstLetter("apple", "apricot")).toBe(true);
  });
  it("returns true if first letters match (different words)", function () {
    expect(sharesFirstLetter("banana", "berry")).toBe(true);
  });
  it("returns false if first letters do not match", function () {
    expect(sharesFirstLetter("cat", "dog")).toBe(false);
  });
  it("returns false if first string is empty", function () {
    expect(sharesFirstLetter("", "dog")).toBe(false);
  });
  it("returns false if second string is empty", function () {
    expect(sharesFirstLetter("cat", "")).toBe(false);
  });
  it("returns false if both strings are empty", function () {
    expect(sharesFirstLetter("", "")).toBe(false);
  });
  it("returns true for single-character matching strings", function () {
    expect(sharesFirstLetter("a", "a")).toBe(true);
  });
  it("returns false for single-character non-matching strings", function () {
    expect(sharesFirstLetter("a", "b")).toBe(false);
  });
});

describe("quintuple", function () {
  it("returns a new array with each number multiplied by 5", function () {
    expect(quintuple([1, 2, 3])).toEqual([5, 10, 15]);
  });
  it("returns an empty array for empty input", function () {
    expect(quintuple([])).toEqual([]);
  });
  it("handles zero correctly", function () {
    expect(quintuple([0, 4])).toEqual([0, 20]);
  });
  it("handles negative numbers", function () {
    expect(quintuple([-2, -1])).toEqual([-10, -5]);
  });
  it("handles single-element array", function () {
    expect(quintuple([7])).toEqual([35]);
  });
});

describe("pluralize", function () {
  it("adds 's' to words not ending with 's'", function () {
    expect(pluralize(["cat", "dog"])).toEqual(["cats", "dogs"]);
  });
  it("adds 'es' to words ending with 's'", function () {
    expect(pluralize(["bus", "glass"])).toEqual(["buses", "glasses"]);
  });
  it("returns an empty array for empty input", function () {
    expect(pluralize([])).toEqual([]);
  });
  it("handles single word not ending with 's'", function () {
    expect(pluralize(["car"])).toEqual(["cars"]);
  });
  it("handles single word ending with 's'", function () {
    expect(pluralize(["class"])).toEqual(["classes"]);
  });
  it("handles mixed endings", function () {
    expect(pluralize(["bus", "cat"])).toEqual(["buses", "cats"]);
  });
});

describe("countAttendance", function () {
  it("counts the number of true values", function () {
    expect(countAttendance([true, false, true])).toBe(2);
  });
  it("returns 0 for all false", function () {
    expect(countAttendance([false, false])).toBe(0);
  });
  it("returns 0 for empty array", function () {
    expect(countAttendance([])).toBe(0);
  });
  it("returns 1 for single true", function () {
    expect(countAttendance([true])).toBe(1);
  });
  it("returns 0 for single false", function () {
    expect(countAttendance([false])).toBe(0);
  });
  it("counts all true", function () {
    expect(countAttendance([true, true, true])).toBe(3);
  });
});

describe("getLongestWord", function () {
  it("returns the first longest word", function () {
    expect(getLongestWord(["sphinx", "of", "black", "quartz"])).toBe("sphinx");
  });
  it("returns null for empty array", function () {
    expect(getLongestWord([])).toBeNull();
  });
  it("returns the only word for single-element array", function () {
    expect(getLongestWord(["hello"])).toBe("hello");
  });
  it("returns the first word if multiple have same max length", function () {
    expect(getLongestWord(["cat", "dog", "bat"])).toBe("cat");
  });
  it("returns the longest word in a mixed length array", function () {
    expect(getLongestWord(["a", "ab", "abc"])).toBe("abc");
  });
  it("returns empty string for array of empty strings", function () {
    expect(getLongestWord(["", "", ""])).toBe("");
  });
});

// findSong
describe("findSong", function () {
  it("returns the index of the song if found", function () {
    expect(findSong(["A", "B", "C"], "B")).toBe(1);
  });
  it("returns -1 if the song is not found", function () {
    expect(findSong(["A", "B", "C"], "D")).toBe(-1);
  });
  it("returns -1 for empty playlist", function () {
    expect(findSong([], "A")).toBe(-1);
  });
  it("returns 0 if the song is the first in the playlist", function () {
    expect(findSong(["A", "B"], "A")).toBe(0);
  });
  it("returns the last index if the song is last", function () {
    expect(findSong(["A", "B", "C", "D"], "D")).toBe(3);
  });
  it("is case sensitive", function () {
    expect(findSong(["ABC"], "abc")).toBe(-1);
  });
});

// findSpy
describe("findSpy", function () {
  it("returns [0,1] for [[X,spy], [X,X]]", function () {
    expect(
      findSpy([
        ["tree", "spy"],
        ["lamp", "guard"],
      ]),
    ).toEqual([0, 1]);
  });
  it("returns [1,0] for [[X,X], [spy, X]]", function () {
    expect(
      findSpy([
        ["tree", "lamp"],
        ["spy", "guard"],
      ]),
    ).toEqual([1, 0]);
  });
  it("returns null if spy is not in map", function () {
    expect(
      findSpy([
        ["tree", "lamp"],
        ["pigeon", "guard"],
      ]),
    ).toBeNull();
  });
  it("returns null for empty map", function () {
    expect(findSpy([])).toBeNull();
  });
  it("returns [0,0] if spy is only element", function () {
    expect(findSpy([["spy"]])).toEqual([0, 0]);
  });
  it("returns correct coordinates in larger map", function () {
    expect(
      findSpy([
        ["tree", "lamp", "car", "bench"],
        ["pigeon", "guard", "lamp", "tree"],
        ["house", "spy", "tent", "bush"],
      ]),
    ).toEqual([2, 1]);
  });
  it("returns null if map contains empty arrays", function () {
    expect(findSpy([[], []])).toBeNull();
  });
});
