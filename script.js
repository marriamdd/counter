function createCounter() {
  let counter = 0;
  return {
    increment() {
      counter++;
      return counter;
    },
    decrement() {
      counter--;
      return counter;
    },
    reset() {
      counter = 0;
      return counter;
    },
  };
}
console.log(createCounter().increment());
console.log(createCounter().decrement());
console.log(createCounter().reset());
