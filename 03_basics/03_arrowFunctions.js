
// ---------THIS funtion---------

// crating obj
const user ={
    username: "Mujtaba",
    price: 999,

    welcomeMessage: function(){
            
        // console.log(`${username}, welcome to website`)
        console.log(`${this.username}, welcome to website`)
    }
}

user.welcomeMessage