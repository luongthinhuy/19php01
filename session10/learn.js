//for, while, do while
for (var i = 0; i < 10; i++) {
	document.write(i);
	document.write('<br>');
}
document.write('-------------------<br>');
var x = 5;
var y = 6;
x++; //++x
y--; //--y
document.write(x);
document.write('<br>');
document.write(y);
document.write('<br>');
var a = 5, b = 8;
var c;
c = ++a + ++b;
c = a++ + b++;
document.write('<br>');
document.write(c);
document.write('<br>');
document.write('-------------------<br>');
var i = 5;
while (i <10) {
	document.write(i);
	document.write('<br>');
	i++;
}
document.write('<br>');
document.write('-------------------<br>');
var i = 4;
do {
	document.write(i);
	document.write('<br>');
	i++;
} while (i < 10)
document.write('<br>');
document.write('-------------------<br>');
// cho mot so chay tu 1 den 15
//kiem tra xem so do co phai ngay trong tuan khong?
//neu co thi in ra: hom nay la thu x
for (var i = 1; i < 16; i++) {
	if ((i > 1) && (i < 8)){
		document.write('hom nay la thu ' +i);
		document.write('<br>');
	} else if (i == 8){
		document.write('hom nay la chu nhat');
		document.write('<br>');
	} else{
		document.write('day khong phai ngay trong tuan.');
		document.write('<br>');
	}
}
document.write('<br>');
document.write('Ham trong JavaScript<br>');
function myFunction() {
	var a = 5, b = 6;
	document.write(a + b);
}
document.write('<br>');
myFunction();

function sub(x, y) {
	document.write(x + y);
}
document.write('<br>');
sub(6, 9);
document.write('<br>');
sub(10,2);
document.write('<br>');
document.write('-------------------<br>');
//cho 1 day so n chay tu 0 den 10
//voi n la so nam kinh nghiem
//tinh luong thuc nhan voi
//luong co ban la 2.300.000
//so nam kinh nghiem <3 thi he so luong la 2
//so nam kinh nghiem <5 thi he so luong la 3
//so nam kinh nghiem >5 thi he so luong la 5
function luong(x, y) {
	return x*y;
	//document.write(x * y);
}
for (var i = 0; i <= 10; i++) {
	if (i < 3) {
		document.write('luong thuc nhan la '+luong(2300000, 2));
		document.write('<br>');
	} else if (i < 5) {
		document.write('luong thuc nhan la '+luong(2300000, 3));
		document.write('<br>');
	} else if (i == 5) {
		document.write('luong thuc nhan la '+luong(2300000, 4));
		document.write('<br>');
	} else {
		document.write('luong thuc nhan la '+luong(2300000, 5));
		document.write('<br>');
	}
}
document.write('---------<br>');





















