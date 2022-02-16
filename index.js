var equo = ""
document.getElementById('numpad').addEventListener('click', function (event) {
    if(event.target.textContent.toString() === '=') {
        document.querySelector('.screen').textContent = eval(equo)
        equo = ""
    }

    else if (event.target.textContent.toString() === 'C') {
        equo = equo.substring(0, (equo.length - 1))
        document.querySelector('.screen').textContent = equo
    }

    else {
        equo = equo + event.target.textContent.toString()
        document.querySelector('.screen').textContent = equo
    }
    
})