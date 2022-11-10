const db = require("../db/employees.json");
const { employees } = db;

const getEmployees = () => {
  return [...employees];
}

const getEmployeeById = (employeeId) => {
  return getEmployees().filter((employee) => {
    if (employeeId === employee.id) {
      return employee;
    }
  });
}

module.exports = Object.freeze({
  getEmployees,
  getEmployeeById,
});