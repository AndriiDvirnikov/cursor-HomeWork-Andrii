const btn1 = document.querySelector("#item1");
const btn2 = document.querySelector("#item2");
const btn3 = document.querySelector("#item3");

const allBtn = document.querySelectorAll (".btn")
function clearBtn (allBtn){
    for (let i=0; i<allBtn.length;i++){
        console.log (allBtn[i].classList.remove('btn-bord'));
    }
}


btn1.addEventListener('click',function (){
    clearBtn (allBtn);
    btn1.classList.add('btn-bord');
    const snd = new Audio("sounds/bass1.mp3");
    snd.play();
})

btn2.addEventListener('click', function (){
    clearBtn(allBtn);
    btn2.classList.add('btn-bord');
    const snd = new Audio("sounds/bass2.mp3");
    snd.play();
    
})

btn3.addEventListener('click', function (){
    clearBtn (allBtn);
    btn3.classList.add('btn-bord');
    const snd = new Audio("sounds/bass3.mp3");
    snd.play();
    
})

document.addEventListener('keypress', function(e){
    switch (e.code){
        case "KeyA":
            clearBtn(allBtn);
            btn1.classList.add('btn-bord');
            const snd = new Audio("sounds/bass1.mp3");
            snd.play();
            break;
            
        case "KeyS":
            clearBtn(allBtn);
            btn2.classList.add('btn-bord');
            const snd1 = new Audio("sounds/bass2.mp3");
            snd1.play();
            break;
        case "KeyD":
            clearBtn(allBtn);
            btn3.classList.add('btn-bord');
            const snd2 = new Audio("sounds/bass3.mp3");
            snd2.play();
            break;
    }
})





/*let test = document.getElementById("test");

// This handler will be executed only once when the cursor
// moves over the unordered list
test.addEventListener("mouseenter", function( event ) {
  // highlight the mouseenter target
  event.target.style.color = "purple";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

// This handler will be executed every time the cursor
// is moved over a different list item
test.addEventListener("mouseover", function( event ) {
  // highlight the mouseover target
  event.target.style.color = "orange";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);*/


