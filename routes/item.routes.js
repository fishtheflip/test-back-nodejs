const Router = require('express');
const router = new Router();
const itemController = require('../controller/item.controller');

router.post('/item', itemController.createItem);
router.get('/item', itemController.getItem);
router.put('/item', itemController.updateItem)


module.exports = router;