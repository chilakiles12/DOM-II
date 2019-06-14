// Your code goes here
const intro = document.querySelector('.intro h2');
intro.addEventListener('mouseover', () => (intro.style.color = 'dodgerblue'));

window.addEventListener('load', event => {
  console.log('page is fully loaded');
});

const focus = document.querySelector('#form');
focus.addEventListener(
  'focus',
  e => {
    e.target.style.color = 'dodgerblue';
  },
  true
);
const input = document.querySelector('.input');
input.style.display = 'flex';
input.style.justifyContent = 'center';
input.style.alignItems = 'center';
input.style.height = '50px';

function logSelection(e) {
  const selection = e.target.value.substring(
    e.target.selectionStart,
    e.target.selectionEnd
  );
  console.log(`You selected ${this.selection}`);
}
input.addEventListener('select', logSelection);

input.addEventListener('keydown', e => console.log(e.code));

window.onresize = function() {
  input.style.backgroundColor = 'black';
};
