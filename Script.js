let state = {
  count: 0,
};

let previousState = state;

function increment() {
  // mutating state which is not recommended in Redux
  //   state.count = state.count + 1;
  // Not Mutating the state
  state = { count: state.count + 1 };
}

increment();
console.log(state);
increment();
console.log(state);
increment();
console.log(state);
