import { createStore } from "redux";

const initialState = {
  post: 0,
  name: "Ali",
  age: 13,
};

function reducer(state = initialState, action) {
  if (action.type === "post/increase") {
    return { ...state, post: state.post + 1 };
  } else if (action.type === "post/decrease") {
    return { ...state, post: state.post - 1 };
  } else if (action.type === "post/increaseBy") {
    return { ...state, post: state.post + action.payload };
  } else if (action.type === "post/decreaseBy") {
    return { ...state, post: state.post - action.payload };
  }
  return state;
}

const store = createStore(reducer);
console.log(store);

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch({ type: "post/increase" });
store.dispatch({ type: "post/decrease" });
store.dispatch({ type: "post/increaseBy", payload: 5 });
store.dispatch({ type: "post/decreaseBy", payload: 3 });
