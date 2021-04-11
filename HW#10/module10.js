const randomColor= function randomColor (){
    let randomColor = Math.trunc(Math.random () * 1000);
    
    if (randomColor < 100){
        randomColor =randomColor * 10;
    }
    return '#'+randomColor;
}
module.exports = {
    randomColor
}