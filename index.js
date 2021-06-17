const boxes = document.getElementsByClassName('box')
const boxes__input = document.getElementsByClassName('box__input')
const boxes__flexbasis = document.getElementsByClassName('box__flexbasis')
const boxes__flexShrink = document.getElementsByClassName('box__flexshrink')

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
    for(i=0; i<boxes.length;i++){
        boxes[i].style.flexGrow= boxes__input[i].value
        boxes[i].style.flexShrink= boxes__flexShrink[i].value
        boxes[i].style.flexBasis = boxes__flexbasis[i].value +'px'
    }

    reportwidth()
}

form__form1.addEventListener('change', ()=>getInputValue())

function reportwidth() {
    
    for(i=0; i<boxes.length;i++){
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



