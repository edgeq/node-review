const { inc, dec, getCount} = require("./mymodule"); // we need to use path for custom modules, but not for npm contributed modules

console.log(getCount());
inc();

console.log(getCount());
dec();

console.log(getCount());

inc();
console.log(getCount());

inc();
console.log(getCount());

inc();
console.log(getCount());
