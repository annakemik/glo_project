const title = prompt("Как называется ваш проект");
const screens = prompt("Какие типа экранов нужно разработать?");
const screenPrice = +prompt("Сколько будет стоить данная работа?");
const rollBack = 50;
const adaptive = confirm("Нужен ли адаптив на сайте?");
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?");

const fullPrice = screenPrice + servicePrice1 + servicePrice2;
const servicePercentPrice = Math.floor(fullPrice - rollBack);

switch (true) {
  case fullPrice >= 30000:
    console.log("Даем скидку в 10%");
    break;
  case fullPrice >= 15000 && fullPrice < 30000:
    console.log("Даем скидку в 5%");
    break;
  case fullPrice > 0 && fullPrice < 15000:
    console.log("Скидка не предусмотрена");
    break;
  default:
    console.log("Что-то пошло не так");
    break;
}

console.log(fullPrice);
console.log(servicePercentPrice);
