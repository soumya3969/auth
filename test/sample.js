let obj1 = { name: "soumya", age: 21, extra: { hobby: "coding" } };

let obj2 = { ...obj1 };
obj2.age = 22;
obj2.extra.hobby = "gaming";
console.log(obj1);
console.log(obj2);
