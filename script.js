"use strict";

const isNumber = function (num) {
  return !isNaN(parseFloat(num) && isFinite(num));
};

const userCancel = function (userInput) {
  return userInput === null;
};

const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  service1: "",
  service2: "",
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  rollBack: 50,

  asking: function () {
    appData.title = prompt("Как называется ваш проект");
    if (userCancel(appData.title)) return;
    appData.screens = prompt("Какие типа экранов нужно разработать?");
    if (userCancel(appData.screens)) return;
    do {
      appData.screenPrice = prompt("Сколько будет стоить данная работа?");
      if (userCancel(appData.screenPrice)) return;
      appData.screenPrice = +appData.screenPrice.trim();
    } while (!isNumber(appData.screenPrice));
    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  getAllServicePrices: function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
      let price = 0;
      if (i === 0) {
        appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
      } else if (i === 1) {
        appData.service2 = prompt("Какой дополнительный тип услуги нужен?");
      }

      if (userCancel(appData.service1) || userCancel(appData.service2)) return;

      do {
        price = prompt("Сколько это будет стоить");
        if (userCancel(price)) return;
      } while (!isNumber(price));

      sum += +price;
    }
    return sum;
  },

  getFullPrice: function () {
    return +appData.screenPrice + appData.allServicePrices;
  },

  getTitle: function () {
    return (
      appData.title.trim()[0].toUpperCase() +
      appData.title.trim().substr(1).toLowerCase()
    );
  },

  getServicePercentPrice: function () {
    return appData.fullPrice - appData.fullPrice * (appData.rollBack / 100);
  },

  getRollbackMessage: function () {
    if (appData.fullPrice >= 30000) {
      return "Даем скидку в 10%";
    } else if (appData.fullPrice >= 15000 && appData.fullPrice < 30000) {
      return "Даем скидку в 5%";
    } else if (appData.fullPrice > 0 && appData.fullPrice < 15000) {
      return "Скидка не предусмотрена";
    } else {
      return "Что-то пошло не так";
    }
  },

  start: function () {
    appData.asking();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.servicePercentPrice = appData.getServicePercentPrice();
    appData.title = appData.getTitle();
    appData.logger();
  },

  logger: function () {
    for (let key in appData) {
      console.log(key, " = ", appData[key]);
    }
  },
};

appData.start();
