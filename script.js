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

const userCancel = function (userInput) {
  return userInput === null;
};
const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const asking = function () {
  title = prompt("Как называется ваш проект", "Rerf");
  screens = prompt("Какие типа экранов нужно разработать?", "fdsfm fdsf");
  while (!isNumber(screenPrice)) {
    screenPrice = prompt("Сколько будет стоить данная работа?");
    if (userCancel(screenPrice)) break;
    screenPrice = +screenPrice.trim();
  }
  adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function () {
  let total = 0;
  let sum1;
  let sum2;
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?");
      if (userCancel(service1)) return;
      while (!isNumber(sum1)) {
        sum1 = prompt("Сколько это будет стоить");
        if (userCancel(sum1)) return;
        sum1 = +sum1.trim();
      }
    } else if (i === 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен?");
      if (userCancel(service2)) return;
      while (!isNumber(sum2)) {
        sum2 = prompt("Сколько это будет стоить");
        if (userCancel(sum2)) return;
        sum2 = +sum2.trim();
      }
    }
    total = sum1 + sum2;
  }
  return total;
};

function getFullPrice(price1, price2) {
  return price1 + price2;
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
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrice(fullPrice, rollBack);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("All service prices (доп услуги) = ", allServicePrices);
console.log(getRollbackMessage(fullPrice));
console.log("Full price = ", fullPrice);
console.log(getTitle(title));
console.log("Service percent price = ", servicePercentPrice);
