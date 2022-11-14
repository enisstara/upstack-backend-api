const rolesRepository = require("../repository/roleRepository")

const getRoles = async () => {
  try {
    const roles = await rolesRepository.getRoles();
    return roles;
  } catch (err) {
    return err;
  }
}

const getRoleById = async (roleId) => {
  try {
    const role = await rolesRepository.getRoleById(roleId);
    return role;
  } catch (err) {
    return err;
  }
}

const getRolesBySearch = async (value) => {
  try {
    const roles = await rolesRepository.getRoles();
    const filtered = [...roles].filter((role) => {
      if (
        role.role_name.indexOf(value) !== -1 ||
        role.role_code.indexOf(value) !== -1
      ) {
        return role;
      }
    });
    return filtered;
  } catch (err) {
    return err;
  }
}

module.exports = Object.freeze({
  getRoles,
  getRoleById,
  getRolesBySearch
});