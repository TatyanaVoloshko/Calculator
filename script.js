const calc = document.getElementById('calc')
const result = document.getElementById("result")

calc.addEventListener('click', function (event) {
   
    if (!event.target.classList.contains("calc-btn"))
        return

    const newValue = event.target.innerText

    switch (newValue) {
        case 'AC': 
            result.value = ''
            break
        
        case '=':
            if(result.value.search(/[^0-9*/+-.]/mi) != -1) return
            result.value = eval(result.value).toFixed(2)
            break
        
        default:
            result.value += newValue
    }
   
})