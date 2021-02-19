let n;
do{
  n = prompt("Введіть число N",);
    n = parseInt(n,10);
} while(isNaN(n));
console.log (n, typeof(n));

let m;
do{
  m = prompt("Введіть число M",);
    m = parseInt(m,10);
} while(isNaN(m));
console.log (m,typeof(m));

console.log (`Значення N = ${n}, Значення M ${m}`);
if (n > m) {
    let c = n;
    n=m;
    m=c;
}
console.log (`міняєм значення місцями N = ${n}, M = ${m}`);

let sum = 0;
if (confirm("пропускати парні?")){
    console.log("Пропускати парні");
    for (n ; n<=m; n++){
        if(n%2 === 1){
            sum +=n;
        }
    }
    console.log (`Пропускати парні сума: ${sum}`);
    document.writeln(`Пропускати парні сума: ${sum}`)
}else{
    for (n ; n<=m; n++){
            sum +=n;
        }
    console.log(`Сума чисел ${sum}`);
    document.writeln(`Сума чисел: ${sum}`)
}
