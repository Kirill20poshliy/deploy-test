const users = [
    'Oleg',
    'Petya',
    'Semen',
    'Kirill',
    'Alex',
]

class usersController {

    getUsers(req, res) {
        try {
            if (!users) {
                throw new Error('Что-то пошло не так!')
            }
            const response = {
                result: true,
                count: users.length,
                data: users
            }
            res.status(200).json(response)
        } catch (e) {
            res.status(400).json(e.message)
            console.log(e.message)
        }
    }

}

module.exports = new usersController()