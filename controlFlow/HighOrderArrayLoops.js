

const arr = [1,2,3,4,5,6,7]
for(const num of arr)
{
console.log(`the value sin an array are ${num}`)
}

const map = new Map()
map.set(1,"rihsi")
map.set(2,"vinit")
map.set(3,"india")


console.log(map)


for(const key of map )
{
    console.log(key)
}

for(const [key,value] of map )
{
    console.log(key ,' ',value)
}


const myObj = {
    name:"rishi",
    age:19,
    city: " akola"}
    

for(const key in myObj){
console.log(myObj[key])
}
for(const key in myObj){
    console.log(key)
    }
    
    for(const value in myObj){
        console.log(myObj[value])
        }
        
console.log(myObj)



const pro  = ["q","w","r","t","p","l"]

for(const val in pro)
{
    console.log(val)
}

for(const val in pro)
{
    console.log(pro[val])
}


const lang = ["c","c++","ruby","java"]

lang.forEach(function (item) { 
    console.log(`${item}`)
})


lang.forEach((val,i,aa) => {
    console.log(val,i,aa)
})

function values(item)
{
    console.log(item)
}

lang.forEach(values)


const mycoding = [{
  name:"rishikesh",
  age:232
},
{
    name:"rishikesh",
    age:231
},
{
    name:"rishikesh",
    age:233
}]


mycoding.forEach((item,i,arr)=>{
 console.log(item.name,i,arr)
})