const btnSena = document.getElementById('sena');

function addSametTag() {
  // p tag creation with text
  const pTag = document.createElement('p');
  pTag.textContent = 'Samet';
  pTag.style.color = 'red';

  // get div id
  const divTest = document.getElementById('test');
  divTest.appendChild(pTag);
}

btnSena.addEventListener('click', addSametTag);

const input = document.getElementById('inp');

input.addEventListener('change', (event) => {
  console.log(event.target.value);
  if (event.target.value === 'ener') {
    alert('hoşgeldin ' + event.target.value);
  }
});
