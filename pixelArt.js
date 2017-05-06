// console.log(document.getElementById('ONE').attributes);  NamedNodeMap {0: class, 1: id, length: 2}
// console.log(document.getElementsByClassName('one')); [div#ONE.one, ONE: div#ONE.one]
// console.log(document.querySelector('.one'));
(function() {
'use strict';
//window on load event is givng us the ability to wait for the all elements and files to be loaded before querying them
// called when all html elements are loaded
//net effect is that grabs nothing until all elements are loaded
//dom loaded after every JS change or
window.addEventListener('onload', function(){
    document.querySelector('.one').addEventListener("click", fire1);

    document.footer.addEventListener('click', assignColor);
});

//will not pick up class 'one' WHYYYYY?
// document.getElementsByClassName('one').addEventListener("onClick", fire1);
var thead = document.createElement('thead');
document.querySelector('.wrapper').append(thead);

//creates a custom table of a given size
function populateTable(cols, rows) {
  let row = document.createElement('tr');
  for (var i = 0; i < rows; i++) {
      thead.append(row);
      let tr = document.createElement('tr');
      for (var ii = 0; ii < cols; ii++) {
        row.append(tr);
  }

    }
function fire1() {
    document.getElementsByClassName(".one").style.backgroundColor = "blue";
    console.log('fire1 fired');
}
// might require document.footer?
//var selectedStyle = document.event.target.style;
//when you click in the footer pallete, assign a color from pallete to paint cell

function assignColor() {
  selectedStyle.backgroundColor = red;
}


var button = document.querySelectorAll('.button');
  for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('mousedown', function(event) {
    console.log(button[i].id, "event fired");
  });
}
}
})();
populateTable(5, 5);
