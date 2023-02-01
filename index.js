// document.addEventListener('click', (ev) => {
//   if (ev.target.id === 'expand') {
//     ev.target.parentElement.classList.toggle('open');
//   }
// })
let i1 = document.getElementById('i1')
let i2 = document.getElementById('i2')

i1.style.display = 'block'

i1.addEventListener('click', function(ev) {
  ev.target.parentElement.classList.toggle('open')
  i1.style.display = "none";
  i2.style.display = "block";
})

i2.addEventListener('click', function(ev) {
  ev.target.parentElement.classList.toggle('open')
  i2.style.display = "none";
  i1.style.display = "block";
})
