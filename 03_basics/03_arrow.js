const user = {
	username: "Rashid",                       /// used onnly in objects not in functions
	price: 9999,

	welcomeMessage: function(){
		// console.log(`${this.username} , welcome to webbsite`);
		// console.log(this);
	}

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// const chai = function (){
// 	let username = "Rashid"
// 	console.log(this);
// }

const chai =   () => {
	let username = "Rashid"
	console.log(this.username);
}


// chai()


// const addTwo = (num1,num2) => {             ///  explicite return
// 	return num1 + num2
// }

// const addTwo = (num1,num2) => num1 + num2   // implicite return or assume

// const addTwo = (num1,num2) => (num1 + num2)

const addTwo = (num1,num2) => ({username : "Rashid"})


console.log(addTwo(4,88));

// const myArray = [2,3,45,56,]

// myArray.forEach()
