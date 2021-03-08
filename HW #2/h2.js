let first_number;
do {
  first_number = prompt("Введіть число N");
  first_number = parseInt(first_number, 10);
} while (isNaN(first_number));
console.log(first_number, typeof first_number);

let second_number;
do {
  second_number = prompt("Введіть число M");
  second_number = parseInt(second_number, 10);
} while (isNaN(second_number));

console.log(second_number, typeof second_number);
console.log(`Значення N = ${first_number}, Значення M ${second_number}`);

/* перевірка на більшість */
if (first_number > second_number) {
  [first_number, second_number] = [second_number, first_number];
  console.log(
    `міняєм значення місцями N = ${first_number}, M = ${second_number}`
  );
}
console.log(
  `міняєм значення місцями N = ${second_number}, M = ${first_number}`
);
let sum = 0;
/* Питання пропуску парних */
const skip = confirm("пропускати парні?");
if (skip === true) {
  console.log("Пропускати парні");
  for (let i = first_number; i <= second_number; i++) {
    if (i % 2 === 0) {
      continue;
    }
    sum = sum + i;
  }
  console.log(`Пропускати парні сума: ${sum}`);
  document.writeln(`Пропускати парні сума: ${sum}`);
} else {
  for (let i = first_number; i <= second_number; i++) {
    sum = sum + i;
  }
  console.log(`Сума чисел ${sum}`);
  document.writeln(`Сума чисел: ${sum}`);
}
