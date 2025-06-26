const code = `
(() => {
  return function plus(a, b) {
    return a + b;
  }
})()
`;
console.log(eval(code));
