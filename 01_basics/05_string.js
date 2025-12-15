
const name = "Rashid "
const repoCount = 20

// console.log(name + repoCount + "  Value");

//  We are using String interpolation that is more readable than this.

console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);


//Another way of declaring string 

const gameName = new String('Rashid-00-ss')

console.log(gameName[0]);  // for accessing key figure 
console.log(gameName.length);  // for accessing the length
console.log(gameName.__proto__);  // for accessing the prototype
console.log(gameName.sub());  // for accessing the prototype (after the name of variable simply write (.) and the name of the prototype )
console.log(gameName.charAt(2));
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('d'));

const newString = gameName.substring(0,6)
console.log(newString);


const anotherString = gameName.slice(-9,4)
console.log(anotherString);

const newStringOne = "   Rashid      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rashid.com/mohd%20rashid"
console.log(url.replace('%20','_'));

console.log(url.includes('rashid'));

console.log(gameName.split('-'));

