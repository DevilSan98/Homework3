let color = prompt("Введите цвет","");
switch (color){
    case "red": document.write("<div style='background-color: red;'>красный</div>");
    case "black": document.write("<div style='background-color: black; color: white;'>черный</div>");
                break;
    case "blue": document.write("<div style='background-color: blue;'>синий</div>");
    case "green": document.write("<div style='background-color: green;'>зеленый</div>");
                break;
    default: document.write("<div style='background-color: gray;'>Я не понял</div>");
}

let color = prompt("Введите цвет","");
if (color == "red" || color == "black"){
    alert(document.write("<div style='background-color: black; color: white;'>черный</div>"))
} else if (color == "blue" || color == "green"){
    alert(document.write("<div style='background-color: green;'>зеленый</div>"))
} 
else {
    alert(document.write("<div style='background-color: gray;'>Я не понял</div>"));
}



var age1;
var result;

age1 = prompt("Сколько вам лет")
if (age1 >=10 || age1<=30){
    alert("Вы молод как бык в свои"+age1)
} else if(age1 === null || age1 === false) {
    alert("Кажеться вы отменили действие")
}
else{
    alert("Ничего непонял,повтори")
}

var A1;
A1 = confirm("Шоппинг??");
if(A1 == true){
    alert("Давай деньги")
}else if(A1 == false){ 
    alert("ты - бяка")
}

var Fio;

Fio = prompt("Ваше имя")+ prompt("Ваше Фамилия")+prompt("Ваше Отчество")
alert("Дратуте"+ Fio)


var Fio1;
var Fio2;
var Fio3;
var FioF;

Fio1 = prompt("Ваше имя")
Fio2 = prompt("Ваше Фамилия")
Fio3 = prompt("Ваше Отчество")
FioF = Fio1 + Fio2 +Fio3

alert(FioF)

if (Fio1 == null || Fio1 == false){
    alert("Иван")
}
if(Fio2 == null || Fio2 == false){
    alert("Иванов")
} 
if (Fio3 == null || Fio3 == false){
    alert("Иванович")
}
