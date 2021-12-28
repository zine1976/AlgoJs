function age(a) {
  let result;
  if (a < 18) {
    result = 'pas autorise';
  } else {
    result = ' autorise';
  }
  return result;
}

console.log(age(16));
// expected output: " autorise"