
const module3 = function PowFroANumber (numberForPow,pow){
    if (numberForPow === 1){
        return numberForPow;
    }else {
        helpnumber = numberForPow;
    for (let i = 1 ; i < pow; i++){

        helpnumber = numberForPow*helpnumber;
    }
    return helpnumber;
    }
}


module.exports = { module3 }