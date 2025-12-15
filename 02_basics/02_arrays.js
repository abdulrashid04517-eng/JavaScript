
const marvel_heros = ["Thor","Ironman","Spiderman"]
const dc_heros = ["Superman","Flash","Batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);

console.log(marvel_heros[3][1]);


const allHeros =marvel_heros.concat(dc_heros)
console.log(allHeros);


const all_new_heros = [...marvel_heros, ...dc_heros] // sprad oprater
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Rashid"))

console.log(Array.from("Rashid"))

console.log(Array.from({name:"Rashid"}))  // interesting


let score1 =1000
let score2 =2000
let score3 =3000

console.log(Array.of(score1,score2,score3));

