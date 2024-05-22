const api_key = '9e9ed82cf1e873767c4779c7423ac042';

export const url = {
  // 데이터를 요청하는 주소 = endpoint, url 객체로 설정
  currentWeather(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`;
  },

  geocode(loca) {
    return `https://api.openweathermap.org/geo/1.0/direct?q=${loca}&limit=5`;
  },

  forcast(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`;
  },

  airPollution(lat,lon) {
    return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}&units=metric`
  },
};

/**
 *
 * @param {string} url
 * @param {function} callback
 */

export const fetchData = function (url, callback) {
  fetch(`${url}&appid=${api_key}`)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.log(error));
};

// fetchData(urls.geocode('london'), function (locations) {
//   console.log(locations);
// });
// // 구조분해 할당
