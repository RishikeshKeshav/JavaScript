const myarr=[0,10,20,30,40]

const myarr2 = new Array(13,2,3,35,4,4,5,5)
myarr.push(6)
console.log(myarr)
myarr.pop()
console.log(myarr)
  


console.log(myarr2.shift())

const marvel_heros = ["hulk","captain","thor","ww","spiderman"]
const dc = ["superman","batman"]

marvel_heros.push(dc)

console.log(marvel_heros)

const newherros = marvel_heros.concat(dc)

console.log(newherros)

const all_heros = [...marvel_heros,...dc]

console.log(`all herros ${all_heros}`)


const my_arr = [1,2,3,[4,5,6,7,[6,7,[1,23,4,5,5]]]]

console.log(my_arr.flat(Infinity))


console.log(Array.isArray("Rishikesh"))

console.log(Array.from("Andhare"))

console.log(Array.from({name:"rishikesh",age:30}))

const a=1
const b=2
const c=3

console.log(Array.of(a,b,b,c))