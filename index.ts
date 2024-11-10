// 1-mashq

// interface Person {
//     name:string,
//     age: number,
//     isStudent: boolean
// }

// let People: Person = {
//     name: "John Doe",
//     age: 25,
//     isStudent:false
// }
// console.log(People);


// interface Book {
//     title: string,
//     author: string,
//     publishedYear: number
// }

// let Books: Book = {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     publishedYear: 1925
// } 
// console.log(Books);

// Massivlar

// 2-mashq

// function sum(arr: number[]): number {
//     let res = 0;
//     for (let i = 0; i < arr.length; i++) {
//       res += arr[i];
//     }
//     return res;
//   }

//   const arr: number[] = [1, 2, 3, 4, 5];
//   console.log(sum(arr)); 



// let fruits: string[] = ["apple", "banana", "cherry"];

// function str(fruits: string[]): string[] {
//     let newFruits: string[] = [];
//     for (let i = 0; i < fruits.length; i++) {
//         newFruits.push(fruits[i].toUpperCase());
//     }
//     return newFruits;
// }

// console.log(str(fruits)); 


// 3-mashq

// let StudentRecord: [name: string, age: number, isEnrolled: boolean] = ["Alice", 22, true];

// let Coordinate: [x: number, y: number] = [10, 20]; 

// 4-mashq

// let a: any;
// a = 5;
// a = 'test';
// a = true;
// console.log(a);

// let test: any[] = [];
// test.push("Hello");
// test.push(false);
// test.push([1, 2, 3]);
// test.push({ name: "John", age: 30 });
// function test1(arr: any[]): any[] {
//     let result: any[] = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i]);
//     }
//     return result;
// }

// console.log(test1(test));


// 5-mashq

// let test: unknown = 5;
// test = 5;
// test = 'hello'


// function convertToString(value: unknown): string {
//     if (typeof value === "string") {
//         return value;
//     } else {
//         return "bu string emas";
//     }
// }

// console.log(convertToString("Hello"));
// console.log(convertToString(42));
// console.log(convertToString([1, 2, 3]));
// console.log(convertToString("bye"));

// 6-mashq

// function testNever(value: never): never {
//     return value;
// }

// testNever("Hello" as never);
// console.log(testNever);


// function test(): never {
//     while (true) {
//         console.log("hello");
//     }
// }

// test();


// 7-mashq

// function addNumbers(a: number, b: number): number {
//     return a + b;
// }

// console.log(addNumbers(5, 10)); 



// 8-mashq

// enum DaysOfWeek {
//     Monday,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday,
//     Saturday,
//     Sunday
// }
// console.log(DaysOfWeek);

// function printDay(day: DaysOfWeek): void {
//     console.log(DaysOfWeek[day]);
// }

// printDay(DaysOfWeek.Monday); 
// printDay(DaysOfWeek.Friday); 

// 9-mashq

// interface Person {
//     name: string,
//     age: number
// }

// interface Employee {
//     employeeId: number,
//     department: string
// }

// type WorkerType = Person & Employee;

// const work: WorkerType = {
//     name: "John Doe",
//     age: 30,
//     employeeId: 1234,
//     department: "Engineering"
// };

// console.log(worker);


// 10-mashq

// interface Vehicle {
//     make: string;
//     model: string;
//     year: number;
// }

// interface Car extends Vehicle {
//     numberOfDoors: number;
//     isElectric: boolean;
// }

// const myCar: Car = {
//     make: "Tesla",
//     model: "Model S",
//     year: 2024,
//     numberOfDoors: 4,
//     isElectric: true
// };

// console.log(myCar);


// 11-mashq

// interface Person {
//     name: string;
//     age: number;
//     isStudent: boolean;
// }

// type Address = {
//     street: string;
//     city: string;
//     postalCode: string;
// };

// type PersonWithAddress = Person & Address;

// const person: PersonWithAddress = {
//     name: "Mark",
//     age: 28,
//     isStudent: true,
//     street: "Main St",
//     city: "Springfield",
//     postalCode: "12345"
// };

// console.log(person);


// 12-mashq

// interface Student {
//     name: string;
//     age: number;
//     grades: number[];
//     address: [string, number];
// }

// function getStudentSummary(student: Student): string {
//     let sum = 0;
//     for (let grade of student.grades) {
//         sum += grade;
//     }

//     const averageGrade = sum / student.grades.length;
//     return `Name: ${student.name}, Age: ${student.age}, Average Grade: ${averageGrade.toFixed(2)}`;
// }

// const student: Student = {
//     name: "Alice",
//     age: 20,
//     grades: [85, 90, 78, 92],
//     address: ["Baker Street", 221]
// };

// console.log(getStudentSummary(student));


// 13-mashq

// enum OrderStatus {
//     Pending,
//     Shipped,
//     Delivered,
//     Cancelled
// }

// interface Order {
//     orderId: number;
//     status: OrderStatus;
//     totalAmount: number;
// }

// interface Customer {
//     customerId: number;
//     name: string;
// }

// type CustomerOrder = Order & Customer;

// const customerOrder: CustomerOrder = {
//     orderId: 456,
//     status: OrderStatus.Shipped,
//     totalAmount: 150.00,
//     customerId: 789,
//     name: "Sarah"
// };

// console.log(customerOrder);
