var btn1 = document.querySelector('#green');
var btn2 = document.querySelector('#red');
var btn3 = document.querySelector('#green1');
var btn4 = document.querySelector('#red1');
var btn5 = document.querySelector('#green2');
var btn6 = document.querySelector('#red2');

btn1.addEventListener('click', function() {
  
    if (btn2.classList.contains('red')) {
      btn2.classList.remove('red');
    } 
  this.classList.toggle('green');
  
});

btn2.addEventListener('click', function() {
  
    if (btn1.classList.contains('green')) {
      btn1.classList.remove('green');
    } 
  this.classList.toggle('red');
  
});

btn3.addEventListener('click', function() {
  
  if (btn4.classList.contains('red')) {
    btn4.classList.remove('red');
  } 
this.classList.toggle('green');

});

btn4.addEventListener('click', function() {
  
  if (btn3.classList.contains('green')) {
    btn3.classList.remove('green');
  } 
this.classList.toggle('red');

});

btn5.addEventListener('click', function() {
  
  if (btn6.classList.contains('red')) {
    btn6.classList.remove('red');
  } 
this.classList.toggle('green');

});

btn6.addEventListener('click', function() {
  
  if (btn5.classList.contains('green')) {
    btn5.classList.remove('green');
  } 
this.classList.toggle('red');

});


