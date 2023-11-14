const title = "Glo Project";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 500;
const rollback = 10;
const fullPrice = 1500;
const adaptive = true;

console.log(typeof title, typeof fullPrice, typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log("Стоимость разработки сайта " + fullPrice + " рублей");

const screensArray = screens.toLocaleLowerCase().split(" ");
console.log(screensArray);

console.log(
  "Процент отката посреднику за работу " + fullPrice * (rollback / 100)
);
