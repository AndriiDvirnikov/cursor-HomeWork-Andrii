/* #1 Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа. Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]*/
const length = 10;
const min = 1
const max = 25
function getRandomArray(length, min, max){
    const randomArray = [];
    
    for (let i = 0 ; i<length; i++){
        randomArray.push(Math.ceil(Math.random() * (25-1)+1));
    
    }
    
    console.log ('randomArray',randomArray)
    return randomArray;
}
const randomArray = getRandomArray(length, min, max)


/*#3 Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ */


function getAverage (randomArray) {
    let avarege = randomArray[0];
    for(let i=0;i<randomArray.length; i++){
        avarege = avarege + randomArray[i];
    }
    console.log ('avarege',avarege, '/',randomArray.length,'randomArray.length' )
    avarege = avarege / randomArray.length;
    console.log ('avarege',avarege)
    return avarege;
}
const avarege = getAverage (randomArray);


/* #5 Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції */
function filterEvenNumbers (randomArray){
    const notEvenArray = [];
    for (let i = 0; i<randomArray.length; i++){
        if (randomArray[i]%2 !=0){
           notEvenArray.push(randomArray[i]);
        }
        
    }
    console.log ('notEvenArray',notEvenArray)
    return notEvenArray;
}
const notEvenArray = filterEvenNumbers (randomArray);


/* #6 Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3 */
const newArray = [-5 , 2, 5, -7, 8, -9, -10];
 console.log ('newArray',newArray)
function countPositiveNumbers (newArray) {
    const pisitiveArray = [];
    for (let i = 0; i<newArray.length;i++){
        if(newArray[i] > 0 ){
            pisitiveArray.push(newArray[i]);
        }
    }
    console.log ('pisitiveArray',pisitiveArray)
}
const pisitiveArray = countPositiveNumbers (newArray);

/* #7 Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]*/
const arr = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
console.log ('arr',arr)

function getDividedByFive (arr){
    const newArr = [];
    for (let i=0 ; i<arr.length; i++){
        if(arr[i] % 5 === 0){
           newArr.push(arr[i])
           }
    }
    console.log('newArr',newArr);
}
getDividedByFive (arr);


/*#4 Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ */


function mediana (randomArray){
    randomArray.sort(function(a, b) {
      return a - b;
    })
    let halfleft;
    console.log ('randomArray',randomArray)
    halfleft = Math.ceil(randomArray.length/2)

    const halfright = halfleft;
    halfleft -=1;
    console.log('halfleft',halfleft,'halfright-1',halfright);
    if (randomArray.length%2 !== 0){
        const b = randomArray[half];
        console.log ('randomArray[half]',b);
    }else{
        const a = (randomArray[halfleft]+randomArray[halfright])/2;
        console.log (`Mediana : ${a}`);
    }
}
mediana(randomArray);









