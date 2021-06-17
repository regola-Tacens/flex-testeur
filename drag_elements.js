var element = document.getElementById('container');

var resizer = document.createElement('div');
resizer.style.width = '15px';
resizer.style.height = '15px';
resizer.style.background = '#e7512b';
resizer.style.position = 'absolute';
resizer.style.right = 0;
resizer.style.bottom = 0;
resizer.style.cursor = 'se-resize';

//Append Child to Element
resizer.addEventListener('mousedown', initResize, false);
element.appendChild(resizer);

//Window funtion mousemove & mouseup
function initResize(e) {
   window.addEventListener('mousemove', Resize, false);
   window.addEventListener('mouseup', stopResize, false);
}
//resize the element
function Resize(e) {
   element.style.width = (e.clientX - element.offsetLeft) + 'px';
   element.style.height = (e.clientY - element.offsetTop) + 'px';
   reportwidth()
}
//on mouseup remove windows functions mousemove & mouseup
function stopResize(e) {
    window.removeEventListener('mousemove', Resize, false);
    window.removeEventListener('mouseup', stopResize, false);
}