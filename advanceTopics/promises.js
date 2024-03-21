// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("rishikesh")
//         resolve(),1000
//     })

// });

// promiseOne.then(function(){
//     console.log("hello rishi inside promise")
// })



// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("hellloooo")
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("hello good morning")
// })

// new Promise(function(resolve,reject){
//     setInterval(function(){
//         // console.log("hellloooo good nigth")
//         resolve({username:"rishis",password:"passsword"})
//     },1000
//     )
// }).then(function(user){
//     console.log(user)
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username:"rishikesh",pass:"password"})
//         }else{
//             reject("error is there")
//         }
//     },1000)
// })


// promiseFour.then((user)=>{
//   console.log(user)
//   return user.username  
// })
// .then((username)=>{
//     console.log(username)
//     // return username
// })
// .catch((error)=>{
// console.log(error)
// }).finally(()=>{ console.log("promise is finally fullfilled")}
// )

// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//      let error = false
//      if(!true){
//         console.log("No error")
//         resolve({username:"rishi",password:"andhare"})
//      }else{
//         reject("error is there insoide the code")
//      }
//     },1000)
// })

// async function consumePromise(){
// try{ 
//  const res = await promiseFive
//   console.log(res)
// } catch(error)
// {
//     console.log(error)
// }
// }
// consumePromise()


// async function fetchData(){
// try{    
//     const fetchh = await fetch('https://api.github.com/users/hiteshchoudhary')
//     const res = await fetchh.json()
//     console.log(res)
// } 
// catch(error){
//     console.log("this is error")
// }
// }

// fetchData()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
     const res = response.json()
     return res
})
.then((data)=>{
    console.log(data)
})
.catch()
{
    console.log("rhis is error")
}
