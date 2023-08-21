
import jsonfile from 'jsonfile'


let data = []


jsonfile.readFile('./data.users.json', (err, arr) => {
    if (err) console.log(err)
    data = arr
})

const getUsers = (req, res) => {
    return data
};


const addUsers = (user) => {
    data.push(user)
    return "user added succesfully!"
};

const loginUser = (userLogin) => {
    
    const { email, password } = userLogin
    const findEmail = data.find((user) => email === user.email);
    if (findEmail) {
        const checkPassword = password === findEmail.password
        
        if (checkPassword) {
            return true
        } else {
            return false
        }
    }
};

const usersDal = {
    addUsers,
    loginUser,
    getUsers
};


export default usersDal;