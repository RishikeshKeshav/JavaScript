


function setUsername(username){
    this.username = username
}

function callfun(username,passsword,email){
    setUsername.call(this,username)
    this.passsword=passsword
    this.email=email
}


const user = new callfun("rishikesh","andhare","rishi@gmail.com")

console.log(user)