"use strict";
const rollBack = 50;

let title;
let screens;
let screenPrice;
let adaptive;
let service1;
let service2;
let allServicePrices;
let fullPrice;
let servicePercentPrice;

const isNumber = function (num) {
  return !isNaN(parseFloat(num) && isFinite(num));
};
const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const asking = function () {
  title = prompt("Как называется ваш проект");
  screens = prompt("Какие типа экранов нужно разработать?");
  while (!isNumber(screenPrice)) {
    screenPrice = +prompt("Сколько будет стоить данная работа?");
  }
  adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function () {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?");
    } else if (i === 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен?");
    }
    sum += +prompt("Сколько это будет стоить");
  }
  return sum;
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

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && price < 30000) {
    return "Даем скидку в 5%";
  } else if (price > 0 && price < 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что-то пошло не так";
  }
};

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(
  screenPrice,
  getAllServicePrices(servicePrice1, servicePrice2)
);
servicePercentPrice = getServicePercentPrice(fullPrice, rollBack);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(allServicePrices);
console.log(getRollbackMessage(fullPrice));
console.log(allServicePrices);
console.log(fullPrice);
console.log(getTitle(title));
console.log(servicePercentPrice);
