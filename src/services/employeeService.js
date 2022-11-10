const employeeRepository = require("../repository/employeeRepository");
const roleRepository = require("../repository/roleRepository");

const getEmployees = () => {
  const roles = roleRepository.getRoles();
  const employees = employeeRepository.getEmployees();
  const aggregation = employees.map((employee) => {
    const role = roles.find(role => role.id === employee.role_id);
    return {
      ...employee,
      role_name: role.role_name
    };
  });

  return aggregation;
}

const getEmployeeById = (employeeId) => {
  return employeeRepository.getEmployeeById(employeeId);
}

const getEmployeesBySearch = (value) => {
  const roles = roleRepository.getRoles();
  const employees = employeeRepository.getEmployees();
  const aggregation = employees.map((employee) => {
    const role = roles.find(role => role.id === employee.role_id);
    return {
      ...employee,
      role_name: role.role_name
    };
  }).filter((employee) => {
    if (
      employee.name.indexOf(value) !== -1 ||
      employee.username.indexOf(value) !== -1 ||
      employee.email.indexOf(value) !== -1
    ) {
      return employee;
    }
  });

  return aggregation;
}

module.exports = Object.freeze({
  getEmployees,
  getEmployeeById,
  getEmployeesBySearch
});