function addTwoNum(num1,num2){
     let addsum = num1+num2
     console.log(num1+num2)
    return addsum
}

addTwoNum(4,5)

const numbersadd = addTwoNum(8,9)
console.log("numbers add",numbersadd)


function userNameCheck(username = "Andhare"){
    if(username===undefined)
    {
      console.log("returning from function")
    }
    return `Use is successfully logged in ${username}`
}
console.log(userNameCheck())

console.log(userNameCheck("Rishikesh"))


function calculateCartPrice(...num){
    return num
}

console.log(calculateCartPrice(200,300,500))

function calculateCartPrice(val1,val2,...num){
    return num
}

console.log(calculateCartPrice(200,300,500,200))

const user = {
    name:"rishikesh",
    age:70
}

function userHandle(anyobject){
    console.log(`My name is ${anyobject.name} and age is ${anyobject.age}`)
    return 
}

userHandle(user)


userHandle({
    name:"rishi",
    age:89
})


const myNewArr = [12,3,4,5,6,7,8,9,9]


function arrFunction(myNewArr){
    console.log(myNewArr[3])
    return

}


arrFunction(myNewArr)

