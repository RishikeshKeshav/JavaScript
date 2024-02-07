


const rishi = "Andhare"

const w = 3

const c = 4.5

const un = undefined;

const n = null 
let jk;

const id = Symbol("123")
const accountID = Symbol("123")

console.log(id===accountID)

console.log(accountID)

//Non Premitive

const arr = [1,"rishi","oops",8.9];

console.log(arr);

//object

let obj = {
    name: "rishi",
    age: 3,
}

const myfunc = function(){
 console.log("hello world")
}

console.log(typeof myfunc)

//************* Memory*/

//stack

//primitive

let channel = "youtube"
let val = channel
val= "rishikesh"

console.log(channel)
console.log(val)


let user = {
    name:"rishikeshandhare",
    age:29
}

console.log(user)

let user2 = {
    name:"vinit@gmail.com",
    age:26
}
let user3 = user
user3.name ="andhare@gmail.com"
console.log(user3.name)
console.log(user.name)
//heap

//non primitve


