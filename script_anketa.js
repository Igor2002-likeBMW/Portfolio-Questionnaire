var firstName = prompt('Введите имя');
var SecondName = prompt('Введите Отчество');
var lastName = prompt ('Введите Фамилию');
var Age1 = prompt('Введите возраст');
var Age2 = parseInt(Age1);
var like = prompt ('Введите любимую марку авто');
var like2 = prompt ('Введите любимую модель авто');
var like3 = prompt ('Вам нравится BMW?');
var like4 = like3?"да":"нет";
alert("Ваше Имя:" + " " + firstName + "\n" +
"Ваше Отчество:" + " " + SecondName + "\n" + 
 "Ваша Фамилия:" + " " + "\n" +
 "Ваш возраст:" + " " + Age2 + "\n" +
 "Ваша любимая марка авто:" + " " + like + "\n" +
  "Ваша любимая модель:" + " " + like2 + "\n" + 
  "Вам нравится BMW?:" + " " + like3);