let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Test server'});
});
/* GET home page. */
router.get('/cats', function (req, res, next) {
    res.render('cats', {title: 'Test server'});
});

module.exports = router;
