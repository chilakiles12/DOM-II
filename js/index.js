// Your code goes here
const intro = document.querySelector('.intro h2');
intro.addEventListener('mouseover', () => (intro.style.color = 'dodgerblue'));

window.addEventListener('load', event => {
  console.log('page is fully loaded');
});
