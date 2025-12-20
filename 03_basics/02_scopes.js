var c = 300
let a = 8000
if (true){
	let a = 10
	const b = 20
	// console.log("INNER:",a);
	
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
	const username = "Rashid"

	function two(){
		const website = "youtube"
		console.log(username);
		
	}
	// console.log(website);

	two()
	
}

// one()


if (true) {
	const username = "Rashid"
	if (username === "Rashid") {
		const website = "Youtube"
		// console.log(username  + website);
	}
	// console.log(website);
}

// console.log(username);


// +++++++++++++++++++ intreresting (Hoisting) ++++++++++++++++++++++++++++



addone(9)

function addone(num) {
	return num + 1
}


addTwo(8)
const addTwo = function(num){
	return num + 2
}

