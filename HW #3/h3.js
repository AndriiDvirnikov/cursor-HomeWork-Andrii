/*#1Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8 */

const ourNumber = [2,4,5,8];
function getMaxDigit(ourNumber) {
    
    let max = ourNumber[0];
    for (let i = 0; i< ourNumber.length; i++){
        const numbermax = ourNumber[i];
        if (numbermax > max){
            max = numbermax;
        }
    }
    console.log (max);
    return max;
}
getMaxDigit (ourNumber);



/*#2 Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл*/
const numberForPow = 3;
const pow = 4;
let helpnumber;
function PowFroANumber (numberForPow,pow){
    if (numberForPow === 1){
        console.log(numberForPow);
    }else {
        helpnumber = numberForPow;
    for (let i = 1 ; i < pow; i++){
        
        helpnumber = numberForPow*helpnumber;
    }
    console.log(`Степінь ${pow} числа ${numberForPow} - ${helpnumber}`);
    return helpnumber;
    }
}
PowFroANumber (numberForPow,pow);

/*#3 Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);  */
const name = ('євДОКієв');
const nameLowerCase = name.toLocaleLowerCase();
console.log(nameLowerCase);

function FirstLetterUpperCase (name){
    const firstLetter = nameLowerCase.charAt(0).toUpperCase()
    const removeFirstLetter =nameLowerCase.substr(1);
    const changedWord = firstLetter+removeFirstLetter;
    console.log(`Було ${name} -> стало ${changedWord}`);
    return changedWord;
}
FirstLetterUpperCase(name);


/*№4 Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. */
const salary = 1000;
let tax = 19.5 ;

function NetProfit (salery,tax){
const taxNum = tax/100;
const net_profit = salary * taxNum;
const salary_profit = salary - net_profit;
console.log(`Чистий прибуток ${salary_profit}`);
    return salary_profit;
}
NetProfit(salary,tax);

/*#6 Створити функцію, яка рахує скільки разів певна буква повторюється в слові*/
const word = 'Асталавіста';
const wordToLoowerCase = word.toLocaleLowerCase();
const letter = 'а';
const count = word.length;
let k =0;
function LetterRepeats (letter,word){
console.log( `Довжина слова ${wordToLoowerCase} : ${count}`);
for (let i=0;i<=count; i++){
    if (letter=== wordToLoowerCase.charAt(i)){
        k=k+1;
    }
}
 console.log(`Кількість повторень ${letter} : ${k}`);
}
LetterRepeats(letter,word);

/*#5 Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5*/
const numRange1 = 1;
const numRange2 = 50;
function RandomRange (numRange1, numRange2){
    if (numRange1>numRange2){
        [numRange1,numRange2]=[numRange2,numRange1]
    }
   const numberSub = numRange2-numRange1;
    const numberRandom = Math.floor(Math.random()*(numberSub+1));
    console.log (`рандом : ${numberRandom}`);
    return numberRandom;
}
RandomRange(numRange1,numRange2);

/*#8 Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам. */
let number;
let password;
function RandomPasword (number=8){
    console.log(`кількість цифер : ${number}`);
    let randomNumber = Math.random();
    console.log(randomNumber);
    for(let i = 0; i < number ; i++){
        randomNumber = randomNumber * 10;
    }
    
    password = Math.trunc(randomNumber);
    console.log(`Ваш пароль: ${password}`);
    return password;
}
RandomPasword(number);



/*#9 Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"*/
const wordcut = 'blablablal';
const lettercut = 'a';
console.log(`Наше слово ${wordcut}`)
const wordLength = wordcut.length;
let newstr
function DeleteLatters(lettercut,wordcut){
    const word = [...wordcut];
    for (let i = 0 ; i<=wordLength; i++){
        if (lettercut === word[i])
        word.splice(i, 1);
    }
    let newText = word.join('');
    console.log(`після видалення: ${newText}`);
    return newText;
}
DeleteLatters(lettercut,wordcut);

document.writeln(`#1 Створити функцію – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі ${ourNumber} : ${getMaxDigit (ourNumber)} </br>`);

document.writeln(`#2 Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow . Використовуйте цикл чсило -> ${numberForPow} степінь -> ${pow} :${PowFroANumber (numberForPow,pow)}</br>`);

document.writeln(`#3 Створити функцію, яка форматує ім'я, роблячи першу букву великою ${name} -> ${FirstLetterUpperCase(name)} </br>`);

document.writeln(`#4 Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати [${salary} : ${tax}%] : ${NetProfit(salary,tax)}</br>`)

document.writeln(`#5 Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) [${numRange1}:${numRange2} ] ${RandomRange(numRange1,numRange2)} </br>`);

document.writeln(`#8 Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам/ Пароль ${RandomPasword(number)}</br>`);

document.writeln(`#9 Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl" слово : ${wordcut} буква : ${lettercut} після:${DeleteLatters(lettercut,wordcut)}</br>`);
