export function GetUsers(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function GetUser({ email }, users) {
  return users.find(user => user.email === email);
}

export function SetUsers(key, users) {
  localStorage.setItem(key, JSON.stringify(users));
}

export function SetUser(key, user) {
  let allUsers = GetUsers(key);
  let status = false;
  if (allUsers) {
    const oldUserData = GetUser(user, allUsers);
    if (oldUserData) return status; /*Found Duplicate*/
    const newUsersCopy = [...allUsers];
    newUsersCopy.push(user);
    localStorage.setItem(key, JSON.stringify(newUsersCopy));
    status = true;
  } else {
    const users = [];
    users.push(user);
    SetUsers(key, users);
    status = true;
  }
  return status;
}

export function UpdateUser(key, user) {
  const allUsers = GetUsers(key);
  const oldUserData = GetUser(key, user, allUsers) || {};
  const newUserData = { ...oldUserData, ...user };
  const otherUsers = [...allUsers].filter(
    filteredUser => filteredUser.email !== newUserData.email
  );
  otherUsers.push(newUserData);
}
