import { eventOnElmts } from './app.js';

// const number = document.querySelectorAll('.current-weather .heading');
// function changeColor() {
//   number[0].style.color = 'red';
// }
// eventOnElmts(number, 'click', changeColor);

const searchView = document.querySelector('[data-search-view]'); // 속성 요소를 선택하는 방법
// console.log(searchView);
const searchTogglers = document.querySelectorAll('[data-search-toggler]'); // 화살과 돋보기 아이콘의 속성을 갖게 해서 동시 선택

function toggleSearch() {
  searchView.classList.toggle('active');
}

eventOnElmts(searchTogglers, 'click', toggleSearch);
