const changeNumber = function ChangeNumber (first_number,second_number){
    console.log ('N = ',first_number,'M = ',second_number)
    if (first_number > second_number) {
        [first_number, second_number] = [second_number, first_number];
        console.log('міняєм значення місцями N =', first_number, 'M = ',second_number);
    }else
    console.log(
        `Не міняєм значення місцями N = ${first_number}, M = ${second_number}`
    );
};

module.exports = {changeNumber}