//Singleton

// Object.create
// object literals
const mySym = Symbol("rishi")


const jsuser = {
    name:"rishikesh",
    age:34,
    email:"rishikesh@gmail;.com",
    "city": "akola",
    [mySym]:"mynewkey"

}

console.log(jsuser.email)
console.log(jsuser["age"])

console.log(jsuser.city)
console.log(jsuser[mySym])


// Object.freeze(jsuser)

jsuser.email="rishi@gmail.com"
console.log(jsuser.email)


jsuser.greeting = function(){
    console.log("san jose is my city")
}
console.log(jsuser.greeting)

jsuser.greetingTwo = function() {
    console.log(`this is new greeting ${jsuser.email} and ${this.age}`)
}
console.log(jsuser.greetingTwo())