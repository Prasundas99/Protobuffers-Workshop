/**
 * Writing an application in JSON and discovering its different features
 * Steps:
 * 1. Creating employees array
 * 2. Adding Data to the array in different format
 * 3. Adding File System and Storing it in File System
 */

const fs = require('fs');
const employee = []

// Daaing Data 1
employee.push({
    name: 'John',
    age: 30,
    salary: 1000,
    position: 'Manager',
    "id": 1
})

//Adding data by creating an object
const ahmed = {
    "name": "Ahmed",
    "age": 30,
    "salary": 1001,
    "position": "Director",
    "id": 2
}

employee.push(ahmed)

//Adding data by creating array of objects
const employees = [
    {
        "name": "John",
        "age": 30,
        "salary": 1000,
        "position": "Manager",
        "id": 4
    },
    {
        "name": "Ahmed",
        "age": 30,
        "salary": 1001,
        "position": "Director",
        "id": 5
    }
]


fs.writeFileSync('employee.json', JSON.stringify(employee))
/**
 * Just for 3 Employees it gives 137kb file size
 * Not much file size but imagine it is used in production having lakhas of employees this will grow large and large
 * So whenever we send this file as http request it will be huge
 * How about we do it with protobuf?
 * 
 * What is protobuff?
 * It is a representation of structured data, JSON is not a structured data
 * 
 */
console.log(JSON.stringify(employee, null, 2));