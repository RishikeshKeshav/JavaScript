// myArray = ["rishi","andhare"]
// let heroPower = {
//     thor:"hammer",
//     spiderman:"spling"
// }


// Object.prototype.hitesh = function(){
//     console.log(   `rishielsj is present in all objects`)
// }


// Array.prototype.rishi = function(){
//     console.log("hello andhare")
// }
// heroPower.hitesh()
// myArray.hitesh()
// myArray.rishi()

const Teacher = {
     name:"rishi",
     val:"english"
}

const TeacherSupport ={
    course:"english",
    val:"fulltime",
    __proto__ : Teacher
}

const TASupport = {
     responsiblities:"manage Canvae",
     __proto__ : TeacherSupport
}

console.log(TASupport)
const user = {
    name:"rishiekshandh",
    age:23
}

Teacher.__proto__ = user
Object.setPrototypeOf(TeacherSupport,Teacher)


