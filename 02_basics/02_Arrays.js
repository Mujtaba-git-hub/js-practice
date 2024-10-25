 // concat vs push

 const arr1= ["AAA",111,"BBB",222,"CCC",333]
 const arry2=["DDD",444,"EEE",555]
/*
  arr1.push(arry2) //it will push whole array as a 1 element  
 console.log(arr1) //=>[ 'AAA', 111, 'BBB', 222, 'CCC', 333, [ 'DDD', 444, 'EEE', 555 ] ]

  for acces on 6th elemnt it is 2d Array

  console.log(arr1[6][2]) //for acces "EEE"

  // but if you want to 
*/

//  ------------- concat --------------------
/*
//   But safe way to use concat ,return new array

newArr= arr1.concat(arry2)
console.log(newArr)
 
 [
  'AAA', 111,   'BBB',
  222,   'CCC', 333,
  'DDD', 444,   'EEE',
  555
]
   */

//--------------------spread Element--------------------
/*
// Another way to concatinate is spread element that return new arr

const arr3= [...arr1, ...arry2] //here we add so many arrays
console.log(arr3)

/*
[
  'AAA', 111,   'BBB',
  222,   'CCC', 333,
  'DDD', 444,   'EEE',
  555
]
  */

const arr4= [1,2,3,['a','b','c',[4,5,6]],[7]]
//console.log(arr4) 
 
//but you want to flat it use flat

// arr5= arr4.flat(how_much_dept)

// arr5= arr4.flat(1)
// console.log(arr5) //=>[ 1, 2, 3, 'a', 'b', 'c', [ 4, 5, 6 ], 7 ]

arr5= arr4.flat(Infinity) // for all dept
console.log(arr5)
 /**
  * [
  1,   2, 3, 'a', 'b',
  'c', 4, 5, 6,   7
]
  */

// ASK IS Arry or not

console.log(Array.isArray("Muj")) //false
console.log(Array.isArray([1,2,3])) //true

// for converting in array
console.log(Array.from("Muj")) 

// use of in variable 
const score1 =100;
const score2 =200;
const score3 =300;
console.log(Array.of(score1,score2,score3)) 
