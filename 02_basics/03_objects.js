// Singleton
// object.create

// object Literals

const mySym = Symbol("key1")

const Jsuser = {
	name : "Rashid",
	"full name" : "Mohd Rashid",
	[mySym]: "mykey1",
	age : 18,
	location: "Jaipur",
	email: "rashid@google.com",
	isLoggedIn: false ,
	lastLoginDays: ["Monday","Saturday"]
}

console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);
console.log(Jsuser[mySym]);


Jsuser.email = "rashid@chatgpt.com"
// Object.freeze(Jsuser)
Jsuser.email = "rashid@microsoft.com"
console.log(Jsuser);


Jsuser.greeting = function(){
	console.log("Hello JS user");	
}

Jsuser.greetingTwo = function(){
	console.log(`Hello JS user , ${this.name} `);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());

