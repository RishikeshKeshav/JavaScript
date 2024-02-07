//Single ton


const user = new Object()

const user1 = {}

user1.id = "0001"
user1.name= "rishikesh"
user1.age = 32
console.log(user)
console.log(user1)
// console.log(`${user},${user1}`)


const regularUser = {
    id:"0939",
    fullename:{
        firstname:"rishi",
        lastname:"andhare"
    },
    dateofbirth:{
        city:"akola",
        state:"MH"
    }
}

console.log(regularUser)
console.log(regularUser.fullename.firstname)

const obj1 ={
    1:"a",
    2:"bc",
    3:"asd",
    4:"akdjf"
}
const obj2 ={
    5:"asd",
    6:"bcd",
    7:"asdd",
    8:"akdjfd"
}
 const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)
const val =9
const obj4 = {...obj1,...obj2,...obj3}
console.log(obj4)
console.log(`object 4 + ${val}`)

const users = [
    {
        id:1,
        name:"rishi"

},
{
    id:3,
    name:"isi"
}]

console.log(users[1].id)



console.log(Object.keys(user1))
console.log(Object.values(user1))
console.log(Object.entries(user1))


const course = {
    coursename:"english",
    teacher:"myself",
    term:"spring",
    fees:"2700"
}

const {coursename : name} = course

// const {coursename} = course
// console.log(coursename)

console.log(name)