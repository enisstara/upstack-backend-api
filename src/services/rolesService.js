const rolesRepository = require("../repository/roleRepository")

const getRoles = () => {
  return rolesRepository.getRoles();
}

const getRoleById = (roleId) => {
  return rolesRepository.getRoleById(roleId);
}

const getRolesBySearch = (value) => {
  return rolesRepository.getRoles().filter((role) => {
    if (
      role.role_name.indexOf(value) !== -1 ||
      role.role_code.indexOf(value) !== -1
    ) {
      return role;
    }
  });
}

module.exports = Object.freeze({
  getRoles,
  getRoleById,
  getRolesBySearch
});