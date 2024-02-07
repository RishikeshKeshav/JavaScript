

const user = {
    name:"rishikesh",
    age: 67,
    website : function()
    {
        console.log(`welcome to website ${this.name}`)
        return
    }
}

user.website()

user.name="anshul"

user.website()

console.log(this)


const chai = function chai(){
    // console.log(this)
}

chai()

const arrow =  () => {

}

const addTwo = (num1,num2) => {
    return num1+num2
}

console.log(addTwo(4,5))

///
 

const implicit = (num1,num2) => num1 + num2

console.log(implicit(7,8))

const implicitParenthesis = (num1,num2) => (num1 + num2)


console.log(implicitParenthesis(90,200))

const  arrowObj = () => ({
    name:"rishi",
    age:90
})

console.log(arrowObj())
