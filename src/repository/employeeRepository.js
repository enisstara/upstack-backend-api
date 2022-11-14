const db = require("../db/employees.json");
const { employees } = db;

const getEmployees = async () => {
  return new Promise((resolve, reject) => {
    try {
      resolve([...employees]);
    } catch (err) {
      reject(err);
    }
  });
};

const getEmployeeById = async (employeeId) => {
  return new Promise(async (resolve, reject) => {
   try {
    const employees = await getEmployees();
    const employee = [...employees].filter((employee) => {
      if (employeeId === employee.id) {
        return employee;
      }
    });
    resolve(employee);
   } catch (err) {
    reject(err);
   }
  });
};

module.exports = Object.freeze({
  getEmployees,
  getEmployeeById,
});