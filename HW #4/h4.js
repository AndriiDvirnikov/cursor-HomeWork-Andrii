
const students = ["Олександр", "Іван", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function printStudents (students){
    const arrBoy = [];
    const arrGirl = [];
    for (let i = 0; i < students.length;i++){
        const newArr = students[i].slice(-1);
        console.log('newArr', newArr);
        if(newArr === "а"){
            arrGirl.push (students[i]);
        } else{
            arrBoy.push (students[i]);
        }
    }
    console.log('arrBoy',arrBoy);
    console.log('arrGirl',arrGirl);

}
/* */

printStudents (students);

/*#1 Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];
const studentCouple = [ [students[0],students[2]],[students[1],students[3]],[students[4],students[5]] ];
console.log (studentCouple);
document.writeln(`studentCouple : ${studentCouple}`);



const studentsThemes = [ [students[0],students[2],themes.splice(0,1)],[students[1],students[3],themes.splice(0,1)], [students[4],students[5],themes.splice(0,1)]];

console.log (studentsThemes);
document.writeln(`</br>studentsThemes : ${studentsThemes}`);

for (let i=0; i<students.length;i++){
    const studentMark = [students[i],marks[i]];
    console.log (studentMark);
}

function randomMark (){
    const randomMark = Math.round((Math.random()* (5-1))+1);
    console.log(randomMark);
}randomMark();*/
