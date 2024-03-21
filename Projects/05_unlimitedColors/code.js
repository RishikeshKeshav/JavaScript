const randomColor = function(){
const hex = "0123456789ABCDEF"
let color = '#'

for(let i=0 ; i< 6;i++){
        color = color + hex[Math.floor(Math.random() * 16)];
}
    console.log("color")
    return color
};

console.log(randomColor())

let intervalId ;
const startChanging = function(){
    if(!intervalId)
   intervalId =  setInterval(changecolor,1000)
   
   function changecolor(){
        document.body.style.backgroundColor = randomColor();
       }
   
};

const stopChanging = function(){
    clearInterval(intervalId);
    intervalId=null;
};
document.querySelector('#start').addEventListener('click',startChanging);

document.querySelector('#stop').addEventListener('click',stopChanging);


