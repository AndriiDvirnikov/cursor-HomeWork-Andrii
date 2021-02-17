const price1 = 15.678;
const price2 = 123.965;
const price3 = 90.2345;

const money = 500;

/* МАКСИМАЛЬНА ЦІНА */
const max_price = Math.max(price1,price2,price3);
console.log(`Максимальна ціна = ${max_price} ;`);

/* МІНІМАЛЬНА ЦІНА */
const min_price = Math.min(price1,price2,price3);
console.log(`Мінімальна ціна = ${min_price};`);

/* СУМА ЦІН */
const sum_price = price1 + price2 + price3;
console.log(`Сума цін = ${sum_price} ;`);

/* СУМА БЕЗ КОПІЙОК */
const sum_trunk = Math.trunc(price1) + Math.trunc(price2) + Math.trunc(price3);
console.log(`Сума без копійок ${sum_trunk};`);


const math_floor =  Math.floor (price1);
console.log(`округлення до меншого = ${math_floor} ;`);

/* ОКРУГЛЕННЯ Math.ceil */
const math_ceil = Math.ceil(price1);
console.log(`округлення до більшого = ${math_ceil};`);

/* ОКРУГЛЕННЯ НАЙБЛИЖЧЕ*/
const math_round = Math.round(sum_trunk/100)*100;
console.log(`Сума товару округленадо найближчого = ${math_round};`);


const sum_price_odd = Math.round(sum_price)%2;
if (sum_price_odd === 0){
    console.log("число парне");
    } else {
        console.log("число не парне");
    }

/* РЕШТА */
const rest = 500 - sum_price;
console.log(`Решта = ${rest};`);

/* СЕРЕДНЄ ЗНАЧЕННЯ */
const mid_price = (price1 + price2 + price3)/3;
console.log(`Средня ціна = ${mid_price}`);

const mid_price_round = Math.round(mid_price*100)/100;
console.log(`Средня ціна округлена до другого знаку після коми = ${mid_price_round}`);

/* ЗНИЖКА */
const rNum = Math.random();
const rnum_round = Math.round(rNum*100);
console.log(`Знижка = ${rnum_round} %`);
const sale = (Math.round(rNum*100)/100)*sum_price;
const sale_round = (Math.round(sale*100))/100;
console.log(`Знижка в грн =${sale_round}`);

/* ЧИСТИЙ ПРИБУТОК ПІСЛЯ ЗНИЖКИ */
const profit = Math.round((sum_price/2)-sale);
console.log(`Чистий прибуток = ${profit}`);
