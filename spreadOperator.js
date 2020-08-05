const first = [1, 2, 3, 4];
const second = [6, 7, 8];


/**
 * how can we concatenate two arrays????????????
 * method one: using the concate() method of an array instance
 */
// const combined = first.concat(second);
// console.log(combined);

/**
 * method two: using spread operator
 */
// const combined = [...first, ...second];
// console.log(combined);

/**
 * what is their difference
 * concat() method combine only two arrays
 * with spread operator we can combine more than two arrays but how????? go ahead to the next line
 */
const combined = [...first, 5, ...second, ...[9, 10]];
console.log(combined);

/**
 * const clone=first;
 * is same with
 * const clone= [...first];
 */
/**
 * we can use spread operator for objects as well
 */
const firstobj = {
    name: "Halefom"
};

const secondobj = {
    job: "computer programmer"
};
const person = { ...firstobj, ...secondobj, country: "Ethiopia" };
console.log(person);