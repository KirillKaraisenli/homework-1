const age = 14;
console.log(age);

const name = "Kirill";
console.log(name);

const isStudent = false;
console.log(isStudent);

const myString =
  "Учитесь вчера, живите сегодня, надейтесь на завтра. Главное — не прекращать задавать вопросы. Альберт Эйнштейн";
console.log(myString);

let myNumber = 8;
myNumber += 10;
console.log(myNumber);

const myNull = null;
console.log(myNull);

let UserName = prompt("Введіть своє ім'я:");
alert(`Привіт, ${UserName}`);

let isConfirmed = confirm("Ви підтверджуєте дію?");
if (isConfirmed) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено!");
}

alert("Увага! Ця дія може бути небезпечною!")
let isAlerted = confirm("Ви впевнені, що хочете виконати цю дію?");
if (isAlerted) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено!");
}