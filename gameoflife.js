
function tablemake()
{
    var rows, columns;
        table.id = "table";
		rows = prompt("Please enter the number of rows","");
		columns = prompt("Please enter the number of columns","");

		for(var j = 1; j <= rows; j++)
			{
				var tr = document.createElement("tr");
				for(var i = 1; i <= columns; i++)
				{
					var td = document.createElement("td");
					td.class = "tdClass1";

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

 function Grid(grid,arr)
 {
     for(var i=0; i < grid.childNodes.length; ++i)
     {
         for(var j=0; j < grid.childNodes[i].childNodes.length; ++j)
         {
             grid.childNodes[i].childNodes[j].className = arr[i][j] ? 'tdClass2':'tdClass1';
         }
     }
 }

 function arrayMake(grid)
 {
     var array = [];
     for(var i=0; i<grid.childNodes.length; ++i)
     {
         var array2 = [];
         for(var j=0; j<grid.childNodes[i].childNodes.length; ++j)
         {
             array2[j] = modGrid(grid.childNodes[i].childNodes[j].className);
         }
         array[i] = array2;
     }
 }


