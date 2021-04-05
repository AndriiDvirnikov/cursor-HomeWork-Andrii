
console.log('document.height',document.body.clientHeight)

const btnInfo = document.querySelector('#getInfo')
btnInfo.addEventListener('click', function(){
    const snd = new Audio("sound/marsh.mp3");
    snd.play();
    removeElemets ('.person');
    removeElemets ('.planets');
    clearHihgt ('#plan');
  const blockHight = document.querySelector('#block')
  blockHight.style.height = '520px'
  let film = 'http://swapi.dev/api/films/2';
  fetch(film)
    .then((response)=>{
    return response.json();
    })
    .then((data)=>{
     
      const arr = data.characters;
          
        for (let i = 0 ; i< arr.length; i++){
          
          fetch(arr[i])
          .then((response)=>{
                return response.json();
          })
          .then((data2)=>{
             
              str = 'name: '+data2.name+' / birth day: '+data2.birth_year+' / gender: '+data2.gender
              
              const text = document.querySelector('#block');
              const newElem = document.createElement("div");
              const addImg = document.createElement("img");
              const addParag = document.createElement("div");
              addImg.className = 'personImg'
              addImg.src = 'img/'+i+'.jpg'
              newElem.className = 'person'
              addParag.innerHTML = str;
              text.appendChild(newElem).appendChild(addImg)
              newElem.appendChild(addParag);
          })

        }
      
       })
  
   })

 function getPagePlanets(numPage){
  
     let page = 'https://swapi.dev/api/planets/?page='+ numPage;
     console.log (page)
     fetch(page)
        .then((response)=>{
            return response.json();
        })
         .then((planets)=>{
            const planetsInfo = planets.results;
            console.log (planets);
            const text = document.querySelector('#plan');
            for (let i =0; i<planetsInfo.length; i++){
            
                const newElem = document.createElement("div");
                newElem.className = 'planets';
                text.style.height = '520px'
                newElem.innerHTML = planetsInfo[i].name;
                text.appendChild(newElem);
                console.log (planetsInfo[i].name);
        }
         zommBlock(text);
         
         })
     
     
    }

let numPage = 1;
const max = 6
const btnPlanets = document.querySelector('#planets')
btnPlanets.addEventListener('click', getPlanets)
function getPlanets(){
    removeElemets ('.person');
    removeElemets ('.planets');
    clearHihgt ('#block');
    getPagePlanets(numPage)
    
}

const nextPlanets = document.querySelector('#next');
nextPlanets.addEventListener ('click',function(){
    numPage++;
    
    const num = document.querySelectorAll('.planets')
    num.forEach(element => element.remove());
    if (numPage > max)  numPage = 1;
    getPagePlanets (numPage);
})


const infoInput = document.querySelector ('#getFilm');
infoInput.addEventListener ('click', function(){
     removeElemets ('.film');
   const filmPage = document.getElementById("myinput").value;
   getFilmById (filmPage);
})
let id = 1;
function getFilmById (id){
    let filmPage = 'https://swapi.dev/api/films/'+id+'/';
     fetch(filmPage)
         .then((response)=>{
          return response.json();
        })
        .then ((film)=>{
        const filmByValue = document.querySelector('#filmByValue');
        const newElem = document.createElement("div");
        newElem.className = 'film';
        newElem.innerHTML = 'film #: '+id+' / title: '+film.title + ' / release  / date: ' + film.release_date + ' / producer: '+ film.producer;
        filmByValue.appendChild (newElem);
        })
   
}


function removeElemets (elements){
    const element = document.querySelectorAll(elements)
    element.forEach (elem=> elem.remove ());
}
function clearHihgt (element){
    const clearHight = document.querySelector (element);
    clearHight.style.height = 0;
}


function zommBlock (element){
      element.style.transform = 'scale(2)';
}



