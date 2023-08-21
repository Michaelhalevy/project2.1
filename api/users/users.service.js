import usersDal from './users.dal.js';

const getUsers = async () => {
    try {
        const users = await usersDal.getUsers();
        return users;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const addUsers = async (user) => {
    try {
        const users = await usersDal.addUsers(user);
        return users;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const loginUser = async (userLogin) => {
    try {
        const user = await usersDal.loginUser(userLogin);
        
        return user;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};



const usersService = {
    addUsers,
    loginUser,
    getUsers
};

export default usersService;