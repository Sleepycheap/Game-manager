import { updateGame } from "/Game-Manager/db/queries.js";

const edit = document.querySelectorAll('#edit');
const names = document.querySelectorAll('#gName');
const name = document.querySelector('#gName');

const titles = document.querySelectorAll('.title');

for (const i of titles) {
  i.addEventListener('click', () => {
    console.log(i.textContent);
  })
}

const update = () => {
  
}

const getName = () => {
  
}