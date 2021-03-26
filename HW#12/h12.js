

function getRandomChinese(length){
    return new Promise((resolve)=>{
        let letters = '';
        const timer = length * 50;
            setTimeout (()=>{
            let i = 0;
            while (i<length) {
                const date = Date.now ();
                const str = date.toString();
                const sub = str.substr(-5);
                const newLetter = String.fromCharCode(sub);
                const num = Number (sub)
                 i++;
                letters = letters+' '+ newLetter;
               
                resolve();
            }
                 console.log (letters)
        },timer);
    });
}

getRandomChinese(4).then(()=>{console.log ("Done")})

