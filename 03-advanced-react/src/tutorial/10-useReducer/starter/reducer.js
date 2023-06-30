import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./actions";
import { data } from "../../../data";
export const reducer = (state, action) => {
  console.log(action);
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  } else if (action.type === RESET_LIST) {
    return { ...state, people: data };
  } else if (action.type === REMOVE_ITEM) {
    const { id } = action.payload;
    let newPeople = state.people.filter((person) => person.id !== id);
    return { ...state, people: newPeople };
  } else {
    return { ...state };
    // throw new Error(`no matching "${action.type}" - action.type `);
  }
};
