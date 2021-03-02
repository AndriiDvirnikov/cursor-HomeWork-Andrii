
const students = ["Олександр", "Іван", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
console.log('students',students);
console.log('themes',themes);
console.log('marks',marks);

console.log(`/************************************/`)

function printStudents (students, themes, marks){
    const arrBoy = [];
    const arrGirl = [];
    const studentCoupl = [];
    const studentsCouplThemes = [];
    const markStedents = [];
    const newMark = []
    
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
        newMark[i]=randomMark();
        
        studentCoupl.push([arrBoy[i],arrGirl[i],themes[i],newMark[i]]);
    }
    console.log(`studentCoupl`,studentCoupl)
    
  for (let i = 0 ; i < students.length;i++){
      markStedents.push([students[i],marks[i]]);
  }
    console.log(markStedents);
    
    return studentCoupl.join('</br> ');
}

function randomMark(){
    let randomMark = Math.ceil((Math.random()* (5-1))+1);
    return randomMark;
}



printStudents (students,themes,marks);

document.writeln('',printStudents (students,themes,marks));


