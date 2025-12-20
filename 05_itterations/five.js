const coding = ["js","python","ruby","java","cpp"]

coding.forEach (function (val){
	 console.log(val);
	
})
                                  //ARROW FUNCTION
 coding.forEach( (item) => {
 	console.log(item);
	
 })

 function printme (item,index,arr){
 	console.log(item,index,arr);
 }
 coding.forEach(printme)

const myCoding =[
	{
		languageName : "JavaScript",
		languageFileName : "js"
	},
	{
		languageName : "TypeScript",
		languageFileName : "ts"
	},
	{
		languageName : "python",
		languageFileName : "py"
	}
]

myCoding.forEach( (item) => {
	console.log(item.languageFileName);
	
})