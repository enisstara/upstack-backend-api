const db = require("../db/roles.json");
const { roles } = db;

const getRoles = async () => {
  return new Promise((resolve, reject) => {
    try {
      resolve([...roles]);
    } catch (err) {
      reject(err);
    }
  });
}

const getRoleById = async (roleId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const roles = await getRoles();
      const role = [...roles].filter((role) => {
         if (roleId === role.id) {
           return role;
         }
      });
      resolve(role);
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = Object.freeze({
  getRoles,
  getRoleById,
});