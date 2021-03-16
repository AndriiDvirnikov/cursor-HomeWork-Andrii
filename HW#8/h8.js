/*# У стдентів повинні бути наступні властивості: university, course, fullName, вони передаються при створенні студента(в конструктор).  */
const midAvarage = 4;
class Students {
    constructor (university,course,fullName, mark){
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = mark
        
    }
    recover (){
        this.marks = []
    }
    
    getInfo() {
           return console.log (`Студент ${this.course}-го курсу з ${this.university} м.Львів, ${this.fullName}`)
        }
    get getMarks (){
        return this.marks
    }
    set setMark (marks){
        if (this.marks !== null) {
            this.marks.push(marks);
         }return null
    }
    getAverageMark(){
        let avarege = 0;
        for (let i = 0 ; i< this.marks.length; i++){
            avarege = avarege + this.marks[i];
            
        }
        return avarege = (Math.round((avarege / this.marks.length)*10)/10);
    }
    dismiss(){
        delete this.university;
        delete this.course;
        delete this.fullName;
        this.marks = null;
    }

    recover() {
        if (this.marks === null){
            this.university = lastStudent.university;
            this.course = lastStudent.course;
            this.fullName = lastStudent.fullName;
            this.marks = lastStudent.marks
        }
        
    }
       
}
let lastStudent = {};
const firstStudent = new Students ('Політехніка', 3, 'Остап Бендер', [5,4,3,2,1,4]);
Object.assign (lastStudent, firstStudent);



/*#2 Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.  */

firstStudent.getInfo();

/*#3 Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5] */

console.log ('marks', firstStudent.getMarks);

/*#4 Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5] */
firstStudent.setMark = 3;
console.log ('marks', firstStudent.getMarks);
/*#5 Створіть метод отримання середнього балу this.getAverageMark() -> 4.6*/
console.log('avereg',firstStudent.getAverageMark());
/*#6 Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. (Ніяких помилок, просто повертається завжди null замість масиву оцінок) */
 const dismiss = firstStudent.dismiss();
console.log ('dismiss marks', firstStudent.getMarks);
console.log ('dismiss student',dismiss)
/*#7 Створіть метод this.recover, який дозволить поновити студента  */
/*console.log ('recover', firstStudent.recover());*/
firstStudent.recover();
console.log ('recover', firstStudent);
firstStudent.setMark = 2;
console.log ('new mark after recover', firstStudent.getMarks);


/*Створіть новий клас BudgetStudent, який повністю наслідує клас Student*/
class BudgetStudent extends Students{
    constructor (university,course,fullName, mark){
        super(university,course,fullName, mark);
        setTimeout (()=>{
            this.getScholarship
        },5000);
       
    }
get getScholarship(){
        if (avarege < midAvarage || this.marks=== null){
            return console.log ('Стипендії нема або Вас відраховано');
        }
        console.log ('Ви отримали 1400 грн. стипендії');
    }
}

const advansedStudent = new BudgetStudent ('Франка', 2, 'Остап Мамалига', [3,3,3,3,3,3])
console.log ('advanced',advansedStudent);
const avarege = advansedStudent.getAverageMark();
console.log ('avarege',avarege);
/*advansedStudent.getScholarship*/
