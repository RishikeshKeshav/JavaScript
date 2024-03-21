function multiply(num){
    return num*5
}
console.log(multiply(5))
console.log(multiply.power=2)
console.log(multiply.prototype)


function createUser(username,score){
    this.username = username
    this.score = score
}
createUser.prototype.increment =function(){
    this.score++ 
}
createUser.prototype.print= function()
{
    console.log(`this is chia score ${this.score}`)
}

const chai = new createUser("rishikesh",1234)
const tea = new createUser("anhkur",789)

chai.print()

// console.log(`this is chai ${chai} and this is ${tea}`)