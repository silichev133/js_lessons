const a = 10;
const objA = {
  a,
  b: "abs",
};

const copyA = objA;

console.log(copyA.a);
copyA.a = 29;
console.log(copyA.a);
console.log(objA.a);
