# С помощью цикла while вывести все простые числа в промежутке от 0 до 100

var a = 0;
var numbers = " ";
while(a<101) {
  if(a>5) { 
    if(a%2!=0 & a%3!=0 & a%5!=0) {
      numbers += (a + " ");
      a++;
    }
  }
  else if (a<=5 & (a==2 || a==3 || a==5)) {
    numbers += (a + " ");
    a++;
  }
  else {
    a++;
  }
}
alert(numbers);

Все виснет :(

# С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

# Товары в корзине хранятся в массиве. Задачи:
  a) Организовать такой массив для хранения товаров в корзине;
  b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

# *Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
  for(…){// здесь пусто}

# *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
