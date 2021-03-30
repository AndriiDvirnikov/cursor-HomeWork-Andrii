const btnInfo = document.querySelector('#getInfo')
btnInfo.addEventListener('click', function getEpisod (){
  fetch('https://swapi.dev/api/films/2')
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

const btnPlanets = document.querySelector('#planets')
btnPlanets.addEventListener('click', function getEPlanets (){     fetch('https://swapi.dev/api/planets')
    .then((response)=>{
        return response.json();
    })
    .then((planets)=>{
        const planetsInfo = planets.results;
        console.log (planets);
        
        for (let i =0; i<planetsInfo.length; i++){
            console.log (i,planetsInfo[i].name);
        }
        return planets.next
    })
    .then ((test)=>{
        fetch(test)
        .then((response)=>{
            return response.json();
        })
        .then((planets)=>{
                const planetsInfo = planets.results;
        console.log (planets);
        
        for (let i =0; i<planetsInfo.length; i++){
            console.log (i,planetsInfo[i].name);
        }
        return planets.next
        })
    })
})
