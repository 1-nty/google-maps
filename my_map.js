function myMap(){
  
  var mapCanvas = document.getElementById("map");
  
  var mapOptions = {
    center: new google.maps.LatLng(51.5,-0.2),
    zoom: 10
    mapTypeControl: true,
    mapTypeControlOptions:{
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      mapTypeIds: ['roadmap','hybrid','satellite','terrain']
    }
  };
  
  var map = new google.maps.Map(mapCanvas, mapOptions)
}

