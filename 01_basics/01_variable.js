const AccountId = 12345
let AccountEmail = "Rashid@gmail.com"
var AccountPassword = "98765"
AccountCity = "Uttar Pradesh"
let AccountState = "Bareilly"
// AccountId=7654


// console.log("AccountId");

/*
Prefer not to use var 
because of isssue in block scope and functional scope
*/
AccountEmail = "hc@hc.com"
AccountPassword = "63962"
AccountCity = "Pilibhit"
AccountState = "Nyoria"

console.table([AccountId, AccountEmail, AccountPassword, AccountCity, AccountState])
