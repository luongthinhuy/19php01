var a;
/*
Quy tắc đặt tên:
- Có ý nghĩa
- Bằng chữ cái hoa hoặc thường, số và dấu gạch dưới
- Không bắt đầu bằng số
- Nên đặt bằng tiếng anh
- Theo quy tắc Camel
  + EX: UserName, myAge, getMyInfo
*/
//BT: đặt tên biến:
var UserName;
var Email;
var myPhone;
var Dob;
// Các phép toán: + - * /
var x = 6, y = 8;
document.write('Tổng 2 số x + y là: ');
document.write(x + y);
document.write('<br>');
document.write('Tổng 2 số x - y là: ');
document.write(x - y);
document.write('<br>');
document.write('Tổng 2 số x * y là: ');
document.write(x * y);
document.write('<br>');
document.write('Tổng 2 số x / y là: ');
document.write(x / y);
// Các phép toán: > < >= <= == !=
// Câu điều kiện
//if(dieukien){
	//thực hiện nếu đk đúng
//
document.write('<br>');
if (3 > 2) {
	document.write('số 3 lớn hơn số 2 nheiii');
}
//if(dieukien){
	//thực hiện nếu đk đúng
//}else{
	//thực hiện nếu đk sai
//}
document.write('<br>');
var x = 10, y = 19;
if (x > y) {
	document.write('số x lớn hơn nhe');
} else {
	document.write('số x nhỏ hơn nhe');
}
document.write('<br>');
var year = 1998;
if (year % 2 == 0) {
	document.write('bạn sinh năm chẵn');
} else {
	document.write('bạn sinh năm lẻ');
}
//if(dk1) {
	//thuc hien neu ddk1 dung;
//}elseif(dk2) {
	//thuc hien neu dk2 dung
//} else{
	//thuc hien neu dk1 va dk2 deu sai
//}
document.write('<br>');
var x = 7, y = 7;
if (x > y) {
	document.write('so x lon hon so y');
} else if (x < y) {
	document.write('so x nho hon so y');
} else {
	document.write('so x bang so y');
}
document.write('<br>');
//câu lệnh switch case
var x = 8;
switch (x) {
	case 2:
		document.write('hôm nay là thứ 2');
		break;
	case 3:
		document.write('hôm nay là thứ 3');
		break;
	case 4:
		document.write('hôm nay là thứ 4');
		break;
	case 5:
		document.write('hôm nay là thứ 5');
		break;
	case 6:
		document.write('hôm nay là thứ 6');
		break;
	case 7:
		document.write('hôm nay là thứ 7');
		break;
	case 8:
		document.write('hôm nay là Chủ nhật');
		break;
	default:
		document.write('đây k phải thứ trong tuần');
		break;
}
//
document.write('<br>');
var x = 3;
switch (x) {
	case 2:
	case 3:
	case 4:
	case 5:
	case 6:
	case 7:
		document.write('Hôm nay là thứ '+x);
		break;
	case 8:
	document.write('hôm nay là Chủ nhật');
		break;
	default:
		document.write('đây k phải thứ trong tuần');
		break;			
}
// cho trước 1 số, kiểm tra số đó có phải là
//tháng trong năm k? nếu phải cho biết số ngày trong tháng đó
//vd: 2->day là tháng trong năm, tháng 2 có 28 hoặc 29 ngày
//sd switch case de làm
//cho biết: 1, 3, 5, 7, 8, 10, 12 có 31 ngày
//tháng 4, 6, 9, 11 có 30 ngày
//tháng 2 có 28 haowjc 29 ngày 
document.write('<br>');
var a = 2,  y = 1998;
if ( 0 < a <= 12){
	document.write('Đây là 1 tháng trong năm');
} else {
	document.write('đây không phải là 1 tháng trong năm');
}
document.write('<br>');
switch (a) {
	case 1:
	case 3:
	case 5:
	case 7:
	case 8:
	case 10:
	case 12:
		document.write('Tháng ' +a+ 'có 31 ngày');
		break;
	case 4:
	case 6:
	case 9:
	case 11:
		document.write('Tháng ' +a+ 'có 30 ngày');
		break;
	case 2:
		if ((y % 4 == 0) && (y % 100 != 0)) {
			document.write('Tháng' +a+ 'có 29 ngày');
		} else {
			document.write('Tháng' +a+ 'có 28ngày');
		}
		break;
	default:
		document.write('đây k phải tháng trong năm');
		break;			
}