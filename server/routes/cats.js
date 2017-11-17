let express = require('express');
let router = express.Router();

let Cat = require('../models/Cat.js');

/* GET /cats listing. */
router.get('/', function (req, res, next) {
    Cat.find(function (err, cats) {
        if (err) return next(err);
        res.json(cats);
    });
});

/* POST /cats */
router.post('/', function (req, res, next) {
    Cat.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* GET /cats/id */
router.get('/:id', function (req, res, next) {
    Cat.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /cats/:id */
router.put('/:id', function (req, res, next) {
    Cat.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /cats/:id */
router.delete('/:id', function (req, res, next) {
    Cat.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;

