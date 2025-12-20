const userEmail = []        ////assume 

if (userEmail) {
	console.log("Got User Email");
}
else {
	console.log("Don't Have User Email");
	
}

// falsy values 

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// "0", 'false', " ", [], {}, function(){}  //empty function


// if (userEmail.length === 0) {
// 	console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
	console.log("Object Is Empty");
	
}


// Nullish Coalescing Operator (??) : null , undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 =undefined ?? 100
val1 = null ?? 39896 ?? 8399202907

console.log(val1);


// ternary Operator  

// condition ? true : false


const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less Than 80") : console.log("More Than 80");

