const user= {
    username:"rishikesh",
    age:"12",
    email:"rishikesh@gmail",
    getuser:function(){
      console.log(`this is my user ${this.username}`)
      console.log(this)
    }
}
// console.log(user)
console.log(user.getuser())


function User(username,password)
{
    this.username = username,
    this.passsword = password
}

const user1 = new User("rishi","1234");
console.log(user1)