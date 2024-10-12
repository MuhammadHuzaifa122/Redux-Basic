import { createStore } from "redux";

const initialState = {
  post: 0,
  name: "Ali",
  age: 13,
};

const INCREASE = "post/increase";
const DECREASE = "post/decrease";
const INCREASE_BY = "post/inreaseBy";
const DECREASE_BY = "post/decreaseBy";

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return { ...state, post: state.post + 1 };
    case DECREASE:
      return { ...state, post: state.post - 1 };
    case INCREASE_BY:
      return { ...state, post: state.post + action.payload };
    case DECREASE_BY:
      return { ...state, post: state.post - action.payload };

    default:
      return state;
  }
}

const store = createStore(reducer);
console.log(store);

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch({ type: INCREASE });
store.dispatch({ type: DECREASE });
store.dispatch({ type: INCREASE_BY, payload: 5 });
store.dispatch({ type: DECREASE_BY, payload: 3 });
