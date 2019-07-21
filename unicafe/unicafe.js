//API, All restaurants https://hyy-lounastyokalu-production.herokuapp.com/publicapi/restaurants
//API, Porthania https://hyy-lounastyokalu-production.herokuapp.com/publicapi/restaurant/39

//Basic jQuery example
$( document ).ready(function() {
$.ajax({
    url: 'https://hyy-lounastyokalu-production.herokuapp.com/publicapi/restaurant/39',
    type: 'GET',
    dataType: 'json', // added data type
    success: function(res) {
      for (var i = 0; i < 5; i++) {
        console.log(res.data[0].data[i].name);
      }
  }
});
});
