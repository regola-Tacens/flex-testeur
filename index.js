const box = document.getElementsByClassName('box')
const box__input = document.getElementsByClassName('box__input')
const box__flexbasis = document.getElementsByClassName('box__flexbasis')
const box__flexShrink = document.getElementsByClassName('box__flexshrink')

const container = document.getElementById('container')
const form__form1 = document.getElementById('form1')

flexGrowIncrease =(box) => {
    box.style.flexGrow = (parseInt(box.style.flexGrow) +1).toString()
    reportwidth()
}

flexGrowDecrease =(box) => {
    box.style.flexGrow = (parseInt(box.style.flexGrow) -1).toString()
    reportwidth()
}

getInputValue = ()=> {
    for(i=0; i<box.length;i++){
        box[i].style.flexGrow= box__input[i].value
        box[i].style.flexShrink= box__flexShrink[i].value
        box[i].style.flexBasis = box__flexbasis[i].value +'px'
    }

    reportwidth()
}

form__form1.addEventListener('change', ()=>getInputValue())

function reportwidth() {
    
    for(i=0; i<box.length;i++){
        console.log(box[i])
        box[i].innerHTML =`<div>
        <div style="font-size:30px;"><strong>BOX ${i +1}</div></strong><br>
        width : ${box[`${i}`].clientWidth} px<br><br>
        flex-grow : ${box[`${i}`].style.flexGrow || 1 }<br>
        flex-shrink : ${box[`${i}`].style.flexShrink || 1 }<br>
        flex-basis : ${box[`${i}`].style.flexBasis || 0}<br><br>
        <b>shorthand</b><br>
        flex : ${box[`${i}`].style.flexGrow || 1 } 
        ${box[`${i}`].style.flexShrink || 1 } 
        ${box[`${i}`].style.flexBasis || 0}px
        </div>`
    }
  }

reloadPage = () => window.location.reload();
window.onresize = reportwidth;
window.onload = ()=> {
    reportwidth();
}



