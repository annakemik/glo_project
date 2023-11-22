"use strict";

const title = prompt("Как называется ваш проект");
const screens = prompt("Какие типа экранов нужно разработать?");
const screenPrice = +prompt("Сколько будет стоить данная работа?");
const rollBack = 50;
const adaptive = confirm("Нужен ли адаптив на сайте?");
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?");

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && price < 30000) {
    return "Даем скидку в 5%";
  } else if (price > 0 && price < 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что-то пошло не так!";
  }
};

const getAllServicePrices = function (price1, price2) {
  return price1 + price2;
};

function getFullPrice(price1, callback) {
  return price1 + callback;
}

const getTitle = function (name) {
  let title = name.trim().toLowerCase();
  title = title.replace(title.charAt(0), title.charAt(0).toUpperCase());
  return title;
};

const getServicePercentPrice = function (price, rollBack) {
  return price - price * (rollBack / 100);
};

const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
const fullPrice = getFullPrice(screenPrice, allServicePrices);
const servicePercentPrice = getServicePercentPrice(fullPrice, rollBack);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);
console.log(getRollbackMessage(fullPrice));
console.log(allServicePrices);
console.log(fullPrice);
console.log(getTitle(title));
console.log(servicePercentPrice);
