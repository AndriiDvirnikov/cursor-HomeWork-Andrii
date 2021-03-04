
const students = ["Олександр", "Іван", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
const maxmark = 5;
const minmark = 1;
console.log('students',students);
console.log('themes',themes);
console.log('marks',marks);

console.log(`/************************************/`)

function printStudents (students, themes, marks){
    const arrBoy = [];
    const arrGirl = [];
    const studentCoupl = [];
   
    
    for (let i = 0; i < students.length;i++){
        const newArr = students[i].slice(-1);
        if(newArr === "а"){
            arrGirl.push (students[i]);
        } else{
            arrBoy.push (students[i]);
        }
    }
    
    console.log('arrBoy',arrBoy);
    console.log('arrGirl',arrGirl);
    
    for (let i =0; i<arrBoy.length;i++){
    
        
        studentCoupl.push([arrBoy[i],arrGirl[i]]);
    }
    console.log(`studentCoupl`,studentCoupl)
    
  
    
    return studentCoupl;
}

const studentCoupl = printStudents (students,themes,marks);

function getStudentThemes (studentCoupl,themes){
    const studentsCouplThemes = [];
    for (let i =0; i<studentCoupl.length; i++){
        const pair1 = studentCoupl[i];
        const theme = themes[i];
        studentsCouplThemes.push([pair1.join(' i '),theme]);
        }
    console.log ('studentsCouplThemes',studentsCouplThemes)
    return studentsCouplThemes;
    
}

const studentsThemes = getStudentThemes (studentCoupl,themes);




function markStudents (students,marks){
    const markStedents = [];
    for (let i = 0 ; i < students.length;i++){
      markStedents.push([students[i],marks[i]]);
  }
    console.log(markStedents);
    return markStedents;

}
const MarksStudents = markStudents (students,marks);


function randomMark(maxmark,minmark){
    const newMark = Math.ceil((Math.random()*(maxmark-minmark))+1);
    return randomMark;
}
const markForThemes = randomMark(maxmark,minmark);


function newMarks (studentsThemes,markForThemes){
    const newMarks = []
    for(let i=0; i<studentsThemes.length;i++){
        const themes1 = studentsThemes[i];
        
        console.log('themes1',themes1);
      newMarks.push([themes1.join(', '),markForThemes]);
    }
    console.log('newMarks',newMarks);
    return newMarks;
}
const newRandomMark = newMarks(studentsThemes,maxmark,minmark)


document.writeln('</br>',studentCoupl,'</br>',studentsThemes,'</br>', newRandomMark);


