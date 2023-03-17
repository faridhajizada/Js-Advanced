let isBoolean: boolean = true;
// isBoolean = 1;
// isBoolean = "true";
isBoolean = true;

let num1: number = 1;
// num = true;
// num = "1";
num1 = 2;

let str1: string = "hello";
// str1 = 1;
// str1 = true;
str1 = "world";

const greetUser = (): void => {
  alert("Hello World");
};

// let num1:number=10
// num1=true

let list: number[] = [1, 2, 3];
// Generetic type

let list1: Array<number> = [4, 5, 6];

// Typle Type
let x: [number, string] = [999, "666"];
let y: [number, string] = [999, "666"];

//Any Type
let list2: Array<any> = [4, 5, 6];
let c: [any, any] = [999, "666"];

let qwerty: any = true;

//Enum Type

const createPassword = (name: string, pass: number | string) =>
  ` name:${name}, password:${pass} `;
createPassword("Farid", "qwerty123");

// let user: { name: string; age: number } = {
//   name: "Farid",
//   age: 25,
// };

type Person = {
  name: string;
  age: number;
  nickName?: string;
};

let user: Person = {
  name: "Farid",
  age: 25,
};

class Users {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const Farid = new Users("Farid", 25);
