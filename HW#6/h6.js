const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];
console.log ('Students', students)


/*#1 Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента. Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл  */

function getSubjects(students,index){
        const keys = Object.keys(students[index-1].subjects);
        console.log ('keys',keys);
    for (let i =0 ; i< keys.length;i++){
        
        const keysforletter = keys[i];
        const firstLetter = keysforletter[0].toUpperCase();
        const cutLetter = keysforletter.slice(1);
        keys[i] = (`${firstLetter}${cutLetter}`).replace('_',' ');
    }
    return keys;
}
console.log ('Name subject: ',getSubjects (students,1));

console.log ('****************************************************************')
/*#2 Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях :) */

function getAverageMark (students,index){
    let avarege = 0;
    let ave = 0;
    let newaverage = 0;
    const subjects = Object.values(students[index-1].subjects);
    console.log ('subjects',subjects);
    for (let i = 0 ; i<subjects.length;i++){
        const submarks = subjects[i];
       
        let sum = 0;
        for (let i=0; i<submarks.length;i++){
            sum = sum+submarks[i];
        }
        ave = sum/submarks.length;
        avarege = (avarege + ave);
        
        newaverage = (Math.round((avarege/subjects.length)*100)/100);
        
   }
    return newaverage;
}
 console.log ('avarege ',getAverageMark (students,1))
console.log ('****************************************************************')

/*#3 Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання). ПОвинна бути виведена інформація: курс, ім'я, середня оцінка. */

function getStudentInfo(students,index){
    const arr = Object.values(students[index]);
    console.log('arr',arr);
    const name =  arr[0];
    const course = arr[1];
    const average = getAverageMark (students,index)
    return {
        name: name,
        course: course,
        average: average,
    }
}
console.log (getStudentInfo(students,1));

console.log ('****************************************************************')
/* #4 Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку. */

function getStudentsNames(students){

    
}
getStudentsNames(students);


/*#6 Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень. */
function calculateWordLetters(word) {
    let obj = {}
    console.log (word);
    const letters = [...word];
    let k = 0;
    
    console.log (letters);
    for (let c=0; c< letters.length;c++){
        let counter = 0;
        k = letters[c];
        for (let i = 0 ; i<letters.length; i++){
            if (k === letters[i]){
                counter = counter+1;
            }
        }
        obj[letters[c]] = counter;
    }
    return obj;
}

console.log (calculateWordLetters('абракадабра'))
