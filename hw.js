# Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. 
# Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию

var cels = prompt("Введите температуру в градусах по Цельсию");
var far = (9/5)*cels + 32;
alert("Это будет " + far + " градусов по Фаренгейту");

# Работа с переменными. Сделать обмен значений двух числовых переменных без использования третьей переменной 

var a = parseInt(prompt("введите a"));
var b = parseInt(prompt("введите b"));
a = a + b; 
/теперь в 'a' содержится их сумма
b = a - b;
/теперь в 'b' содержится 'a'
a = a - b;
/теперь из суммы мы вычитаем 'b' (которое теперь 'a') и получаем 'a'(но теперь уже 'b'). Мозг сломан.
alert(a);
alert(b);


# a) Объявить две переменные: admin и name. Записать в name строку «Василий»; b) Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»).

var name = "Василий";
var admin = name;
alert(admin);


# *Чему будет равно JS-выражение 1000 + "108"?
  
/  легко проверить через alert(1000 + "108")
  1000108
 
