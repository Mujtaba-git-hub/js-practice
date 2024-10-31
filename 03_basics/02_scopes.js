let A =10
const B = 20
var C= 30

if (true) {
    let A= 500
    // console.log(`value of inner A= ${A}`) // 500
    // console.log(`value of A= ${A}`) => 10
    // console.log(`value of B= ${B}`) => 20
    // console.log(`value of C= ${C}`) => 30
    let a =100
    const b = 200
    var c= 300
    
    /** in block we can access upper values but outisde of 
     * scope iner value of const & let value not available
     * if same variable name then overright that value inside scope
     * but outside value will be same as outside
     */
}
// console.log(`value of let a= ${a}`) // not available
// console.log(`value of const b= ${b}`) //not available
// console.log(`value of var c= ${c}`) // => 300
// console.log(`value of A outer = ${A}`) // 10



/**parent cannot acces child variavble except var case */

if(true){
    const name= "Mujtaba"
    if(name=="Mujtaba")
    {
       const salary= 1000000
 //       console.log("name: ",name)
  //      console.log("first salary: ",salary)
    }
    // console.log(" salary: ",salary) // parent cann't acces child variable
    
}

//------------------------------

// function also have closure property

function one(){
    const name= "Mujtaba "

    function two()
    {
        const salary=1000000
        console.log(name+salary)
    }
    console.log(name)
    // console.log(salary) // parent not access child variable

    two()
}

// one()

//  ---imp---- two() // not acces because it is under one sccope
//one() // Mujtaba \n Mujtaba 1000000




// ++++++++++++++++++ INTRESTING ++++++++++++++



console.log(addone(1)) // allow =2


function addone(num){
    return num+1
}

console.log(addtwo(2)) // ERROR not access 

const addtwo= function (num) // function hosting
{
    return num+2
}

// addone(5);
// addtwo(5);

// console.log(addtwo)  //return function refrence
    