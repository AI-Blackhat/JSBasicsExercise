// 1
console.log(26
    );

// 2
// Primitives
/* Strings
Numbers
booleans
undefined
null
*/

//3
// Addition is +
// Subtraction is -
// Multiplication is *
// Division is /
// Modulus is %
// Exponentiation is **

//4
console.log(5 % 4); // 1
console.log(5 % 2); // 1
// console.log(1 % 5);

//5
console.log('I\'M MARY POPPINS, Y\'ALL!');

//6
console.log("Hawk" + "eye");

//7
console.log("Todd".length + "Mau".length); // 7

// 8
console.log("Avengers: Endgame"[16]);

//Breakdown
// console.log("Avengers: Endgame".length);
// console.log("Avengers: Endgame" [16]);
// 16 because you start at 0

// Bonus
// 1
console.log("\\");
// The first backslash allows the special character, another backslash \

// 2
console.log((5 ** 4)-9); // 616
// or
// console.log(5 ** 4 - 9); // 616

// 3
console.log("I".length + "Am".length % "Iron".length - "Man".length);

console.log(("I".length + "Am".length + "Iron".length + "Man".length) % 10);

console.log(("I".length - "Am".length) + ("Iron".length % "Man".length));

// 4
// AVENGERS VERTICALLY
console.log("CAP"[1]); // 0,1 = A
console.log("VISION"[0]); // 0 = V
console.log("OYOYE"[4]); // 0,1,2,3,4 = E
console.log("NICK FURY"[0]); // 0 = N
console.log("GROOT"[0]); // 0 = G
console.log("DOCTOR STRANGE"[13]); // Starting at 0, 13 place = E
console.log("THOR"[3]); // 0,1,2,3 = R
console.log("STAR-LORD"[0]); // 0 = S

// AVENGERS HORIZONTALLY
console.log("CAP"[1] + "VISION"[0] + "OKOYE"[4] + "NICK FURY"[0] + "GROOT"[0] + "DOCTOR STRANGE"[13] + "THOR"[3] + "STAR-LORD"[0]);
//OR
lArray = ["CAP", "VISION", "OKOYE", "NICK FURY", "GROOT", "DOCTOR STRANGE", "THOR", "STAR-LORD"];
//OR
console.log(lArray[0][1] + lArray[1][0] + lArray[2][4] + lArray [3][0] + lArray [4][0] + lArray[5][13] + lArray[6][3] + lArray[7][0]);

// 5
// m=25
// c=4

let m = 25;
let c = 4;
let u = m + c;
console.log(u);