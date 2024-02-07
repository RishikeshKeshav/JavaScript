const name = "rishikesh"
const age = 32

console.log(name+age)

console.log(`My name is ${name} and my age is ${age}`)

const name1 = new String("rishikesh")


console.log(name1.charAt(6))
console.log(name1[9])
console.log(name.__proto__)


const ris = new String("rishikesh")

console.log(ris.substring(2,3))

console.log(ris.slice(-8,4))

const rishi2 = ris.slice(3,4)

const str = "    rishikesh   "

const str2 = str.trim();

console.log(str2)


const url = 'https://roshikesh%40hdsjkd'

console.log(url.replace('%40','_'))

console.log(url.includes('rishi'))


const namemm = 'rishikesh is a good boy '

console.log(namemm.split(' '))
