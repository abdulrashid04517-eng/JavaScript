// Immediately Involked Function Expressions  (IIFE)

// For removing the pollution from global scope and for immediately execution we use iife

(function chai (){
	//nameed iife
	console.log(`DB CONNECTED`);
}) ();


((name) => {
	//unnamed iife 
	console.log(`DB CONNECTED TWO ${name}`);
	
})('Rashid')