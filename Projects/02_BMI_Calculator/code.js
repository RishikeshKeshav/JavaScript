

const form = document.querySelector('form')

form.addEventListener('submit',function(e){

    e.preventDefault()

     const height = parseInt(document.querySelector('#height').value)
     const weight = parseInt(document.querySelector('#weight').value)
     console.log((height * height) / 10000)
     const bmiValue = (weight / ((height * height) / 10000)).toFixed(2);
     console.log(bmiValue)
    const weight_guide = document.querySelector('#weight-guide')
     const results = document.querySelector('#results')


     if(height==='' || height<0 || isNaN(height))
     {
        results.innerHTML= ` please give a valid value of ${height}`
     }else if(weight==='' || weight<0 || isNaN(weight))
     {
        results.innerHTML=`please give a valid value of ${weight}`
     }
     else{
        console.log(bmiValue)
        results.innerHTML = `BMi Value == ${bmiValue}`
     }

     if(bmiValue<18.6){
        weight_guide.innerHTML=`<span> You are underwieight</span>`
     }else if(bmiValue>=24&&bmiValue<=28)
     {
        weight_guide.innerHTML=`<span> you are Normal<span>`
     }
     else{
        weight_guide.innerHTML=`<span> you are Overiweight<span>`
     }


})

