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


/*

    <div class="main">
      <div class="test">
        <button class="some">tıkla</button>
      </div>
    </div>

*/



const btnEmrah = document.getElementById("emrah");

btnEmrah.addEventListener("click", (event) => {

  const divContainer = document.getElementsByClassName("container");
  // div.main
  const divMain = document.createElement("div");
  divMain.classList.add("main");
  divContainer[0].appendChild(divMain);

  // div.test
  const divTest = document.createElement("div");
  divTest.classList.add("test");
  divMain.appendChild(divTest);

  // btn.some
  const btnSome = document.createElement("button");
  btnSome.classList.add("some");
  btnSome.textContent = "tıkla";
  divTest.appendChild(btnSome);

})


