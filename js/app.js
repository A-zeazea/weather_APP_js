import {url, fetchData} from './api.js'

/**
 * @param {NodeList} elmts - selected elements from HTML to ad events
 * @param {string} event - event type e.g 'click', 'mouseenter'...
 * @param {function} callback - callback function to be executed when event is triggered
 */

// elmts(string) : number, overcast를 한번에 받아줄 파라미터
// event(string) : click, mouseenter를 한번에 받아줄 파라미터
// callback(function) : function () {overcast.style.fontSize = '30px'; 이걸 받아줄 파라미터
export function eventOnElmts(elmts, event, callback) {
  for (const elmt of elmts) {
    elmt.addEventListener(event, callback);
  }
}

// console.log(url);