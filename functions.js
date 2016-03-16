
function combineWords(word1, word2) {
    console.log("dog" + "house")
}
combineWords('dog', 'house');




////////////////////////////////////////




function repeatPhrase(phrase, n) {
   for (var n= 0; n < 5; n++)
    console.log("Hello")
}
repeatPhrase("Hello", 5);
// displays
// Hello
// Hello
// Hello
// Hello
// Hello




////////////////////////////////////////



function toTheNthPower(number, power) {
var x = 1;
for (var i = 0; i < power; i++) {
        x *= number;
      }
      return x;
}

toTheNthPower(4, 5);
// displays 1024








////////////////////////////////////////





function areaOfACircle(radius) {

    return Math.PI * radius * radius;
};

areaOfACircle(2);
// displays approximately 12.57





/////////////////////////////////////////





function pythagoreanTheorem(a, b) {

    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

pythagoreanTheorem(3, 4);
// should display 5;





////////////////////////////////////////




function isXEvenlyDivisibleByY(x, y) {
    if(x % y === 0);
    return true;
}

isXEvenlyDivisibleByY(99, 3);
// displays true



////////////////////////////////////////




function countVowels(word) {
    var count = 0;
    for(var i = 0; i < word.length; i++) {
        if( word[i]=== 'a' || word[i]=== 'e' || word[i]=== 'i' || word[i]=== 'o' || word[i]=== 'u' || word[i]=== 'y' ){
        count++;

    }
}
console.log(count);
}
countVowels("stealing");
// displays 3




///////////////////////////////////////





*
**
***
****
*****

function printTriangle(length) {
         for( i = 0; i <= length; i++) {
         console.log('*');
    }
}

printTriangle(3);
// displays
// *
// **
// ***

//I can't get my asterisks to be recognized, keeps returning 'Uncaught SyntaxError: Unexpected token *'
