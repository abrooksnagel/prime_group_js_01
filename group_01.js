var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var brooks = ["Brooks", "4833", "66000", 2];

var employees = [atticus, jem, boo, scout, brooks];

var stiCalc = function(employee){
	var newArray = [];
	newArray[0] = employee[0];
	if(employee[3] <= 2){
		newArray[1] = 0;
		newArray[2] = employee[2];
		newArray[3] = 0;
	} else if (employee[3] == 3) {
		newArray[1] = 0.04;
	} else if (employee[3] == 4){
		newArray[1] = 0.06;
	} else if (employee[3] == 5){
		newArray[1] = 0.10;
	}
	if( employee[3] > 2) {
		if(employee[1].length == 4){
			newArray[1] += 0.05;
		}if(employee[2] > 65000){
			newArray[1] -= 0.01;
		}if(newArray[1] > 0.13){
			newArray[1] = 0.13;
		}
	}
	newArray[3] = Math.round(employee[2] * newArray[1]);
	newArray[2] = parseInt(employee[2]) + newArray[3];
	return newArray;
}
	
for(i = 0; i < employees.length; i++){
	console.log(stiCalc(employees[i]));
}