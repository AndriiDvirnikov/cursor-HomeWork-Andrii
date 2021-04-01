

const btnInfo = document.querySelector('#getInfo')
btnInfo.addEventListener('click', function(){
    const snd = new Audio("sound/marsh.mp3");
    snd.play();
  let film = 'https://swapi.dev/api/films/2/';
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
              /*console.log(data2)
              console.log(arr[i])*/
              
              /*console.log ('name: ',data2.name,'/ birth day: ',data2.birth_year,'gender: ', data2.gender);
              */
              str = 'name: '+data2.name+' / birth day: '+data2.birth_year+' / gender: '+data2.gender
              
              const text = document.querySelector('#block');
              const newElem = document.createElement("div");
              const addImg = document.createElement("img");
              addImg.className = 'personImg'
              addImg.src = 'img/'+i+'.jpg'
              newElem.className = 'person'
              newElem.innerHTML = str;
              text.appendChild(newElem).appendChild(addImg);
              
          })

        }
      
       })
  
   })

/*const btnPlanets = document.querySelector('#planets')
btnPlanets.addEventListener('click', function getEPlanets (){
    fetch('https://swapi.dev/api/planets')
    .then((response)=>{
        return response.json();
    })
    .then((planets)=>{
        const planetsInfo = planets.results;
        console.log (planets);
      
        for (let i =0; i<planetsInfo.length; i++){
            const text = document.querySelector('#plan');
            const newElem = document.createElement("div");
            newElem.className = 'planets';
            newElem.innerHTML = planetsInfo[i].name;
            text.appendChild(newElem);
            
            console.log (planetsInfo[i].name);
        }
        const nextPage = planets.next
        return nextPage
    })
    .then((nextPage)=>{
            const nextPlanets = document.querySelector('#next');
            nextPlanets.addEventListener ('click',()=>{
                console.log (nextPage)
                    /*nextP (nextPage)*/
                   
                    /*fetch(nextPage)
                    .then((response)=>{
                        return response.json();
                    })
                    .then((next)=>{
                        nextP (next.next)
                        const num = document.querySelectorAll('.planets')
                        num.forEach(element => element.innerHTML='');
                        const nextPlanets = next.results;
                        const arr = [...num];

                        for (let i=0; i< nextPlanets.length; i++){
                            console.log (nextPlanets[i].name);
                            num[i].innerHTML = nextPlanets[i].name;
                        }


                    })
                   

            })
        
    })
    
})*/
let numPage = 1;
const max = 6
const btnPlanets = document.querySelector('#planets')
btnPlanets.addEventListener('click', getPlanets)
function getPlanets(){
    getPagePlanets(numPage)
}

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
      
            for (let i =0; i<planetsInfo.length; i++){
                const text = document.querySelector('#plan');
                const newElem = document.createElement("div");
                newElem.className = 'planets';
                newElem.innerHTML = planetsInfo[i].name;
                text.appendChild(newElem);
                console.log (planetsInfo[i].name);
        }
         
         })
     
     
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

fetch('https://swapi.dev/api/planets/1/?format=wookiee')
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log (data);
    })
