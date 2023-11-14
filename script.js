const title = prompt("Как называется ваш проект");
const screens = prompt("Какие типа экранов нужно разработать?");
const screenPrice = +prompt("Сколько будет стоить данная работа?");
const rollBack = 50;
const adaptiveFromUser = prompt("Нужен ли адаптив на сайте?");
const adaptiveString = adaptiveFromUser.toLocaleLowerCase().trim();
let adaptive;

if (adaptiveString == "да") {
  adaptive = true;
} else if (adaptiveString == "нет") {
  adaptive = false;
} else {
  alert("Ответ на вопрос про адаптив должен быть - Да или Нет.");
  adaptive = false;
}

const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?");

const fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);

const servicePercentPrice = Math.floor(fullPrice - rollBack);
console.log(servicePercentPrice);

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
  case fullPrice < 0:
    console.log("Что-то пошло не так");
    break;
}
