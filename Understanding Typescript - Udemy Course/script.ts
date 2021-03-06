let blah = 1;

//void function
function sayHello(): void {
  console.log("hello");
}

//function argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}

console.log(multiply(10, 2));

//function types
let myMultiply: (a: number, b: number) => number;

myMultiply = multiply;
console.log(myMultiply(5, 2));

//objects
let userData: { name: string; age: number } = {
  name: "bob",
  age: 26
};

//complex object
let complex: { data: number[]; output: (all: boolean) => number[] } = {
  data: [100, 3.99, 10],

  output: function(all: boolean): number[] {
    return this.data;
  }
};

type Complex = { data: number[]; output: (all: boolean) => number[] };

let complex2: Complex = {
  data: [100, 3.99, 10],

  output: function(all: boolean): number[] {
    return this.data;
  }
};

//union types
let myRealRealAge: number | string = 27;
myRealRealAge = "27";

//check types
let finalValue = 3;
if (typeof finalValue == "number") {
  console.log("Final value is a number");
}

// typescript 2.0
// never type
function neverReturns(): never {
  throw new Error("an error!");
}

// nullable types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;
canThisBeAny = 12;
