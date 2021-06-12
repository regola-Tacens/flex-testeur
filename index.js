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
    
    firstBlock.innerHTML = `<div>
    width (px) : ${firstBlock.clientWidth} px <br><br>
    flex-basis (px) :${box1__flexbasis[0].value}<br>
    flex-grow : ${box1__input[0].value}
    </div>` ;

    secondBlock.innerHTML = `<div>
    width (px) : ${secondBlock.clientWidth} px <br><br>
    flex-basis (px) :${box2__flexbasis[0].value}<br>
    flex-grow : ${box2__input[0].value}
    </div>` ;

    thirdBlock.innerHTML = `<div>
    width (px) : ${thirdBlock.clientWidth} px <br><br>
    flex-basis (px) :${box3__flexbasis[0].value}<br>
    flex-grow : ${box3__input[0].value}
    </div>` ;
    
    // secondBlock.innerHTML = 'width : '+ secondBlock.clientWidth +'px';
    // thirdBlock.innerHTML = 'width : '+ thirdBlock.clientWidth +'px';

   
  }


window.onresize = reportwidth;

// console.log (firstBlock.clientWidth)