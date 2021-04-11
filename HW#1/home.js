const price_cat = 15.678;
const price_dog = 123.965;
const price_elephant = 90.2345;

const money = 500;
console.log (`Гроші ${money}`);

/* МАКСИМАЛЬНА ЦІНА */
const max_price = Math.max(price_cat,price_dog,price_elephant);
console.log(`Максимальна ціна = ${max_price} ;`);

/* МІНІМАЛЬНА ЦІНА */
const min_price = Math.min(price_cat,price_dog,price_elephant);
console.log(`Мінімальна ціна = ${min_price};`);

/* СУМА ЦІН */
const sum_price = price_cat + price_dog + price_elephant;
console.log(`Сума цін = ${sum_price} ;`);

/* СУМА БЕЗ КОПІЙОК */
const sum_trunk = Math.trunc(price_cat) + Math.trunc(price_dog) + Math.trunc(price_elephant);
const math_floor = Math.floor(sum_trunk);
console.log(`Сума без копійок округлена до меншого ${math_floor};`);


/* ОКРУГЛЕННЯ НАЙБЛИЖЧЕ*/
const math_round = Math.round(sum_price/100)*100;
console.log(`Сума товару округленадо найближчих сотень = ${math_round};`);


const odd = math_floor % 2;
console.log(`Число є ${odd? "непарним" : "парним"}`);


/* РЕШТА */
const rest = money - sum_price;
console.log(`Решта = ${rest};`);

/* СЕРЕДНЄ ЗНАЧЕННЯ */
const mid_price = (price_cat + price_dog + price_elephant)/3;
console.log(`Средня ціна = ${mid_price}`);

const mid_price_round = Math.round(mid_price*100)/100;
console.log(`Средня ціна округлена до другого знаку після коми = ${mid_price_round}`);



/* ЗНИЖКА */
const rNum = Math.random();
const rnum_round = Math.round(rNum*100);
console.log(`Знижка = ${rnum_round} %`);
const sale = (Math.round(rNum*100)/100)*sum_price;
const sale_round = (Math.round(sale*100))/100;
console.log(`Знижка в грн = ${sale_round}`);

/* ЧИСТИЙ ПРИБУТОК ПІСЛЯ ЗНИЖКИ */
const profit = Math.round((sum_price/2)-sale);
console.log(`Чистий прибуток = ${profit}`);

document.writeln (`Гроші ${money};</br>
Максимальна ціна = ${max_price};</br>
Мінімальна ціна = ${min_price};</br>
Сума цін = ${sum_price};</br>
Сума без копійок округлена до меншого  ${math_floor};</br>
Сума товару округлена до найближчих сотень = ${math_round};</br>
Число є ${odd? "непарним" : "парним"}
Решта = ${rest};<br/>
Средня ціна = ${mid_price};<br/>
Знижка = ${rnum_round} %;<br>
Знижка в грн = ${sale_round};<br/>
Чистий прибуток = ${profit}`);




