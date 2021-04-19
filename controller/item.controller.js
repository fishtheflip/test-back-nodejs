const db = require('../database/db');

class ItemController{
    // функция добавления элемента
    async createItem(req, res){
        try {

            const {item_name, item_cost, user_id } = req.body;
            const newItem = await db.query(`INSERT INTO items (item_name, item_cost, user_id) values ($1, $2, $3) RETURNING *`, [item_name, item_cost, user_id]);
            res.json(newItem.rows[0]);
        } catch (error) {
            console.log(error)
        }
    }
    // функция изменения элемента
    async updateItem(req, res){
        try {
            const {id,item_name, item_cost} = req.body;
            const user = await db.query('UPDATE items set item_name = $1, item_cost = $2 where id = $3 RETURNING *', [item_name, item_cost, id])
            res.json(user.rows[0]);

        } catch (error) {
            console.log(error)
        }
    }
    // функция просмотра всех элементов у пользователя по id
    async getItem(req, res){
        try {
            const id = req.query.id;
            const items = await db.query('select * from items where user_id = $1', [id]);
            res.json(items.rows);
        } catch (error) {
            console.log(error)
        }
    }

}
module.exports = new ItemController();