const randomFunction = (a, b) => Promise.resolve(b(a));

randomFunction('hello world', (a) =>
  a.toUpperCase()
)
  .then((a) => console.log(a));

