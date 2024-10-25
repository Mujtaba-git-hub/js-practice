
const myArr =[0,1,2,3,4,5,"Mujtaba"] //always in [] , no matter same type

// console.log(myArr) [0,1,2,3,4,5,"Mujtaba"] 
// console.log(myArr[6]) => 'Mujtaba'

// Array is Shallow copy

const myArr2=  new Array(1,2,3) //here [] no need

// console.log(myArr2)

myArr.push("Noondani") //for add in last

// console.log(myArr)
myArr.push("6")

a= myArr.pop()  //=> 6 it pop last elemnt form array 
//console.log(myArr) //w/6 print

// unshift for add element in 1st index add

myArr.unshift(55)

//console.log(myArr) //[ 55, 0, 1, 2, 3, 4, 5, 'Mujtaba', 'Noondani' ]
myArr.shift()

//console.log(myArr) // [ 0, 1, 2, 3, 4, 5, 'Mujtaba', 'Noondani' ]

// console.log(myArr.includes("Mujtaba")) //True

const newArr= myArr.join()
// console.log(typeof(newArr),newArr)  //string converted


// slice vs splice 
/** slice:
  give substring that is copy of element deep copy orignal arry
  not effected
  myArr.slice(1,3) //=> [1,2,] last index not included 

  splice : give substring and remove that part orignal from arry 
  myArr.splice(1,3) //=>[1,2,3]
 */

  console.log(myArr.slice(1,3));
  console.log(`After slice orignal array:${myArr}`)

  console.log(myArr.splice(1,3));
  console.log(`After splice orignal array:${myArr}`)

   
