import usersService from './users.service.js';

const getUsers = async (req, res) => {
    try {
        const allUsers = await usersService.getUsers();
        if (allUsers.length > 0)
            return res.status(200).send(allUsers)
        else {
            return res.status(404).json({ "message": "No Users" })
        }
    } catch (error) {
        console.error(error)
    }
};

const addUsers = async (req, res) => {
    try {
        const user = req.body
        const allUsers = await usersService.addUsers(user);
        if (allUsers.length > 0)
            return res.status(200).send(allUsers)
        else {
            return res.status(404).json({ "message": "No Users" })
        }
    } catch (error) {
        console.error(error)
    }
};

const loginUser = async (req, res) => {
    try {
        const userLogin = req.body
        const login = await usersService.loginUser(userLogin);
        
        if (login) {
            res.send("User is logged in!") 
        } else {
            res.send("User rejected!") 

        }
    } catch (error) {
        console.error(error)
    }
};




const usersController = {
    addUsers,
    loginUser,
    getUsers
};


export default usersController;
