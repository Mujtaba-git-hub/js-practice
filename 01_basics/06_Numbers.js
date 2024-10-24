const score = 40;
console.log(score) //40

const balance = new Number(100);
console.log(balance); //[Number: 100]

console.log(balance.toString(), typeof(balance))
console.log(balance.toFixed(2))

const otherNum= 12.8978
const num= 123.89

console.log(otherNum.toFixed(2)) //100.00
console.log(otherNum.toPrecision(3)) // 12.9
console.log(num.toPrecision(3)) // 124 means count 3 digit other orund off

const num1= 100000
console.log(num1.toLocaleString()) //100,000 add commas acc US standard

const num2= 1000000
console.log(num2.toLocaleString('en-In')) // 10,00,000indian standard

//************MATH******************* */

// console.log(Math); //onject [math] []
// console.log(Math.abs(-4))//4)
// console.log(Math.round(4.6)) //5
// console.log(Math.ceil(4.2)) //5
// console.log(Math.floor(4.2)) //4
// console.log(Math.min(2,3,2,1))


console.log(Math.random());// always btweem 0-1

console.log(Math.random()*10);// always btweem 0*10-1*10

console.log((Math.random()*10) + 1);// always btweem 1*-1*10

console.log(Math.floor((Math.random()*10) + 1));//floor for one digit round off 

min=5
max=10
// for seed value max and min
console.log(Math.floor(Math.random() * (max-min +1) + min))

