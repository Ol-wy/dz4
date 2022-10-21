function counter() {
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let number = document.querySelector('.number');
let num = 0;
  
minus.addEventListener('click', function() {
    num--;
    number.value = num;
});
  
plus.addEventListener('click', function() {
    num++;
    number.value = num;
});
}
  
let list = document.querySelectorAll('.counter');
  
counter()