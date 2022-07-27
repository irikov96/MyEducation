function objects(firstName, lastName, age){
// ! If value comes from the outside, we can initialise only the key word with the name comming from outside as it is in the following example
let newObject = {
firstName,
lastName,
age
}
let keys = Object.keys(newObject)
console.log(keys[0]);
 console.log(Object.keys(newObject));
}
objects("kiril", "Petkov", 20)

// we can also use it in function, directly using return and initialising the object
// as this example function myObject() {
//return { the comming from the outside will be saved here
// }
//}
