const text = document.querySelector('.index')
const t = text.textContent.toString().split('')
text.innerHTML = ""
    setInterval(()=>{
        if(t.length > 0){
            text.innerHTML += t.shift()
        }
    },90)

const adress = document.querySelector('div[data-adress]')
document.querySelector('input[data-tel]')
.addEventListener('click',(e)=>{
    adress.classList.remove('hidden')
})
const pourcentage = document.querySelector('div[data-faculty]')
document.querySelector('input[data-pourcentage ]')
.addEventListener('click',(e)=>{
    pourcentage.classList.remove('hidden')
})

const s = document.querySelectorAll('select[data-fac]')
s.forEach(select => {
    select.addEventListener('change',(e)=>{
        disabled(s)
    })
})

/**
 * 
 * @param {NodeList} elem 
 */
function disabled(elem){
    elem.forEach(sel => {
        sel.setAttribute('disabled','disabled')
    })
}



