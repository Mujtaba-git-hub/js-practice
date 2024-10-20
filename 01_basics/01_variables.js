const AccountId = 786;  // ; in end is optional , Const will nevere change its value throug out programe

let AccountEmail = "Mujtaba@gmail.com" 

var AccountPassword = "Mpk"

AccountCity = "karachi"
// AccountId= 3 NOT ALLOWED     erro bcz const never chnages 


console.log(AccountId)

AccountEmail= "abc@gmail.com"
AccountPassword= "2121"
AccountCity = "NewYork"

console.table([AccountId, AccountEmail, AccountCity, AccountPassword])

/* 
 --> PRefer not to use var , bcz of block and functional scope
 --> by default variable value is Undefiend 
*/