import { toyService } from "../../services/toy.service.js";
import { SET_FILTER_BY_INSTOCK, SET_FILTER_BY_SEARCH, SET_FILTER_BY_SORT, SET_TOYS, SET_FILTER_BY_LABELS } from "../reducer/toy.reducer.js";
import { REMOVE_TOY } from "../reducer/toy.reducer.js";
import { UPDATE_TOY } from "../reducer/toy.reducer.js";
import { ADD_TOY } from "../reducer/toy.reducer.js";
import { store } from "../store.js";

export function loadToys() {
  return toyService
    .query()
    .then((toys) => {
      store.dispatch({
        type: SET_TOYS,
        toys,
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

export function removeToy(toyId) {
  return toyService
    .remove(toyId)
    .then(() => {
      store.dispatch({
        type: REMOVE_TOY,
        toyId,
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

export function updateToy(toy) {
  return toyService
    .save(toy, true)
    .then((toy) => {
      store.dispatch({
        type: UPDATE_TOY,
        toy,
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

export function addToy(toy) {
  return toyService
    .save(toy, false)
    .then((toy) => {
      store.dispatch({
        type: ADD_TOY,
        toy,
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

export function setFilterBySort(sort) {
  store.dispatch({
    type: SET_FILTER_BY_SORT,
    sort
  })
}

export function setFilterBySearch(search) {
  store.dispatch({
    type: SET_FILTER_BY_SEARCH,
    search
  })
}

export function setFilterByInStock(inStock) {
  store.dispatch({
    type: SET_FILTER_BY_INSTOCK,
    inStock
  })
}
export function setFilterByLabels(labels) {
  store.dispatch({
    type: SET_FILTER_BY_LABELS,
    labels
  })
  console.log(labels);
}