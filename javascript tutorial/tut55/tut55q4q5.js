console.log("Create a const object in js,Can you change it to hold a number later");
console.log("Solution of question number3 chap1");
const myobj={
   mynumber:'88'
};
 myobj.mynumber='100';
console.log(myobj);

// Declare a constant object
console.log("This is second example");
const myObject = {
   key: 'value'
 };
 
//  You cannot reassign the object itself
//  This will cause an error
//  myObject = {
//    newKey: 'newValue'
//  };
 
//  However, you can change the properties of the object
 myObject.key = 'newValue'; // This is allowed
 
 console.log(myObject); // Output: { key: 'newValue' }

console.log("This is third example");
 // Declare a constant object with a property holding a number
const myNumberObject = {
   value: 42
 };
 
 // You cannot reassign the object itself
 // This will cause an error
 // myNumberObject = { value: 100 };
 
 // However, you can change the value property of the object
 myNumberObject.value = 100; // This is allowed
 
 console.log(myNumberObject); // Output: 100
 