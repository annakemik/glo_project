"use strict";

const isNumber = function (num) {
  return !isNaN(parseFloat(num) && isFinite(num));
};

const isString = function (word) {
  if (!isNumber(word)) return true;
  return false;
};

const userCancel = function (userInput) {
  return userInput === null;
};

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  services: {},
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  rollBack: 50,

  asking: function () {
    do {
      appData.title = prompt("Как называется ваш проект");
      if (userCancel(appData.title)) return;
    } while (!isString(appData.title));

    for (let i = 0; i < 2; i++) {
      let name;
      do {
        name = prompt("Какие типа экранов нужно разработать?");
        if (userCancel(name)) return;
      } while (!isString(name));

      let price = 0;
      do {
        price = +prompt("Сколько будет стоить данная работа?");
        if (userCancel(price)) return;
      } while (!isNumber(price));

      appData.screens.push({ id: i, name: name, price: price });
    }

    appData.screenPrice = appData.screens.reduce(function (sum, screen) {
      return sum + screen.price;
    }, 0);

    for (let i = 1; i < 3; i++) {
      //изменила i на один, чтобы добавить уникальный номер (начиная с первого номера) к каждой услуге в обьекте services
      let name;
      do {
        name = prompt("Какой дополнительный тип услуги нужен?");
        if (userCancel(name)) return;
      } while (!isString(name));

      let price = 0;
      if (userCancel(appData.service1) || userCancel(appData.service2)) return;

      do {
        price = prompt("Сколько это будет стоить");
        if (userCancel(price)) return;
      } while (!isNumber(price));

      appData.services[i + ") " + name] = +price;
    }

    //appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  getAllServicePrices: function () {
    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },

  getFullPrice: function () {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
  },

  getTitle: function () {
    appData.title =
      appData.title.trim()[0].toUpperCase() +
      appData.title.trim().substr(1).toLowerCase();
  },

  getServicePercentPrice: function () {
    appData.servicePercentPrice =
      appData.fullPrice - appData.fullPrice * (appData.rollBack / 100);
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
    appData.getAllServicePrices();
    appData.getFullPrice();
    appData.getServicePercentPrice();
    appData.getTitle();
    appData.logger();
  },

  logger: function () {
    console.log("Title: " + appData.title);
    console.log("Screen price: " + appData.screenPrice);
    console.log("All prices: " + appData.allServicePrices);
    console.log("Full price: " + appData.fullPrice);
    console.log("Percent price: " + appData.servicePercentPrice);
    console.log("Services: ", appData.services);
    console.log("Screens: ", appData.screens);
  },
};

appData.start();
