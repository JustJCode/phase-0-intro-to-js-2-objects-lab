// Write your solution in this file!
const employee ={
    name : 0,
    streetAddress : 0
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee,[key]: value}
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] =value
    return employee
}

function deleteFromEmployeeByKey(employee,key){
    const delEmployee = {...employee}
    delete delEmployee[key]
    return delEmployee 
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}