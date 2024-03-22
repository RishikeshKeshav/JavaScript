// class User{
//     constructor(username){
//         this.username = username
//     }
//  createUsername(username) {
//     return console.log(`'this is isnide the create ${this.username}'`)
    
//    }
// //    function sEtUserName(username){
// //     console.log(`this is theusenrame ${username}`)
// //    }
// }

// const user = new User("rhiskesh")
// user.createUsername()
// // console.log(user.createUsername("ram"))


function User(username,passsword,email){
    this.username=username
    this.passsword=passsword
    this.email=email
}

User.prototype.changepassword = function(){
    return `${this.passsword}abc`
}
const user = new User("r","blur","dfg")
console.log(user)
console.log(user.changepassword())
