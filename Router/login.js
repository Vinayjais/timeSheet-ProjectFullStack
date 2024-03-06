const express = require('express');
const login = require('../controller/login');
const dashboard = require('../controller/dashboard');
const auth = require('../middelware/auth');

const router = express.Router();

router.get('/', login.getLogin);
router.get('/signup', login.GetSignUp);
router.post('/register-user',login.postUserData);
router.post('/validiate-user',login.postValidiateUser);
router.get('/dashboard', dashboard.getDashBoard );
router.post('/submitwork', auth.authentication, dashboard.submitwork);
router.get('/get-data', dashboard.getData );
router.get('/admin', dashboard.getAdminpage);
router.post('/submit-rate', dashboard.submitRate);
router.get('/workSubmitted',dashboard.workSubmittedSuccess)
router.get('/adminpage',login.adminPage)
router.post('/admin-login',login.adminLogin)


module.exports = router;