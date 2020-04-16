var now = new Date();
var onejan = new Date(now.getFullYear(), 0, 1);
week = Math.ceil( (((now - onejan) / 86400000) + onejan.getDay() + 1) / 7 );

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('h1').innerText = week;
});
