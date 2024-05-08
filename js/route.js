const defaultLocation = '#/weather?lat=37.55586&lon=126.9201'; //어메이징 농카이 위치

window.navigator.geolocation.getCurrentPosition((position) => {
//    console.log(position);
   const {latitude, longitude} = position.coords;
   console.log(latitude, longitude);
  });