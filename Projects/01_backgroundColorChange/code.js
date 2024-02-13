

const colorOption = document.querySelectorAll('.button')
const background = document.querySelector('body')



colorOption.forEach(function(button){
    console.log(button)


    button.addEventListener('click',function(e){
      console.log(e)
      console.log(e.target.id)
      
      if(e.target.id==="Blue")
      {
        background.style.backgroundColor=e.target.id
      }
      else   if(e.target.id==="Gray")
      {

        background.style.backgroundColor=e.target.id
      }
      else   if(e.target.id==="Green")
      {

        background.style.backgroundColor=e.target.id
      }
      else   if(e.target.id==="Red")
      {

        background.style.backgroundColor=e.target.id
      }
      else   if(e.target.id==="Yellow")
      {

        background.style.backgroundColor=e.target.id
      }else{
        background.style.backgroundColor="black"
      }
    })
})