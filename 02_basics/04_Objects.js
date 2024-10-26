//  const tinderUser = new Object ()
// console.log(tinderUser) //=> {}

const tinderUser = {}

 tinderUser.id = "123a"
 tinderUser.name= "Mujtaba"
 tinderUser.isLoggedIn = false

// console.log(tinderUser); //=>{ id: '123a', name: 'Mujtaba', isLoggedIn: false }

const regularUser= {
    email: "abc@abc",
    fullName: {
        userFullName: {
            firstName: "Mujtaba",
            lastName: "Noondani"
        }
    }
}
console.log(regularUser.fullName) // { userFullName: { firstName: 'Mujtaba', lastName: 'Noondani' } } 
console.log(regularUser.fullName.userFullName.firstName) //=>Mujtaba
// for api use ? onfull name

//for object combine use {...obj1, ...obj2} same as array

//console obj3={obj2,obj1} => same arr problem obj in obj
// for this type use hi syntax const obj3 = Object.assign({}, obj1, obj2)

const obj1 = {1: "a", 11: "b"}
const obj2 = {2: "c", 22: "d"}
const obj3 = {3: "e", 33: "f"}

const obj4= {...obj1, ...obj2}
//console.log(obj4)

// when data come from data base

const users = [
    {
        id : 1,
        email: "h@gmail.com"
    },
    {
        id : 2,
        email: "g@gmail.com"
    },
    {
        id : 3,
        email: "k@gmail.com"
    }
    
]

console.log(users[1].email)
console.log(tinderUser);

console.log(Object.keys(tinderUser)) //for accesing all keys in an array for looping etc
console.log(Object.values(tinderUser)) //for accesing all values in an array for looping etc
console.log(Object.entries(tinderUser)) // [ 'id', '123a' ], [ 'name', 'Mujtaba' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'))// true

const course= {
    coursename: "js in hindhi"
}