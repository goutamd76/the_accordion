// Hare Krishna
let i1 = document.getElementById('i1')
let i2 = document.getElementById('i2')

i1.style.display = 'block'

i1.addEventListener('click', function(ev) {

  p = '';

  if (ev.target.nodeName === 'path') {
    p = ev.target.parentElement.parentElement.parentElement;
    console.log(p);
  }

  if (ev.target.nodeName === 'svg') {
    p = ev.target.parentElement.parentElement;
    console.log(p);
  }

  p.classList.toggle('open')
  i1.style.display = "none";
  i2.style.display = "block";

})

i2.addEventListener('click', function(ev) {
  p = '';

  if (ev.target.nodeName === 'path') {
    p = ev.target.parentElement.parentElement.parentElement;
    console.log(p);
  }

  if (ev.target.nodeName === 'svg') {
    p = ev.target.parentElement.parentElement;
    console.log(p);
  }

  p.classList.toggle('open')
  i2.style.display = "none";
  i1.style.display = "block";
})
