const ctrl = require('../controllers/users');
const express = require('express');
const router = express.Router();

// Change user password
router.put('/', ctrl.update);

// Delete a article with article_id
router.delete('/', ctrl.delete);

module.exports = router;
  