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
							this.innerHTML=".";
                        }
                        else {
                            this.removeAttribute("Class");
							this.innerHTML="";
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
	for(var m = 1; m < rows; m++)
	{
		for(var n = 1; n <= columns; n++)
		{
			  nextCellID = m+","+n;
			 
			  mUp = m-1;
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
			  nextCellUpRight = document.getElementById(UpLeft);
			  nextCellLeft = document.getElementById(Left);
			  nextCellRight = document.getElementById(Right);
			  nextCellDownLeft = document.getElementById(DownLeft);
			  nextCellDown = document.getElementById(Down);
			  nextCellDownRight = document.getElementById(DownRight);
			 
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

