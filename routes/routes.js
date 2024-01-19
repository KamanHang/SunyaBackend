const { Router } = require('express');
const controller = require('../controllers/controller')

const router =  Router();

router.post('/login', controller.loginUser)
router.post('/signup', controller.signUpUser)
router.post('/addpost', controller.addPost)
router.post('/addcomment', controller.addComment)






module.exports = router;