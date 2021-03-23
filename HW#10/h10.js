/*Зробіть 25 квадратів розміру 50х50 пікселів кожен, зафарбовані у випадковий колір. Квадрати мають розташовуватись по 5 в ряд.
Щоб квадрати з'явились на сторінці, необхідно викликати функцію generateBlocks();*/

function randomColor (){
    let randomColor = Math.trunc(Math.random () * 1000);
    
    if (randomColor < 100){
        randomColor =randomColor * 10;
    }
    return '#'+randomColor;
}
function generateBlocks(){
    const block = document.getElementsByClassName('block');
    [...block].forEach (item =>{
        item.style.background = randomColor();
        item.style.width = '50px';
        item.style.height = '50px';
        item.style.margin = '5px';
        item.style.float ='left';
        item.style.border ='1px solid #000';
    })
    const holdBlock = document.getElementsByClassName('hold-block');
    [...holdBlock].forEach (item => {
    item.style.width = '325px';
})
}


/*Advanced зробіть так, щоб квадрати змінювали колір раз на секунду.
Щоб квадрати з'явились на сторінці та почали змінюватись, необхідно викликати функцію generateBlocksInterval(); Приклад виконаного ДЗ на відео  */
function generateBlocksInterval(){
  const interval = setInterval(generateBlocks,1000);
    setTimeout(() => { clearInterval(interval)}, 7000);
}

generateBlocks();
generateBlocksInterval();
