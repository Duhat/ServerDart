const Router = require('express');
const router = new Router();
<<<<<<< HEAD
const CategoryController = require('../controllers/сategoryController');
=======
const CategoryController = require('../controllers/categoryController');
>>>>>>> 2989c180ac4734a1eadc4da3334e5d72e1cdfcd8

// Определение маршрутов для категорий
router.post('/', CategoryController.create); // Создание категории
router.get('/', CategoryController.get); // Получить все категории
router.get('/:id', CategoryController.get); // Получить категорию по ID
router.put('/:id', CategoryController.update); // Обновить категорию
router.delete('/:id', CategoryController.delete); // Удалить категорию

module.exports = router;
