//window.onload = loadPage();

(
  function() {
    'use strict';
    var currentColor;
    function createTable(xCols, xRows) {
      let wrapperDiv = document.getElementsByClassName('wrapper');
      var table = document.createElement('table');
      //Table Head
      //var thead = document.createElement('thead');
      //appends a table to wrapper
      wrapperDiv[0].append(table);
       //appends  a thead to tabletable.append(thead);
        // table.append(thead);
        // var tr = document.createElement('tr');
        // thead.append(tr);
        // //console.log(data[0],'data length', data.length);
        //
        // //appends x amount of columns to table
        // for (let i = 0; i < xCols; i++) {
        //   var th = document.createElement('th');
        //   tr.append(th);
        //   //console.log(headData[i]);
        //   //don't think i need to reassign values -use css to creat h & w
        //   //th.innerText = headData[i];
        // }

        var tbody = document.createElement('tbody');




        //handle table data minues tr's and tfoot
        table.append(tbody);
        for (let i = 0; i < xCols; i++) {
          var tr = document.createElement('tr');
          tbody.append(tr);
          for (let ii = 0; ii < xRows; ii++) {
            let tdata = document.createElement('td');
            //tbody.append(tr);   ----was different, doesn't seem to have effect on layout
            tr.append(tdata);
            //console.log(tableData[i][ii]);
            // tdata.setAttribute('innerText', some str)
            // tdata.innerText = tableData[i][ii]; // each inner loop
          }
        }
        //foot of the table - don't need you

      console.log(table);
        return table;

    }
createTable(30, 30);
//add eventlistener to each square
var tableDataList = document.getElementById('wrapper').getElementsByTagName('td');


var tableListen = document.querySelectorAll('.wrapper');
// for (var i = 0; i < tableListen.length; i++) {
//   tableListen[i].addEventListener('click', addColorToSquare);
//   console.log('table size', tableListen.length, 'child list');
// }

for (var i = 0; i < tableDataList.length; i++) {
  tableDataList[i].addEventListener('click', addColorToSquare);
}

//by clicking any square in a table the fn should assign the passed in color
function addColorToSquare(event) {
      event.target.style.backgroundColor = currentColor;
      console.log("you're clicking me");
}
// alt
//document.getElementsByClassName('button')addEventListener('click', addColorToSquare))
var currentColorBox = document.getElementById('currentColor')
currentColorBox.addEventListener('click', reassignColor);

function reassignColor(event) {
  event.style.backgroundColor = currentColor;
}

//puts eventlistener on each button element
 var colorButton = document.getElementsByClassName('button')
 for (var i = 0; i < colorButton.length; i++) {

   colorButton[i].addEventListener('click', pickupColor);
 }

// colorButton[i]

function pickupColor(event) {
  //debugger
  //change background color of th or td affected
  currentColor = window.getComputedStyle(event.target).getPropertyValue('background-color')

  document.getElementById('currentColor').style.backgroundColor = currentColor;

}

})()




//   var tr = document.createElement('tr');
//   tHead.append(tr);
//   function createRow(nRows, nCols) {
//
//     var th = document.createElement('th');
//     for (var i = 0; i < nCols; i++) {
//
//       var th
//       for (var i = 0; i < nRows; i++) {
//         nRows
//     }
//       nCols}
//
// }
