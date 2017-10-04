var rows, columns;

function tablemake()
{
    
        table.id = "table";
		rows = prompt("Please enter the number of rows","");
		columns = prompt("Please enter the number of columns","");

		for(var j = 1; j <= rows; j++)
			{
				var tr = document.createElement("tr");
				for(var i = 1; i <= columns; i++)
				{
					var td = document.createElement("td");
					
					var rowcol = ""+j+","+i;
					td.setAttribute('id',rowcol);
                    td.onmousedown = function () {
                        if (this.className != "tdClass2") {
                            this.className = "tdClass2";
                        }
                        else {
                            this.removeAttribute("Class");
                        }
                    };
                    tr.appendChild(td);
					table.appendChild(tr);
				}
			}
 }
 
function increment1()
{
	 for(var m = 1; m <= rows; m++)
	 {
		 for(var n = 1; n <= columns; n++)
		 {
			 var nextCellID = m+","+n;
			 
			 var mUp = m-1;
			 var mDown = m+1;
			 var nLeft = n-1;
			 var nRight = n+1;
			 
			 var UpLeft = mUp+","+nLeft;
			 var Up = mUp+","+n;
			 var UpRight = mUp+","+nRight;
			 var Left = m+","+nLeft;
			 var Right = m+","+nRight;
			 var DownLeft = mDown+","+nLeft;
			 var Down = mDown + "," + n;
			 var DownRight = mDown+","+nRight;
			 
			 var onOff = 0;
			 
			 var nextCell = document.getElementById(nextCellID);
			 var nextCellUpLeft = document.getElementById(UpLeft);
			 var nextCellUp = document.getElementById(Up);
			 var nextCellUpRight = document.getElementById(UpLeft);
			 var nextCellLeft = document.getElementById(Left);
			 var nextCellRight = document.getElementById(Right);
			 var nextCellDownLeft = document.getElementById(DownLeft);
			 var nextCellDown = document.getElementById(Down);
			 var nextCellDownRight = document.getElementById(DownRight);
			 
			 if(mUp !=0 && nLeft !=0 && nextCellUpLeft.className=="tdClass2")
			 {
				 onOff = onOff+1;
			 }
			 if(mUp !=0 && nextCellUp.className=="tdClass2")
			 {
				 onOff = onOff+1;
			 }
			 if(mUp !=0 && nRight <=columns && nextCellUpRight.className=="tdClass2")
			 {
				 onOff = onOff+1;
			 }
			 if(nLeft !=0 && nextCellLeft.className=="tdClass2")
			 {
				 onOff = onOff+1;
			 }
			 if(nRight <=columns && nextCellRight.className=="tdClass2")
			 {
				 onOff = onOff+1;
			 }
			 if(mDown <=rows && nLeft !=0 && nextCellDownLeft.className=="tdClass2")
			 {
				 onOff = onOff+1;
			 }
			 if(mDown <=rows && nextCellDown.className=="tdClass2")
			 {
				 onOff = onOff+1;
			 }
			 if(mDown <=rows && nRight <=columns && nextCellDownRight.className=="tdClass2")
			 {
				 onOff = onOff+1;
			 }
			 
			 if(onOff == 2 || onOff == 3)
			 {
				 nextCell.className="tdClass2";
			 }
			 else
			 {
				 nextCell.removeAttribute("Class");
			 }
			 
		 }
	 }
 }
