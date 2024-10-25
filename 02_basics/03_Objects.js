
// two way to create objects 1) singleton 
// singleton with constructor
// object.create

// object literals

const jsUser= {
    name: "Mujtaba",
    fullName: "MujtabaNoondani",
    age: 21,
    email: "muj@globalThis.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// acces object use Object_name._element_name
console.log(jsUser.email)

// but if key is in string initially so useobject__name["object"]
console.log(jsUser["fullName"])



/* it has keys : values
    by default keys & value both are string but no 
    need to denote string keys

    * */