const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')

const box1__input = document.getElementsByClassName('box1__input')
const box2__input = document.getElementsByClassName('box2__input')
const box3__input = document.getElementsByClassName('box3__input')

const box1__flexbasis = document.getElementsByClassName('box1__flexbasis')
const box2__flexbasis = document.getElementsByClassName('box2__flexbasis')
const box3__flexbasis = document.getElementsByClassName('box3__flexbasis')

const box1__flexshrink = document.getElementsByClassName('box1__flexshrink')
const box2__flexshrink = document.getElementsByClassName('box2__flexshrink')
const box3__flexshrink = document.getElementsByClassName('box3__flexshrink')

const container = document.getElementById('container')
const form__form1 = document.getElementById('form1')


getInputValue = ()=> {
    box1.style.flexGrow= box1__input[0].value
    box1.style.flexShrink= box1__flexshrink[0].value
    box1.style.flexBasis = box1__flexbasis[0].value +'px'

    box2.style.flexGrow= box2__input[0].value
    box2.style.flexShrink= box2__flexshrink[0].value
    box2.style.flexBasis = box2__flexbasis[0].value +'px'

    box3.style.flexGrow= box3__input[0].value
    box3.style.flexShrink= box3__flexshrink[0].value
    box3.style.flexBasis= box3__flexbasis[0].value +'px'

    reportwidth()
}

form__form1.addEventListener('change', ()=>getInputValue())

changeDisplay =()=> {
    container.style.flexDirection = 'column'
}

reloadPage = () => window.location.reload();

function reportwidth() {


    box1.innerHTML = `<div>
    <div style="font-size:30px;"><strong>BOX 1</div></strong><br>
    width : ${box1.clientWidth} px <br><br>
    flex-grow : ${box1__input[0].value || 1 }<br>
    flex-shrink : ${box1__flexshrink[0].value || 1 }<br>
    flex-basis : ${box1__flexbasis[0].value || 0}px<br><br>
    <b>shorthand</b><br>
    flex : ${box1__input[0].value || 1 } ${box3__flexshrink[0].value || 1 } ${box1__flexbasis[0].value || 0}px
    </div>` ;

    box2.innerHTML = `<div>
    <div style="font-size:30px;"><strong>BOX 2</div></strong><br>
    width : ${box2.clientWidth} px <br><br>
    flex-grow : ${box2__input[0].value || 1 }<br>
    flex-shrink : ${box2__flexshrink[0].value || 1 }<br>
    flex-basis : ${box2__flexbasis[0].value || 0} px<br><br>
    <b>shorthand</b><br>
    flex : ${box2__input[0].value || 1 } ${box3__flexshrink[0].value || 1 } ${box2__flexbasis[0].value || 0}px
    </div>` ;

    box3.innerHTML = `<div>
    <div style="font-size:30px;"><strong>BOX 3</div></strong><br>
    width : ${box3.clientWidth} px <br><br>
    flex-grow : ${box3__input[0].value || 1 }<br>
    flex-shrink : ${box3__flexshrink[0].value || 1 }<br>
    flex-basis : ${box3__flexbasis[0].value || 0} px<br><br>
    <b>shorthand</b><br>
    flex : ${box3__input[0].value || 1 } ${box3__flexshrink[0].value || 1 } ${box3__flexbasis[0].value || 0}px
    </div>` ;
    

  }


window.onresize = reportwidth;
window.onload = ()=> {
    reportwidth();
}
