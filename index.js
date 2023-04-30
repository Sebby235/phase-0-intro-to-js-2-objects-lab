// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: '11th Broadway St',
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
console.log("employee", employee)
let newEmployee = {...employee}
newEmployee[key] = value;
return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee}
    delete newEmployee.name
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name
    return employee;
}