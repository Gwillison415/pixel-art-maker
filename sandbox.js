
  function createTable(xCols, xRows) {
    let wrapperDiv = document.getElementsByClassName('wrapper');
    var table = document.createElement('table');
    //Table Head
    var thead = document.createElement('thead');
    //appends a table to wrapper
    wrapperDiv.append(table);
     //appends  a thead to tabletable.append(thead);
      table.append(thead);
      var tr = document.createElement('tr');
      thead.append(tr);
      //console.log(data[0],'data length', data.length);

      //appends x amount of columns to table
      for (let i = 0; i < xCols; i++) {
        var th = document.createElement('th');
        tr.append(th);
        //console.log(headData[i]);
        //don't think i need to reassign values -use css to creat h & w
        //th.innerText = headData[i];
      }

      var tbody = document.createElement('tbody');




      //handle table data minues tr's and tfoot
      table.append(tbody);
      for (let i = 0; i < xCols; i++) {
        var tr = document.createElement('tr');
        tbody.append(tr);
        for (let ii = 0; ii < xRows.length; ii++) {
          let tdata = document.createElement('td');
          //tbody.append(tr);   ----was different, doesn't seem to have effect on layout
          tr.append(tdata);
          //console.log(tableData[i][ii]);
          // tdata.setAttribute('innerText', some str)
          // tdata.innerText = tableData[i][ii]; // each inner loop
        }
      }
      //foot of the table - don't need you

    var tfooter = document.createElement('tfoot');
    table.append(tfooter);
    var tr = document.createElement('tr');
    tfooter.append(tr);
    //console.log(footerData);
    for (let column = 0; column < footerData.length; column++) {
      var td = document.createElement('td');
      tr.append(td);
      td.innerText = footerData[column];
    }
    console.log(table);
      return table;

  }

createTable(10, 5)
