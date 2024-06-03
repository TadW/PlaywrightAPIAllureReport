export let token = {
  token:
    "Bearer d06693ce1b7d36838ce52fb77cee34885d456a7605a732a84752fda521912ead",
};

export function getIdByName(name, data) {
  const user = data.find((user) => user.name === name);
  return user ? user.id : null;
}

export function getIdByEmail(email, data) {
  const user = data.find((user) => user.email === email);
  return user ? user.id : null;
}

export const createUsera = {
  name: "name",
  email: "email@email.com",
  gender: "female",
  status: "active",
};

export const updateUser = {
  name: "nameUpdate",
  email: "emailUpdate@gmail.com",
  gender: "female",
  status: "active",
};
