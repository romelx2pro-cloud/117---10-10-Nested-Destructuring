// const results = [{
//     first: "Eliud",
//     last: "Kipchoge",
//     country: "Kenya",
//   },
//   {
//     first: 'Feyisa',
//     last: 'Lilesa',
//     country: 'Ethiopia'
//   },
//   {
//     first: 'Galen',
//     last: 'Rupp',
//     country: 'United States'
//   }
// ]
// // NESTED DESTRUCTURING
// const [{
//   first: goldWinner
// }, {
//   country
// }] = results;
// goldWinner; //"Eliud"
// country; //"Ethiopia"
function params() {
  console.log(arguments);
  const argsArr = [...arguments];
  return argsArr.reduce((ac, cr) => {
    return ac + cr;
  });
}
function nameFl(f, l, ...params) {
  console.log("f", f);
  console.log("l", l);
  console.log("p", params);
}
// const nfl = nameFl("m", "r", "i", "r", "jb", "rb");
function sm(...params) {
  console.log(params);
  return params.reduce((a, c) => a + c);
}
const m = (...p) => p.reduce((a, c) => a * c);
const rr = ["a", "b", "c", "d", "e"];
// const [g, s, br, ...r] = rr;
// console.log(g);
// console.log(s);
// console.log(br);
// console.log(r);
const rnr = {
  f: "a",
  l: "b",
  s: "c",
  cn: "bd",
};
const { f: fr, ...o } = rnr;
// console.log(fr);
// console.log(o);
const results = [
  {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
  },
  {
    first: "Feyisa",
    last: "Lilesa",
    country: "Ethiopia",
  },
  {
    first: "Galen",
    last: "Rupp",
    country: "United States",
  },
];
const [, s] = results;
console.log(s);
const { country } = s;
console.log(country);
// const [, { country }] = results;
