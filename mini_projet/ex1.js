
function gridGenerator(xAxis, yAxis) {
    let table = document.createElement("table");
    for (let i = 0; i < xAxis; i++) {
      let row = document.createElement("tr");
      for (let j = 0; j < yAxis; j++) {
        let cell = document.createElement("td");
        cell.style.backgroundColor = getRandomColor();
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
    document.body.appendChild(table);
    setInterval(changeColor, (Math.random() + 1) * 1000);
  }
  
  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function changeColor() {
    let cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = getRandomColor();
    }
  }
  
  
  gridGenerator(5, 5)