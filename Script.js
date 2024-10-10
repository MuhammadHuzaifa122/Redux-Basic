let state = {
  count: 0,
};
function increment() {
  // mutating state which is not recommended in Redux
  //   state.count = state.count + 1;
}
increment();
console.log(state);
increment();
console.log(state);
increment();
console.log(state);
