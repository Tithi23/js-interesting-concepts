// local scope
/* function add(first, second) {
    const result = first + second;
    console.log(result);
    return result;
}
const sum = add(3, 8); */

// global scope
/* const favNum = 27;

function add(first, second) {
    const result = first + second;
    console.log(result);
    return result;
}
const sum = add(3, 8);
console.log(favNum) */


//block scope
const favNum = 27;

function add(first, second) {
    // console.log(mood); // hoisting
    const result = first + second;

    if (result > 9) {
        let mood = 'happy';
        mood = 'cranky';
    }
    // console.log(mood);
    return result;
}
const sum = add(11, 35);
// console.log(mood);

for (let i = 0; i < 10; i++) {

}
// console.log(i);


