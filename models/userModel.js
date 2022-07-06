const {v4: uuidv4 } = require("uuid");

const users = [
    {
        id: uuidv4(),
        username: "arick ahamed",
        email: "arickahamed700@gmail.com",
    },
    {
        id: uuidv4(),
        username: "ashiqur rahman",
        email: "ashiqurrahman700@gmail.com"
    }
]

module.exports = users;