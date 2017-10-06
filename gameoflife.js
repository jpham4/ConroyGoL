
var rows, columns, liveCellTotal = 0;
	grid = new Array();
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
                        liveCellTotal++;
                        console.log(i);
                        console.log(j);
                        grid[i][j] = true;
                        //alert(i,", ", j);
						//this.innerHTML=".";
                    }
                    else {
                    	this.removeAttribute("Class");
                    	liveCellTotal--;
                    	//console.log("this works!");
						//this.innerHTML="";
					}
                };
                tr.appendChild(td);
				table.appendChild(tr);
			}
		}
 }
 
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
			 
 function increment1()
{
	console.log("increment1 is being called!");
	for(var m = 1; m <= rows; m++)
	{
		for(var n = 1; n <= columns; n++)
		{
			  nextCellID = m + "," + n;
			 
			  mUp = m - 1;
			  mDown = m+1;
			  nLeft = n-1;
			  nRight = n+1;
			 
			  UpLeft = mUp+","+nLeft;
			  Up = mUp+","+n;
			  UpRight = mUp+","+nRight;
			  Left = m+","+nLeft;
			  Right = m+","+nRight;
			  DownLeft = mDown+","+nLeft;
			  Down = mDown + "," + n;
			  DownRight = mDown+","+nRight;
			 
			  onOff = 0;
			 
			  nextCell = document.getElementById(nextCellID);
			  nextCellUpLeft = document.getElementById(UpLeft);
			  nextCellUp = document.getElementById(Up);
			  nextCellUpRight = document.getElementById(UpRight);
			  nextCellLeft = document.getElementById(Left);
			  nextCellRight = document.getElementById(Right);
			  nextCellDownLeft = document.getElementById(DownLeft);
			  nextCellDown = document.getElementById(Down);
			  nextCellDownRight = document.getElementById(DownRight);
			 
			 if(mUp !=0 && nLeft !=0)
			 {
				 if(nextCellUpLeft.className=="tdClass2")
				 {onOff = onOff+1;}
			 }
			 if(mUp !=0)
			 {
				 if(nextCellUp.className=="tdClass2")
				 {onOff = onOff+1;}
			 }
			 if(mUp !=0 && nRight <=columns)
			 {
				 if(nextCellUpRight.className=="tdClass2")
				 {onOff = onOff+1;}
			 }
			 if(nLeft !=0)
			 {
				 if(nextCellLeft.className=="tdClass2")
				 {onOff = onOff+1;}
			 }
			 if(nRight <=columns)
			 {
				 if(nextCellRight.className=="tdClass2")
				 {onOff = onOff+1;}
			 }
			 if(mDown <=rows && nLeft !=0)
			 {
				 if(nextCellDownLeft.className=="tdClass2")
				 {onOff = onOff+1;}
			 }
			 if(mDown <=rows)
			 {
				 if(nextCellDown.className=="tdClass2")
				 {onOff = onOff+1;}
			 }
			 if(mDown <=rows && nRight <=columns)
			 {
				 if(nextCellDownRight.className=="tdClass2")
				 {onOff = onOff+1;}
			 }
			 
			 if(onOff == 2 || onOff == 3)
			 {
				 nextCell.innerHTML=".";
			 }
			 else
			 {
				 nextCell.innerHTML="";
			 }
			 
		}
	}
	for(var o = 1; o <= rows; o++)
	{
		for(var p = 1; p <= columns; p++)
		{
			nextCellID=o+","+p;
			if(nextCell.innerHTML=".")
			{	
				nextCell.className="tdClass2";
				nextCell.innerHTML="";
			}
			else
			{
				nextCell.removeAttribute("Class");
				nextCell.innerHTML="";
			}
		}
	}
 }

function increment23()
{
	for(var i=0; i<23;i++)
	{
		increment1();
	}
}
