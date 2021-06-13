const firstBlock = document.getElementById('box1')
const secondBlock = document.getElementById('box2')
const thirdBlock = document.getElementById('box3')

const box1__input = document.getElementsByClassName('box1__input')
const box2__input = document.getElementsByClassName('box2__input')
const box3__input = document.getElementsByClassName('box3__input')

const box1__flexbasis = document.getElementsByClassName('box1__flexbasis')
const box2__flexbasis = document.getElementsByClassName('box2__flexbasis')
const box3__flexbasis = document.getElementsByClassName('box3__flexbasis')

const container = document.getElementById('container')
const form__form1 = document.getElementById('form1')


getInputValue = ()=> {
    firstBlock.style.flexGrow= box1__input[0].value
    firstBlock.style.flexBasis = box1__flexbasis[0].value +'px'

    secondBlock.style.flexGrow= box2__input[0].value
    secondBlock.style.flexBasis = box2__flexbasis[0].value +'px'

    thirdBlock.style.flexGrow= box3__input[0].value
    thirdBlock.style.flexBasis= box3__flexbasis[0].value +'px'

    reportwidth()
}

form__form1.addEventListener('change', ()=>getInputValue())

changeDisplay =()=> {
    container.style.flexDirection = 'column'
}

function reportwidth() {
    
    // box1_flexGrow = box1__input[0].value
    firstBlock.innerHTML = `<div>
    <div style="font-size:30px;"><strong>BOX 1</div></strong><br>
    width : ${firstBlock.clientWidth} px <br><br>
    flex-grow : ${box1__input[0].value || 1 }<br>
    flex-shrink : ${ 1 }<br>
    flex-basis : ${box1__flexbasis[0].value || 0}px<br><br>
    <b>shorthand</b><br>
    flex : ${box1__input[0].value || 1 } 1 ${box1__flexbasis[0].value || 0}px
    </div>` ;

    secondBlock.innerHTML = `<div>
    <div style="font-size:30px;"><strong>BOX 2</div></strong><br>
    width : ${secondBlock.clientWidth} px <br><br>
    flex-grow : ${box2__input[0].value || 1 }<br>
    flex-shrink : ${ 1 }<br>
    flex-basis : ${box2__flexbasis[0].value || 0} px<br><br>
    <b>shorthand</b><br>
    flex : ${box2__input[0].value || 1 } 1 ${box2__flexbasis[0].value || 0}px
    </div>` ;

    thirdBlock.innerHTML = `<div>
    <div style="font-size:30px;"><strong>BOX 3</div></strong><br>
    width : ${thirdBlock.clientWidth} px <br><br>
    flex-grow : ${box3__input[0].value || 1 }<br>
    flex-shrink : ${ 1 }<br>
    flex-basis : ${box3__flexbasis[0].value || 0} px<br><br>
    <b>shorthand</b><br>
    flex : ${box3__input[0].value || 1 } 1 ${box3__flexbasis[0].value || 0}px
    </div>` ;
    

  }


window.onresize = reportwidth;
window.onload = ()=> {
    reportwidth();
}
