let reduxState = {
  post: 0,
  name: "Ali",
  age: 13,
};

function reducer(state, action) {
  if (action.type === "post/increase") {
    return { ...state, post: state.post + 1 };
  } else if (action.type === "post/decrease") {
    return { ...state, post: state.post - 1 };
  }
  return state;
}

// What Redux Will Do
reduxState = reducer(reduxState, { type: "post/increase" });
console.log(reduxState);
reduxState = reducer(reduxState, { type: "post/increase" });
console.log(reduxState);
reduxState = reducer(reduxState, { type: "post/decrease" });
console.log(reduxState);
