"use strict";

const numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz?");

const personalNewsDB = {
  count: numberOfNews,
  news: {},
  actors: {},
  genres: [],
  private: false,
};

const a = prompt("Oxirgi ko'rgan yangiliklaringizdan biri?"),
      b = prompt("Unga qancha baho bergan bo'lardingiz");

personalNewsDB.news[a] = b;
console.log(personalNewsDB);