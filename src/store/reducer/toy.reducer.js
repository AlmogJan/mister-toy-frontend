export const SET_TOYS = "SET_TOYS";
export const REMOVE_TOY = "REMOVE_TOY";
export const ADD_TOY = "ADD_TOY";
export const UPDATE_TOY = "UPDATE_TOY";
export const SET_FILTER_BY = "SET_FILTER_BY";
export const SET_FILTER_BY_SORT = "SET_FILTER_BY_SORT";
export const SET_FILTER_BY_SEARCH = 'SET_FILTER_BY_SEARCH'
export const SET_FILTER_BY_INSTOCK = 'SET_FILTER_BY_INSTOCK'
export const SET_FILTER_BY_LABELS = "SET_FILTER_BY_LABELS"

const initialState = {
  toys: [],
  filterBy: { sort: { value: "default", direction: "asc" }, search: "", inStock: "all", labels: [] },
};

export function toyReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_TOYS:
      return { ...state, toys: [...action.toys] };
    case ADD_TOY:
      return { ...state, toys: [action.toy, ...state.toys] };
    case UPDATE_TOY:
      return {
        ...state,
        toys: state.toys.map((toy) =>
          toy.id === action.toy._id ? action.toy : toy
        ),
      };
    case REMOVE_TOY:
      return { ...state, toys: state.toys.filter((toy) => toy.id !== action.toyId) };
    case SET_FILTER_BY_SORT:
      return { ...state, filterBy: { ...state.filterBy, sort: action.sort } };
    case SET_FILTER_BY_SEARCH:
      return { ...state, filterBy: { ...state.filterBy, search: action.search } }
    case SET_FILTER_BY_INSTOCK:
      return { ...state, filterBy: { ...state.filterBy, inStock: action.inStock } }
    case SET_FILTER_BY_LABELS:
      return { ...state, filterBy: { ...state.filterBy, labels: action.labels } }
    default:
      return state;

  }
}
