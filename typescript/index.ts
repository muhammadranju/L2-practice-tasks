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

type FrontendDeveloper = {
  skills: string[];
  designation: "Frontend Developer";
};
