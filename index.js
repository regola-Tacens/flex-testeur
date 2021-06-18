const boxes = document.getElementsByClassName('box')
const boxesInput = document.getElementsByClassName('box__input')
const boxesFlexbasis = document.getElementsByClassName('box__flexbasis')
const boxesFlexShrink = document.getElementsByClassName('box__flexshrink')

const container = document.getElementById('container')
const form = document.getElementById('form1')


getInputValue = ()=> {
    for(let i=0; i<boxes.length;i++){
        boxes[i].style.flexGrow= boxesInput[i].value
        boxes[i].style.flexShrink= boxesFlexShrink[i].value
        boxes[i].style.flexBasis = boxesFlexbasis[i].value +'px'
    }

    reportwidth()
}

form.addEventListener('change', ()=>getInputValue())

function reportwidth() {
    
    for(let i=0; i<boxes.length;i++){
        boxes[i].innerHTML =`<div>
        <div style="font-size:30px;"><strong>BOX ${i +1}</div></strong><br>
        width : ${boxes[`${i}`].clientWidth} px<br><br>
        flex-grow : ${boxes[`${i}`].style.flexGrow || 1 }<br>
        flex-shrink : ${boxes[`${i}`].style.flexShrink || 1 }<br>
        flex-basis : ${boxes[`${i}`].style.flexBasis || 0}<br><br>
        <b>shorthand</b><br>
        flex : ${boxes[`${i}`].style.flexGrow || 1 } 
        ${boxes[`${i}`].style.flexShrink || 1 } 
        ${boxes[`${i}`].style.flexBasis || 0}
        </div>`
    }
  }

reloadPage = () => window.location.reload();
window.onresize = reportwidth;
window.onload = ()=> {
    reportwidth();
}



