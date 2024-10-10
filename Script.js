let state = {
  count: 0,
  name: "Ali",
  age: 13,
};

function reducer(state) {
  return { ...state, count: state.count + 1 };
}

// What Redux Will Do

reduxState = reducer(reduxState);
