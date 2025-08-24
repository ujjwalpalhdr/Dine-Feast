// Rough

import os from "os";
import fs from "fs";

let arr = [
  {
    name: "Ujjwal",
    place: "Haridwar",
    education: "BCA",
    id: 85,
    isActive: true,
  },
  {
    name: "Shivam",
    place: "Roorkee",
    education: "BCA",
    id: 89,
    isActive: true,
  },
  {
    name: "Sujal",
    place: "Haridwar",
    education: "BCA",
    id: 55,
    isActive: false,
  },
  {
    name: "Shaksham",
    place: "Dehradun",
    education: "BCA",
    id: 15,
    isActive: true,
  },
];

let user = os.userInfo();
console.log(user);

fs.appendFile("rough.txt", "hello", () => {
  console.log("completed");
});
console.log(typeof arr);
// arr.forEach((valu, no) => console.log(no, valu));

// let no = [35, 18, 15, 14, 25, 75, 22, 21, 19];

// const age = no.filter((age) => age >= 18);

// console.log(age);

// const ag = arr.filter((arr) => arr.education === "BCA");

// console.log(ag);

// const al = arr.sort((a, b) => {
//   if (a.id < b.id) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// const al = arr.sort((a, b) => (a.id > b.id ? 1 : -1));

// const al = no.sort((a, b) => a - b);

// const al = no.reduce((a, b) => a + b, 0);

// console.log(al);

// const names = [];
// arr.forEach((user) => {
//   names.push(user.name);
// });

// console.log(arr);
// console.log(names);

// const newUser = arr
//   .filter((user) => user.isActive)
//   .sort((user1, user2) => (user1.id < user2.id ? 1 : -1))
//   .map((user) => user.name);
// console.log(newUser);

// const getData = () => {
//   setTimeout(() => {
//     arr.forEach((data, index) => {
//       console.log(data.name);
//     });
//   }, 1000);
// };
// getData();

// closure
// let no1 = (a) => {
//   console.log("live viewers " + a);
//   return (b) => {
//     return (c) => {
//       return a + b + c;
//     };
//   };
// };

// let ans = no1(5)(4)(16);
// console.log(ans);

// const sum = no(5);
// console.log(sum(10));

// let no = (a, b, c) => {
//   return {
//     sumoftwo: () => {
//       return a + b;
//     },
//     sumofthree: () => {
//       return a + b + c;
//     },
//   };
// };

// const sum = no(8, 2, 5);
// console.log(sum.sumofthree());
// console.log(sum.sumoftwo());
