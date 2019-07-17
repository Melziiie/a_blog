var ctrl = require('../controllers/article');
var express = require('express');
var router = express.Router();

// Create a new Article
router.post('/new', ctrl.create);

// Retrieve all Article
router.get('/', ctrl.findAll);

// Retrieve a single Article with article_id
router.get('/:article_id', ctrl.findOne);

// Update an article with article_id
router.put('/:article_id/edit', ctrl.update);

// Delete a article with article_id
router.delete('/:article_id', ctrl.delete);

module.exports = router;
  