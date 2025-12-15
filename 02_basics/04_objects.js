// const tinderUser = new Object ()   (this is singleton object)
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name ="Sammy"
tinderUser.isLoggedIn = false 

// 
const regularUser = {
	email : "some@gmail.com",
	fullname: {
		userfullname: {
			firstname :"Rashid",
			lastname : "Hussain"
		}
	}
}

// console.log(regularUser.fullname.userfullname.firstname);


// for merging arrays 


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);


const users = [
	{
		id: 1,
		email: "h@gmail.com"
	},
	{
		id: 1,
		email: "h@gmail.com"
	},
	{
		id: 1,
		email: "h@gmail.com"
	}
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));




const course = {
	coursename: "js in hindi",
	price: "999",
	courseInstructor: "hitesh"
}

// course.courseInstructor

// de-structurization 

const {courseInstructor : instructor} = course

console.log(instructor);


// const navbar = ({company})  => {

// }         react concept

// navbar(company = "hitesh")



///   JSON

// {
// 	"name" : "hitesh",
// 	"coursename" : "js in hindi",
//     "price" : "free"
// }


[
	{},
	{},
	{}
]