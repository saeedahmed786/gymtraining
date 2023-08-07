const express = require('express');
const upload = require('../middlewares/multer');
const { signUp, login } = require('../controllers/userController');

const router = express.Router();

router.post('/signup', upload.single('file'), signUp);
router.post('/login', login);

module.exports = router;