var rows, columns;

function tablemake()
{
	
		document.write("<table border ='4'>");
		rows = prompt("Please enter the number of rows","");
		columns = prompt("Please enter the number of columns","");
		
		for(j = 1; j <= rows; j++)
			{
				document.write("<tr>");
				for(i = 1; i <= columns; i++)
				{
					document.write("<td></td>");
				}
				document.write("</tr>");
			}
		document.write("</table>");
 }
