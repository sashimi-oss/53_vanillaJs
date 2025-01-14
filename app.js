const body = document.getElementsByTagName('body')[0];
const display = document.createElement('div');
display.className='display';
display.id = 'dis';
body.appendChild(display);
display.innerHTML='abc';

display.style.backgroundColor='blue';

let topPx = 0;

let timeout = setInterval(() => {
  topPx += 10;
  display.style.top=`${topPx}px`;
}, 100);

setTimeout(() => {
  clearInterval(timeout);
}, 5000);