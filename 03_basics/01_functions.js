// // FUNCTIONS



function sayMyName (){
	console.log("R");
	console.log("A");
	console.log("S");
	console.log("H");
	console.log("I");
	console.log("D");
}

sayMyName()     // sayMyName is the  reference and () is the execution 

// function addTwoNumbers (number1,number2){   // number1,2 is parameters 

// 	console.log(number1 + number2);
// }


function addTwoNumbers (number1,number2){ 

	let result = number1 + number2
	return result               // after return nothing will print 
	
	return number1 + number2
}

const result = addTwoNumbers(2 , 7)
console.log("Result: ",result);    // 2,false are arguments





function loginUserMessage (username = "sam"){
	if (!username){
		console.log("Please Enter Your username ");
		return
	}
	return `${username} just logged in`
}
console.log(loginUserMessage("Rashid"));
console.log(loginUserMessage());



function calculateCartPrice(val1,val2 ,...num1){                // ... is rest and sprate operator known for bundling items
	return num1
}

console.log(calculateCartPrice(111,22,355,33333330));


const user = {
	username: "Rashid",
	price: 299
}

function handleObject(anyobject){
	console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
	username: "sam",
	price: 999
})


const mynewArray = [200,400,6000,500050]

function returnSecondvalue (getArray){
	return getArray [1]
}

// console.log(returnSecondvalue(mynewArray));
console.log(returnSecondvalue([200,4000,4400,40]));
