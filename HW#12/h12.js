
const element = document.querySelector ('#letters');
const creatElement = document.createElement("div");
function getRandomChinese(length){
    return new Promise((resolve)=>{
        let letters = '';
        const timer = length;
            setTimeout (()=>{
            let i = 0;
           
                const date = Date.now ();
                console.log (date,'date')
                const str = date.toString();
                const sub = str.substr(-5);
                const newLetter = String.fromCharCode(sub);
                const num = Number (sub);
               
                 i++;
                letters = letters+' '+ newLetter;
                const creatElement = document.createElement("div"); element.appendChild(creatElement).innerHTML=letters;
                
                console.log (letters)
                return resolve();
                
        },200);
    });
}


getRandomChinese(1).then(()=>{
    return getRandomChinese(2)
}).then (()=>{
     return getRandomChinese(3)
}).then (()=>{
     return getRandomChinese(4)
})
