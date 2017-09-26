var result = document.getElementById("score");
var selection = document.getElementById("selectPlayer"); 
var table = document.getElementById("card");
var playername = document.getElementById("name"); 
var ponesub1=0,ptwosub1=0,pthreesub1=0,pfoursub1=0;
var ponesub2=0,ptwosub2=0,pthreesub2=0,pfoursub2=0;
var ponetot, ptwotot, pthreetot, pfourtot;


function playern(){
	
	
	var nplayers = document.getElementById("numberPlayer");	
	
	if (selection.length<=4)
	{
		if (selection.length <= Number (nplayers.value))
		{
			//adding the name to the drop down list
			selection[selection.length] = new Option(playername.value);
			//adding the name to the table
			var tr = document.getElementsByTagName("tr");
			for (var i =1; i<tr.length; i++){
				if(table.rows[i].cells[0].innerHTML==""){
					table.rows[i].cells[0].innerHTML= playername.value;
					break;
				}		
			}
		}
		else
			alert("No more players can be added");
	}
	else
		alert("Maximum players reach");	
}


function add(){
		result.value = Number(result.value) + 1;
}

function less(){
	if (Number(result.value)<=0)
		alert("No negative numbers allow");
	else
		result.value = Number(result.value)- 1;
}

function save(){
	
	
	var Number, col, row,i,j;
	var hole = document.getElementById("selectHole"),
		holeresult = document.getElementById("score"),
		td = table.getElementsByTagName("td"),
		tr = table.getElementsByTagName("tr");
	
	for (i =1; i<td.length; i++){
		if(table.rows[0].cells[i].innerHTML==hole.value){
			col = i
			break;
		}		
	}
	for (j =1; j<tr.length; j++){
		if(table.rows[j].cells[0].innerHTML == selection.value){
			row = j;
			break;
		}		
	}
		
	if ((hole.value== 3 || hole.value == 4) && holeresult.value>7)
			alert("The max score for hole "+hole.value+" is 7");
	else{
		if (hole.value== 5 && holeresult.value>8)
			alert("The max score for hole "+hole.value+" is 8");
		else
		{
			table.rows[row].cells[col].innerHTML= score.value;
			if(hole.value <= 9){
				if (row == 1){
					ponesub1 = ponesub1 + parseFloat(score.value)
					table.rows[row].cells[10].innerHTML = ponesub1;
				}
				if (row == 2){
					ptwosub1 = ptwosub1 + parseFloat(score.value)
					table.rows[row].cells[10].innerHTML = ptwosub1;
				}
				if (row == 3){
					pthreesub1 = pthreesub1 + parseFloat(score.value)
					table.rows[row].cells[10].innerHTML = pthreesub1;
				}
				if (row == 4){
					pfoursub1 = pfoursub1 + parseFloat(score.value)
					table.rows[row].cells[10].innerHTML = pfoursub1;
				}	
			}
			if(hole.value > 9){
				if (row == 1){
					ponesub2 = ponesub2 + parseFloat(score.value)
					table.rows[row].cells[20].innerHTML= ponesub2;
				}
				if (row == 2){
					ptwosub2 = ptwosub2 + parseFloat(score.value)
					table.rows[row].cells[20].innerHTML= ptwosub2;
				}
				if (row == 3){
					pthreesub2 = pthreesub2 + parseFloat(score.value)
					table.rows[row].cells[20].innerHTML = pthreesub3;
				}
				if (row == 4){
					pfoursub2 = pfoursub2 + parseFloat(score.value)
					table.rows[row].cells[20].innerHTML= pfoursub4;
				}
			}
			if(hole.value <= 18){
				if (row==1){
					ponetot= ponesub1 + ponesub2;
					table.rows[row].cells[21].innerHTML= ponetot;
				}
				if (row==2){
					ptwotot= ptwosub1 + ptwosub2;
					table.rows[row].cells[21].innerHTML= ptwotot;
				}
				if (row==3){
					pthreetot= pthreesub1 + pthreesub2
					table.rows[row].cells[21].innerHTML= pthreetot;
				}
				if (row==4){
					pfourtot= pfoursub1 + pfoursub2
					table.rows[row].cells[21].innerHTML= pfourtot;
				}
			}	
		}
	}		
}