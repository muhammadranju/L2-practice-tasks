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

console.log("ts");
