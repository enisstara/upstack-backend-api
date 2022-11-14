const employeeRepository = require("../repository/employeeRepository");
const roleRepository = require("../repository/roleRepository");

const getEmployees = async () => {
  try {
    const roles = await roleRepository.getRoles();
    const employees = await employeeRepository.getEmployees();

    const aggregation = [...employees].map((employee) => {
      const role = [...roles].find(role => role.id === employee.role_id);
      return {
        ...employee,
        role_name: role.role_name
      };
    });

    return aggregation;
  } catch (err) {
    return err;
  }
}

const getEmployeeById = async (employeeId) => {
  try {
    const employee = await employeeRepository.getEmployeeById(employeeId);
    return employee;
  } catch (err) {
    return err;
  }
}

const getEmployeesBySearch = async (value) => {
  try {
    const roles = await roleRepository.getRoles();
    const employees = await employeeRepository.getEmployees();

    const aggregation = [...employees].map((employee) => {
      const role = [...roles].find(role => role.id === employee.role_id);
      return {
        ...employee,
        role_name: role.role_name
      };
    }).filter((employee) => {
      if (
        employee.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
        employee.username.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
        employee.email.toLowerCase().indexOf(value.toLowerCase()) !== -1
      ) {
        return employee;
      }
    });

    return aggregation;
  } catch (err) {
    return err;
  }
}

module.exports = Object.freeze({
  getEmployees,
  getEmployeeById,
  getEmployeesBySearch
});