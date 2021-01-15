/* Example of a while loop
let bottles = 10;
while (bottles > 0){
    console.log(`There were ${bottles} green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${bottles-1} green bottles hanging on the wall`);
    bottles--;
}
*/

// Example of a do while loop
let bottles = 10;
do {
    console.log(`There were ${bottles} green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${bottles-1} green bottles hanging on the wall`);
    bottles--;
} while (bottles > 0)

// FizzBuzz activity from eloqentjavascript
// This is my solution to the activity 
for(i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
	}else if(i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}