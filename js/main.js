import { eventOnElmts } from './app.js';
import {url, fetchData} from './api.js';
import * as module from './module.js';

// console.log(module.getDate(1633660800, 19800));

// const number = document.querySelectorAll('.current-weather .heading');
// function changeColor() {
//   number[0].style.color = 'red';
// }
// eventOnElmts(number, 'click', changeColor);

// 검색 화면 토글 기능
const searchView = document.querySelector('[data-search-view]'); // 속성 요소를 선택하는 방법
// console.log(searchView);
const searchTogglers = document.querySelectorAll('[data-search-toggler]'); // 화살과 돋보기 아이콘의 속성을 갖게 해서 동시 선택

function toggleSearch() {
  searchView.classList.toggle('active');
}

eventOnElmts(searchTogglers, 'click', toggleSearch);

// 검색어 입력 등 검색 기능
const searchField = document.querySelector('[data-search-field]');
const searchResult = document.querySelector('[data-search-result]')

let searchTimeout = null;
const searchTimeoutDuration = 500;


searchField.addEventListener('input', function() {
  if(!searchField.value) {
    searchField.classList.remove('searching');
    searchResult.innerHTML = '';
  } else {
    searchField.classList.add('searching');
  }

  if(searchField.value) {
    searchTimeout = setTimeout(() => {
      if(!searchField.value) return; // 글씨가 없을 때 기능 멈춤

      fetchData(url.geocode(searchField.value), function(location) {
        searchResult.innerHTML = '<ul class="view-list" data-search-list></ul>';


        /**
         * @type { Array } items : 검색 결과를 담을 배열
         */
        const items = [];


        for (let { name, lat, lon, country, state } of location) {
          // console.log('name:', name, 'lat:', lat, 'lon:', lon, 'country:', country, 'state:', state
          // );
          const searchItem = document.createElement('li');
          searchItem.classList.add('view-item');
          searchItem.innerHTML= `
          <span class="m-icon">location_on</span>
          <div>
            <p class="item-title">${name}</p>
            <p class="label-2">${state || ''}, ${country}</p>
          </div>
          <a href="#/weather?lat=${lat}&lon=${lon}" class="item-link has-state" data-search-toggler></a>
          `; 

          searchResult.querySelector('[data-search-list').appendChild(searchItem);


          items.push(searchItem.querySelector('[data-search-toggler]'))
        }

        eventOnElmts(items, 'click', function(){
          toggleSearch();
        })
      });

      searchField.classList.remove('searching');
    }, searchTimeoutDuration);
  }
});

