
// two way to create objects 1) singleton 
// singleton with constructor
// object.create

// object literals


//for symbol use this method compulsory
const mysm= Symbol("Key1")

const jsUser= {
    name: "Mujtaba",
    fullName: "MujtabaNoondani",
    age: 21,
    [mysm]: "mykey1",
    email: "muj@globalThis.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// acces object use Object_name._element_name
console.log(jsUser.email)
console.log(jsUser["email"])

// but if key is in string initially so compulsory useobject__name["object"]
console.log(jsUser["fullName"])

//for symbol use []
console.log(jsUser[mysm])

// for change instant of Object
jsUser.email="abc@gmail.com"

console.log(jsUser.email)

// if u want lock value use 
Object.freeze(jsUser)

jsUser.email="def@gmail.com"

console.log(jsUser.email) //value not changed


/* it has keys : values
    by default keys & value both are string but no 
    need to denote string keys

    * */