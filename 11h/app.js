console.log("hello again");
const objA = {
  a: 10,
  b: "abs",
};

const copyA = objA;

console.log(copyA.a);
copyA.a = 29;
console.log(copyA.a);
console.log(objA.a);
