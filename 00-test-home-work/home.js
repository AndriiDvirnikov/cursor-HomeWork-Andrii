let price1 = 15.678;
let price2 = 123.965;
let price3 = 90.2345;

let money = 500;

/* МАКСИМАЛЬНА ЦІНА */
console.log("Максимальна ціна = " +  Math.max(price1,price2,price3)+";");

/* МІНІМАЛЬНА ЦІНА */
console.log("Мінімальна ціна = " +  Math.min(price1,price2,price3)+";");

/* СУМА ЦІН */
let sum_price = price1 + price2 + price3;
console.log("Сума цін = " + sum_price + ";");

/* СУМА БЕЗ КОПІЙОК */
let sum_trunk = Math.trunc(price1) + Math.trunc(price2) + Math.trunc(price3);
console.log("Сума без копійок = " + sum_trunk + ";");

/* ОКРУГЛЕННЯ ДО БІЛЬШОГО Math.floor */
console.log("округлення до меншого = " + Math.floor (price1) + ";");

/* ОКРУГЛЕННЯ Math.ceil */
console.log("округлення до більшого = " + Math.ceil(price1) + ";");

/* ОКРУГЛЕННЯ НАЙБЛИЖЧЕ*/
console.log("Сума товару округленадо найближчого = " + (Math.round(sum_trunk/100)*100) );

/* ОКРУГЛЕННЯ Math.floor*/
console.log("якщо 0 то число парне/ якщо 1 число не парне = " + Math.floor(sum_price)%2);
/*
if ((Math.floor(sum_price)%2)===0){
    console.log("число парне");
    } else {
        console.log("число не парне");
    }
*/
/* РЕШТА */
let rest = 500 - sum_price;
console.log("Решта = " + rest);

/* СЕРЕДНЄ ЗНАЧЕННЯ */
let avarege = (price1 + price2 + price3)/2;
console.log("Средня ціна = "  +avarege);
console.log("Средня ціна округлена до другого знаку після коми = " + (Math.round(avarege*100))/100);

/* ЗНИЖКА */
let rNum = Math.random();
console.log("Знижка = " + Math.round(rNum*100) + " %");
let sale = (Math.round(rNum*100)/100)*sum_price;
sale = (Math.round(sale*100))/100;
console.log("Знижка в грн = " + sale);

/* ЧИСТИЙ ПРИБУТОК ПІСЛЯ ЗНИЖКИ */
let profit = (sum_price/2)-sale;
console.log("Чистий прибуток = " + Math.round( profit));
