const Schema = require("./employees_pb");
const fs = require("fs")
const prasun = new Schema.Employee();
prasun.setId(1001);
prasun.setName("prasun");
prasun.setSalary(1001);



const jit = new Schema.Employee();
jit.setId(1002);
jit.setName("jit");
jit.setSalary(9000);

const rick = new Schema.Employee();
rick.setId(1003);
rick.setName("Rick");
rick.setSalary(5000);


const employees = new Schema.Employees();
employees.addEmployees(prasun);
employees.addEmployees(jit);
employees.addEmployees(rick);
const bytes = employees.serializeBinary();
console.log("binary " + bytes)
fs.writeFileSync("employeesbinary", bytes)


const employees2 = Schema.Employees.deserializeBinary(bytes);

console.log(employees2.toString())

/**
 * Output is 52kb binary file
 */