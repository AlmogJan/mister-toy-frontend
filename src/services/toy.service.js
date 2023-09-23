import { utilService } from "./util.service.js";
import { storageService } from "./async-storage.service.js";
import { labels } from "../consts.js";
import { localStorageService } from "./storage.service.js";
import { httpService } from "./http.service.js";
const TOY_KEY = "toyDB";
_createToys();

export const toyService = {
  query,
  get,
  remove,
  save,
  createToy,
  getEmptyToy,
};


function query() {
  return httpService.get(`toy`)
}

function get(toyId) {
  return httpService.get(`toy/${toyId}`)

}

function remove(toyId) {
  return httpService.delete(`toy/${toyId}`)
}

function save(toy, isEdit) {
  if (isEdit) {
    return httpService.put(`toy/${toy.id}`, toy);
  } else {
    return httpService.post(`toy`, toy);
  }
}

function getEmptyToy() {
  return {
    name: "",
    price: 0,
    labels: [],
    inStock: null,
  };
}

// function getDefaultFilter() {
//   return { filter: "" };
// }

function _createToys() {
  let toys = localStorageService.loadFromStorage(TOY_KEY);
  if (!toys || !toys.length) {
    toys = [];
    toys.push(createToy("Barbie", 100, [labels.doll], true, new Date() - 2000));
    toys.push(
      createToy(
        "Talking doll",
        200,
        [labels.batteryPowered, labels.baby, labels.doll],
        true, new Date() - 1000
      )
    );
    toys.push(
      createToy("BMX Bike", 200, [labels.outdoor, labels.onWheels], true)
    );
    localStorageService.saveToStorage(TOY_KEY, toys);
  }
}

function createToy(name, price, labels, inStock, createdAt = new Date()) {
  return {
    id: utilService.makeId(),
    name,
    price,
    labels,
    createdAt,
    inStock,
  };
}
