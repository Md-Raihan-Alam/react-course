import React from "react";
import { data } from "../../../data";
import { useState, useReducer } from "react";
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./actions";
import { reducer } from "./reducer";
const defaultState = {
  people: data,
  isLoading: false,
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };
  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
    // setPeople([]);
  };
  const resetList = () => {
    dispatch({ type: RESET_LIST });
    // setPeople(data);
  };
  console.log(state);
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length > 0 ? (
        <>
          <button
            className="btn"
            style={{ marginTop: "2rem" }}
            onClick={clearList}
          >
            clear
          </button>
        </>
      ) : (
        <>
          <button
            className="btn"
            style={{ marginTop: "2rem" }}
            onClick={resetList}
          >
            reset
          </button>
        </>
      )}
    </div>
  );
};

export default ReducerBasics;
