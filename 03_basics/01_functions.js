
 function funName()
 {
console.log("A");
console.log("B");
console.log("C");

}

funName()
funName // refrence

// parameter taking

// function addtwo( num1 ,num2)
function addtwo( num1=0 ,num2=0) //by default taking 0 value
{
    temp= num1+num2
    // console.log(temp)
    return temp
}
t= addtwo(2,3)
console.log(addtwo(2,3))
console.log(t)

function loginUserMsg(username="Mujan") //means uservalue minimum mujan not undefiendin any case
{
    //for check string valid
    if(username) 
     return `${username} just logged in`
    return "wrong username"
}

// console.log(loginUserMsg('Mujtaba'))
// console.log(loginUserMsg()) // => undefined


//like in shopping cart we dont know ohow much item add
// so we dont use ()

//... raste & spread operator

// function claculateCart(...num1)
// {
    
// }

// function claculateCart(VAL1,VAL2,...num1) //MEANS VAL1, AND VAL2 SHOULD PASS ANITHER HAS CHOICE
// {
    
// }

const user = {
    username:  "mujtaba",
    price: 199
}

// for object in fun

function handle(anyobj)
{
    console.log(`username: $[anyobj.uername] \n price: '$anyobj.price $[anyobj.price}"`)
}