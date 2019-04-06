function sumNumber() {
	var number1, number2;
	number1 = document.getElementById('number1').value;
	number2 = document.getElementById('number2').value;
	if(number1 == '' || number2 =='') {
		document.getElementById('result').innerHTML ='vui long nhap so cho tui voiiii';
	} else {
		document.getElementById('result').innerHTML = parseInt(number1) + parseInt(number2);
	//alert(number1);
	//alert(number2);
	//alert(number1 + number2);
	//alert(parseInt(number1) + parseInt(number2));
}
}
function Subtraction() {
	var number1, number2;
	number1 = document.getElementById('number1').value;
	number2 = document.getElementById('number2').value;
	if(number1 == '' || number2 =='') {
		document.getElementById('Subtraction').innerHTML ='vui long nhap so cho tui voiiii';
	} else {
		document.getElementById('Subtraction').innerHTML = parseInt(number1) - parseInt(number2);
}
}
function Multiplication() {
	var number1, number2;
	number1 = document.getElementById('number1').value;
	number2 = document.getElementById('number2').value;
	if(number1 == '' || number2 =='') {
		document.getElementById('Multiplication').innerHTML ='vui long nhap so cho tui voiiii';
	} else {
		document.getElementById('Multiplication').innerHTML = parseInt(number1) * parseInt(number2);
}
}
function Division() {
	var number1, number2;
	number1 = document.getElementById('number1').value;
	number2 = document.getElementById('number2').value;
	if(number1 == '' || number2 =='') {
		document.getElementById('Division').innerHTML ='vui long nhap so cho tui voiiii';
	} else {
	document.getElementById('Division').innerHTML = parseInt(number1) / parseInt(number2);
	}
}
