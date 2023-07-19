const KEY_USER = 'user';
const KEY_USERS = 'users';

export const saveUserToLocalStorage = (user) => {
  try {
    localStorage.setItem(KEY_USER, JSON.stringify(user));
  } catch (error) {
    console.error('Error saving user to local storage:', error);
  }
};

export const saveUserToUsersArray = (user) => {
  try {
    const usersFromLocalStorage = localStorage.getItem(KEY_USERS);
    const usersArray = usersFromLocalStorage ? JSON.parse(usersFromLocalStorage) : [];
    usersArray.push(user);
    localStorage.setItem(KEY_USERS, JSON.stringify(usersArray));
  } catch (error) {
    console.error('Error saving user to users array in local storage:', error)
  
  }
}

export const getUserFromLocalStorage = () => {
  try {
    const userFromLocalStorage = localStorage.getItem(KEY_USER);
    return userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null;
  } catch (error) {
    console.error('Error getting user from local storage:', error);
    return null;
  }
};

export const clearUserFromLocalStorage = () => {
  try {
    localStorage.removeItem(KEY_USER);
  } catch (error) {
    console.error('Error clearing user from local storage:', error);
  }
};
