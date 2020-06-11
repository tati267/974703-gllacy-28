
         ymaps.ready(init);
         var myMap,
             myPlacemark;
     
         function init() {     
             myMap = new ymaps.Map ("map", {
                 center: [59.93862734, 30.32282994],
                 zoom: 17
           }  );
            
             myPlacemark = new ymaps.Placemark([55.75399400, 37.62209300], {
                 hintContent: "Gllacy",
                 balloonContent: "г. Санкт-Петербург, ул. Большая Конюшенная 19/8"
           }  ),
     
             myMap.geoObjects.add(myPlacemark);
     
       }  