const express = require('express')
const router = express.Router()
const phonebook_controller = require('../controllers/phonebook.controller')

router.get('/getEntry/:name', phonebook_controller.getEntry);
router.get('/getAllEntries', phonebook_controller.getAllEntries);
router.post('/createEntry', phonebook_controller.createEntry);

module.exports = router;