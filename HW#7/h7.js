const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


/* #1 Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна викликатись через call та працювати з даними через this */
function getMyTaxes (sallary) {
    const taxSalary = this.tax * sallary;
    return taxSalary;
}
console.log ('Tax',getMyTaxes.call (ukraine,2500));


/*#2 Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary). Функція повинна викликатись через call та працювати з даними через this*/

function getMiddleTaxes(country){
    const middleTax = this.tax * this.middleSalary;
    
    return middleTax
}
console.log ('middleTax:',getMiddleTaxes.call(ukraine));

/*#3 Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies). Функція повинна викликатись через call та працювати з даними через this */

function getTotalTaxes (country){
    const allTaxe = this.tax * this.middleSalary * this.vacancies;
    return allTaxe
}
console.log ('allTaxe:',getTotalTaxes.call(ukraine))

/*#4 Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary.
profit = salary - taxes; */

function getMySalary(country) {
    const minSalary = 1500;
    const maxSalary = 2000;
    const randomSalary = Math.floor(Math.random() * (maxSalary-minSalary))+minSalary;
    const taxes = Math.floor(this.tax * randomSalary)
    const profit = randomSalary - taxes
    setTimeout(() => { clearInterval(interval); console.log ('Stop')}, 10000);
    return {
        salary: randomSalary,
        taxes: taxes,
        profit: profit
    }
}

let interval = setInterval (function (){
    console.log ('Пройшло 5 секунд', getMySalary.call(ukraine))
},5000);





