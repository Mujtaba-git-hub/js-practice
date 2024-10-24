
/* 
 two type of data types : PREMETIVE  & Non- PRIMITIVE
    
 => Primitive: means when we use then its copy we acces from memory not actual it
7 types: string ,  Bigint,Number , Boolean , null , Undefiend, Symbol

 => Non-Primitive or Refrecnce Type : when we acces it access by Refrence From memory like:
        Arrays , Objects   & function

        JAVASCRIPT IS DYNAMIC BCZ initially no need to define type
         
*/

const score = 100 //=> Number
const ScoreValue= 100.3 //=>number
const isloggedIN = false //=> boolean
const Outside= null //=> type: object (null means empty)
let userEmail; //=> type: undefiend or let userEmail= undefiend; same
const id = Symbol("123");       // symbol type both are diffrent
const Anotherid = Symbol("123"); 

const BigNumber= 324342323238383423n; //if we add in last it is Bigint
/*
console.table([
    {Variable:"Score", Type:typeof(score)},
    {Variable:"ScoreValue", Type:typeof(ScoreValue)},
    {Variable:"IsLogedIn", Type:typeof(isloggedIN)},
    {Variable:"Outside", Type:typeof(Outside)},
    {Variable:"UserEmail", Type:typeof(userEmail)},
    {Variable:"Id", Type:typeof(id)},
    {Variable:"BigNumber", Type:typeof(BigNumber)}

])

*/

//  REfrence (Non Primitive)

// Array:

const  heroes = ["abc","def","GHUi"]

// object in currly bracketis object

let myobj = {
    name: "Mujtaba",
    age: 21,
}
// console.log(myobj, typeof(myobj)) //=> Type = object

//FUNCTION
/* 
function defination:
function(){}

but want to store in variable
its type will be  Object Function
*/
const myFun = function(){
    console.log("Hi i am function",typeof(myFun)) // type: Object Function
}
myFun()