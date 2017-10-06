
var rows, columns;
	grid = new Array(); 
	var runner;
function makeTable() {
    table.id = "table";
	rows = prompt("Please enter the number of rows","");
	columns = prompt("Please enter the number of columns","");

	for(let i = 0; i < rows; i++) {
			var tr = document.createElement("tr");
			grid[i] = new Array();
			console.log(grid[i]);
			for(let j = 0; j < columns; j++)
			{
				var td = document.createElement("td");
				grid[i][j] = false;
				//console.log(i);
                //console.log(j);
				var rowcol = "" + i + ", " + j;
				td.setAttribute('id',rowcol);
                td.onmousedown = function() {
                	
                    if (this.className != "tdClass2") {
                        this.className = "tdClass2";
                        console.log(i);
                        console.log(j);
                        grid[i][j] = true;
                        //liveList.push(grid[i][j]);
                        //displayLiveList();
                        //var x = i;
                        //var y = j;
                        //displayCoordinates();
                        //alert(i,", ", j);
						//this.innerHTML=".";
                    }
                    else {
                    	this.removeAttribute("Class");
                    	grid[i][j] = false;
                    	//liveList.pop(grid[i][j]);
                    	//console.log("this works!");
						//this.innerHTML="";
					}
                };
                tr.appendChild(td);
				table.appendChild(tr);
			}
		}
 }

function start()
 {
	runner = setInterval(function(){ increment1() },500);
 }
 
 function stop()
 {
	clearInterval(runner);
 }

function increment1() {
	let newGrid = new Array();
	//console.log(currentGrid.toString()); // explain this to me again later
	//console.log(grid.length);
	for(let i = 0; i < grid.length; i++) {
		newGrid[i] = new Array();
		for(let j = 0; j < grid.length; j++) {
			newGrid[i][j] = grid[i][j];
		}
	}
	for(let i = 0; i < grid.length; i++) {
		for(let j = 0; j < grid.length; j++) {
			var liveCellTotal = 0;
			if (i != 0 && j != 0) { // top left of current cell
				if (grid[i-1][j-1] == true) liveCellTotal++;
			}
			if (i != 0) { // above current cell
				if (grid[i-1][j] == true) liveCellTotal++;
			}
			if (i != 0 && j != grid.length - 1) { // top right of current cell
				if (grid[i-1][j+1] == true) liveCellTotal++;
			}
			if (j != 0) { // left of current cell
				if (grid[i][j-1] == true) liveCellTotal++;
			}
			if (j != grid.length - 1) { // right of current cell
				if (grid[i][j+1] == true) liveCellTotal++;
			}
			if (i != grid.length - 1 && j != 0) { // bottom left of current cell
				if (grid[i+1][j-1] == true) liveCellTotal++;
			}
			if (i != grid.length - 1) { // below of current cell
				if (grid[i+1][j] == true) liveCellTotal++;
			}
			if (i != grid.length - 1 && j != grid.length - 1) { // bottom right of current cell
				if (grid[i+1][j+1] == true) liveCellTotal++;
			}
			if (liveCellTotal == 3) {
				newGrid[i][j] = true;
				document.getElementById(i + ", " + j).className = "tdClass2";
			}
			if (liveCellTotal < 2 || liveCellTotal > 3) {
				newGrid[i][j] = false;
				document.getElementById(i + ", " + j).removeAttribute("Class");
			}
		}
	}
	for(let i = 0; i < grid.length; i++) {
		for(let j = 0; j < grid.length; j++) {
			grid[i][j] = newGrid[i][j];
		}
	}
	grid = newGrid;
}
