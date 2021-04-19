const db = require('../database/db');

class UserController{
    // функция создания пользователя
    async createUser(req, res){
        try {
            const {name, surname, middlename} = req.body;
            const newPerson = await db.query(`INSERT INTO person (name, surname, middlename) values ($1 , $2, $3) RETURNING *`, [name, surname, middlename] );
            console.log(newPerson);
            res.json(newPerson.rows[0]);
        } catch (error) {
            console.log(error)
        }

    }
    // функция получения всех пользователей
    async getUser(req, res){
        try {
            const users = await db.query('SELECT * FROM person');
            res.json(users.rows);
        } catch (error) {
            console.log(error);
        }
    }
    
    // функция получения конкретного пользователя по id
    async getoneUser(req, res){
        try {
            const id = req.params.id;
            console.log(id)
            const user = await db.query('SELECT * FROM person WHERE id = $1', [id]);
            res.json(user.rows[0]);
        } catch (error) {
            console.log(error)
        }
    }
    // функция редактирования пользователей
    async updateUser(req, res){
        try {
            const {id,name, surname, middlename} = req.body;
            const user = await db.query('UPDATE person set name = $1, surname = $2, middlename = $3 where id = $4 RETURNING *', [name, surname, middlename, id])
            res.json(user.rows[0]);

        } catch (error) {
            console.log(error)
        }
    }
    // функция удаления пользователя
    async deleteUser(req, res){
        try {
            const id = req.body.id;
            const user = await db.query('DELETE FROM person where id = $1', [ id]);
            res.json(user.rows[0]);
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new UserController();