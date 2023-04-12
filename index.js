//1. check number is possitive or negative
let a
if (a<0) {
    console.log("the number is negative")
    
}
 else if (a>0) {
    console.log("the number is positive")
    
}
else{
   console.log("invailid") 
}


//2. sum of all numbers 
var fnum=prompt("enter the limit number")
let k=0;
let sum;
while (k<fnum) {

   sum=sum+k 
}
k++
    console.log('the sum of all number is'+sum )

//promp that tells the user password is invalid until it became collect
var pass="munyeshuri@1"
var pa=prompt("enter password");
var v=1;
do {
    if (pa===pass) {
        console.log("your password is correct")
        
    }
    else{
        console.log("password is invalid")
    }
} while (v<4);
v++




//prints all even numbers from 1 to 20 using a loop.

let even;
for(even=0;even<20;even++){
    if (even%2===0) {
        console.log("the even is " +even)
        
    }
    else{
        console("invalid")
    }

}

//checks if a given year is a leap year or not using an if condition.

let year;

if (year%4==0) {
    console.log("the year is leap year")
    
}
else if (year%4==1) {
    console.log("the year is not leap year")
    
}
else{
  console.log("invailid")  
}

// //factoriol of a given number 

let fact;
let x;
let n;
for (x=0;x<n;x++) {
    fact=fact*x;
}
console.log("factorio is" +fact)


// //a number and prints the multiplication table of that number using a while loop.

let mult;
let m;
m=1
while (m<12) {
    mult=mult*m;
    console.log(mult)
    
}
m++


// //to guess a number and sow that is higher or lower

var guessn=66;
 var number=prompt("guess the number you wish")
if(number===guessn){
    console.log("you have successful your  answer")
}
else if(number<guessn){
    console.log("the number is lower")
}
else if(number>guessn){
    console.log("the number is higher")
}
else{
    console.log("invalid")
}


// checks if a given string is a palindrome (reads the same forwards and backward) using an if condition.

var string=prompt("enter the string")
    let len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            console.log('It is not a palindrome');
        }
         else if (string[i] == string[len - 1 - i]) {
            console.log('It is a palindrome');
        }
        else{
            console.log("invalid")
        }
    }
    
// // Fibonacci sequence up to a given number using for a loop.

let e=0;
let j;
let f=1;
let g=25
let fibo;
for (j=0;j<g;j++) {

    fibo=e+f;
    e=f;
    e=fibo;
    console.log("fib is"+fibo)

}
