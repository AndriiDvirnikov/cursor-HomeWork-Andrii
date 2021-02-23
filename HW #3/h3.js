/*#3 Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);  */
const name = ('євДОКієв');
const nameLowerCase = name.toLocaleLowerCase();
console.log(name);

function FirstLetterUpperCase (name){
    const firstLetter = name.charAt(0).toUpperCase()
    const removeFirstLetter =name.substr(1);
    console.log(`Було ${name} -> стало ${firstLetter+removeFirstLetter}`);
}
FirstLetterUpperCase(name);


/*№4 Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. */
const salary = 1000;
let tax = 19.5 ;

function NetProfit (salery,tax){
const taxNum = tax/100;
const net_profit = salary * taxNum;
console.log(`Чистий прибуток ${salary-net_profit}`);
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
}
RandomPasword(7);



/*Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"*/
const wordcut = 'blablablal';
const lettercut = 'a';
let newWord;
let newstr
function DeleteLatters(lettercut,wordcut){
    console.log(wordcut);
    wordcut = wordcut.toLowerCase
    
    let wordLentgh = wordcut.length;
    console.log(wordLentgh);
    for(i = 0; i<=wordLentgh;i++){
        if (lettercut === wordcut.charAt(i)){
             console.log('succses')
        }
    
    }
   
}
DeleteLatters(lettercut,wordcut);
