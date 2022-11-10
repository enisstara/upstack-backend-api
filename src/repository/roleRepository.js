const db = require("../db/roles.json");
const { roles } = db;

const getRoles = () => {
  return [...roles];
}

const getRoleById = (roleId) => {
  return getRoles().filter((role) => {
    if (roleId === role.id) {
      return role;
    }
  });
}

module.exports = Object.freeze({
  getRoles,
  getRoleById,
});