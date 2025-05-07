// const greetFriends = (...friends: string[]) => {
//   friends.forEach((friend) => {
//     console.log(`Hello, ${friend}!`);
//   });
// };

// greetFriends("John", "Mary", "Peter");

// const user = {
//   id: 125,
//   name: {
//     first: "John",
//     last: "Doe",
//   },
//   age: 25,
//   email: "john@gmail.com",
//   address: {
//     street: "123 Main St",
//     city: "Anytown",
//     state: "CA",
//     zip: 12345,
//   },
// };

// const {
//   address,
//   name: { first },
// } = user;

// console.log(first);

// type Student = {
//   name: string;
//   age: number;
//   gender: string;
//   contact?: string;
//   address: string;
// };

// const student: Student = {
//   name: "Ranju",
//   age: 22,
//   gender: "Male",
//   address: "Raj",
//   contact: "01799665555",
// };

// const student2: Student = {
//   address: "Raj2",
//   age: 22,
//   gender: "male",
//   name: "Ranju",
// };

// type FrontendDeveloper = {
//   skills: string[];
//   designation: "Frontend Developer";
// };

// type GenericArray<T> = Array<T>;

// const rollNumbers: GenericArray<number> = [1, 2, 3];

// const mentors: GenericArray<string> = ["d", "f"];

// const boolArray: GenericArray<boolean> = [true, false];

// const user: GenericArray<{ name: string; age: number }> = [
//   {
//     name: "Ranju",
//     age: 22,
//   },
//   {
//     name: "Amin",
//     age: 22,
//   },
// ];

// type GenericTuple<X, Y> = [X, Y];

// const manush: GenericTuple<string, string> = ["x", "y"];

// console.log(manush);
// interface Developer<T, Y = null> {
//   name: string;
//   computer: {
//     brand: string;
//     model: string;
//     releaseYear: number;
//   };
//   smartWatch: T;
//   bike?: Y;
// }

// interface BrandWatch {
//   brand: string;
//   model: string;
//   display: string;
// }

// const ranjuDeveloper: Developer<BrandWatch> = {
//   name: "Ranju",
//   computer: {
//     brand: "HP",
//     model: "152",
//     releaseYear: 2011,
//   },
//   smartWatch: {
//     brand: "Apple",
//     display: "OLED",
//     model: "DFg4",
//   },
// };

// const createArray=(param:string):string[]=>{
//     return [param]
// }

// const createArrayWithGeneric=<T>(param:T):T[]=>{
//     return [param]
// }

// const res=createArray("MY Name")
// const res2=createArrayWithGeneric<string>("")

// const addCourseToStudent = <T>(student: T) => {
//   const course = "Next Level Web Development";
//   return {
//     ...student,
//     course,
//   };
// };

// const student=addCourseToStudent({
//     name:"Mr.X",
//     email:"x@gmail.com",
//     devType:"NLWD"
// })

// console.log("ts");

// const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
//   return obj[key];
// };

// const user = {
//   name: "Ranju",
//   email: "ranju@gmail.com",
//   devType: "NLWD",
// };

// console.log(getPropertyValue(user, "devType"));

// type Todo = {
//   id: number;
//   userId: number;
//   title: string;
//   completed: boolean;
// };

// const getTodo = async (): Promise<Todo> => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data = await res.json();
//   return data;
// };

// console.log(getTodo());
class Animal {
  constructor(
    private name: string,
    private species: string,
    private sound: string
  ) {}

  private makeSound(): string {
    return `The ${this.name} makes ${this.sound}`;
  }

  public sayHello(): string {
    return this.makeSound();
  }
}

const dog = new Animal("Dog", "Dog", "Woof");

console.log(dog.sayHello());

function formatString(input: string, toUpper?: boolean): string {
  if (toUpper || toUpper === undefined) {
    return input.toUpperCase();
  }

  return input.toLowerCase();
}

// const result = formatString("Hello World", true);
// console.log(result);

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating > 4);
}

// const books = [
//   { title: "Book A", rating: 4.5 },
//   { title: "Book B", rating: 3.2 },
//   { title: "Book C", rating: 5.0 },
// ];

// const filtered = filterByRating(books);
// console.log(filtered);

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return [...arrays.flat()];
}

// concatenateArrays(["a", "b"], ["c"]); // Output: ["a", "b", "c"]
// concatenateArrays([1, 2], [3, 4], [5]); // Output: [1, 2, 3, 4, 5]

// const result = concatenateArrays([1, 2], [3, 4], [5]);
// console.log(result);

class Vehicle {
  private make: string;
  year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  public getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  public getModel(): string {
    return `Model: ${this.model}`;
  }
}

// const myCar = new Car("Toyota", 2020, "Corolla");
// console.log(myCar.getInfo()); // Output: "Make: Toyota, Year: 2020"
// console.log(myCar.getModel()); // Output: "Model: Corolla"

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.split("").length;
  } else {
    return value * 2;
  }
}

// const result = processValue(10);
// console.log(result); // Output: 13

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;

  let mostExpensiveProduct = products[0];

  for (const product of products) {
    if (product.price > mostExpensiveProduct.price) {
      mostExpensiveProduct = product;
    }
  }

  return mostExpensiveProduct;
}

// const products = [
//   { name: "Pen", price: 10 },
//   { name: "Notebook", price: 25 },
//   { name: "Bag", price: 50 },
// ];

// const mostExpensiveProduct = getMostExpensiveProduct(products);
// console.log(mostExpensiveProduct);

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Sunday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}

// const res = getDayType(Day.Sunday); // Output: "Weekday"
// console.log(res);

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject("Negative number not allowed");
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
}

// squareAsync(4).then(console.log); // Output after 1s: 16

// squareAsync(-3).catch(console.error);
