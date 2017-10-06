
var rows, columns;
	grid = new Array();
	//liveList = new Array();
// var	i, j;
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

 /*function displayLiveList(x, y) {
 	console.log(liveList);
 	//this.grid[i] = x;
 	//this.grid[j] = y;
 	//console.log(x);
 	//console.log(y);
 }*/
 
var nextCellID;
 
 var mUp;
 var mDown;
 var nLeft;
 var nRight;

 var UpLeft;
 var Up;
 var UpRight;
 var Left;
 var Right;
 var DownLeft;
 var Down;
 var DownRight;
 
 var onOff;
 
 var nextCell;
 var nextCellUpLeft;
 var nextCellUp;
 var nextCellUpRight;
 var nextCellLeft;
 var nextCellRight;
 var nextCellDownLeft;
 var nextCellDown;
 var nextCellDownRight;

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


// topleft	if (row!=0 || column!=0 ) check [row# - 1][column# - 1];      //make sure position is not on upper or left bounds
// top		if (row!=0 ) check [row# - 1][column#];     //make sure position is not on upper bound
// topright	if (row!=0 || column!= columns-1(which is 2) ) check [row# - 1][column# + 1];     //make sure position is not on upper or right bounds
// left		if (column !=0) check [row#][column# - 1]    //make sure position is not on left bound
// right		if (column!= columns-1(which is 2)) check [row#][column# + 1]     //make sure position is not on right bound
// bottomleft	if (row!= rows-1(which is 2) || column != 0)  check [row# + 1][column# - 1]      //make sure position is not on bottom or left bounds
// bottom		if (row!= rows-1(which is 2))  check [row# + 1][column#]    //make sure position is not on bottom bound
// bottomright	if (row!= rows-1(which is 2) || column!= columns-1(which is 2)) check check [row# + 1][column# + 1]  //make sure position is not on bottom or right bounds
 }
			 
//  function increment1()
// {
// 	console.log("increment1 is being called!");
// 	for(var m = 1; m <= rows; m++)
// 	{
// 		for(var n = 1; n <= columns; n++)
// 		{
// 			  nextCellID = m + "," + n;
			 
// 			  mUp = m - 1;
// 			  mDown = m+1;
// 			  nLeft = n-1;
// 			  nRight = n+1;
			 
// 			  UpLeft = mUp+","+nLeft;
// 			  Up = mUp+","+n;
// 			  UpRight = mUp+","+nRight;
// 			  Left = m+","+nLeft;
// 			  Right = m+","+nRight;
// 			  DownLeft = mDown+","+nLeft;
// 			  Down = mDown + "," + n;
// 			  DownRight = mDown+","+nRight;
			 
// 			  onOff = 0;
			 
// 			  nextCell = document.getElementById(nextCellID);
// 			  nextCellUpLeft = document.getElementById(UpLeft);
// 			  nextCellUp = document.getElementById(Up);
// 			  nextCellUpRight = document.getElementById(UpRight);
// 			  nextCellLeft = document.getElementById(Left);
// 			  nextCellRight = document.getElementById(Right);
// 			  nextCellDownLeft = document.getElementById(DownLeft);
// 			  nextCellDown = document.getElementById(Down);
// 			  nextCellDownRight = document.getElementById(DownRight);
			 
// 			 if(mUp !=0 && nLeft !=0)
// 			 {
// 				 if(nextCellUpLeft.className=="tdClass2")
// 				 {onOff = onOff+1;}
// 			 }
// 			 if(mUp !=0)
// 			 {
// 				 if(nextCellUp.className=="tdClass2")
// 				 {onOff = onOff+1;}
// 			 }
// 			 if(mUp !=0 && nRight <=columns)
// 			 {
// 				 if(nextCellUpRight.className=="tdClass2")
// 				 {onOff = onOff+1;}
// 			 }
// 			 if(nLeft !=0)
// 			 {
// 				 if(nextCellLeft.className=="tdClass2")
// 				 {onOff = onOff+1;}
// 			 }
// 			 if(nRight <=columns)
// 			 {
// 				 if(nextCellRight.className=="tdClass2")
// 				 {onOff = onOff+1;}
// 			 }
// 			 if(mDown <=rows && nLeft !=0)
// 			 {
// 				 if(nextCellDownLeft.className=="tdClass2")
// 				 {onOff = onOff+1;}
// 			 }
// 			 if(mDown <=rows)
// 			 {
// 				 if(nextCellDown.className=="tdClass2")
// 				 {onOff = onOff+1;}
// 			 }
// 			 if(mDown <=rows && nRight <=columns)
// 			 {
// 				 if(nextCellDownRight.className=="tdClass2")
// 				 {onOff = onOff+1;}
// 			 }
			 
// 			 if(onOff == 2 || onOff == 3)
// 			 {
// 				 nextCell.innerHTML=".";
// 			 }
// 			 else
// 			 {
// 				 nextCell.innerHTML="";
// 			 }
			 
// 		}
// 	}
// 	for(var o = 1; o <= rows; o++)
// 	{
// 		for(var p = 1; p <= columns; p++)
// 		{
// 			nextCellID=o+","+p;
// 			if(nextCell.innerHTML=".")
// 			{	
// 				nextCell.className="tdClass2";
// 				nextCell.innerHTML="";
// 			}
// 			else
// 			{
// 				nextCell.removeAttribute("Class");
// 				nextCell.innerHTML="";
// 			}
// 		}
// 	}
//  }
