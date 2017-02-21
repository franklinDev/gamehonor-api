var express     = require('express');
var router      = express.Router();
var db          = require('./../models/database');



/* GET users listing. */
router.get('/', function(req, res, next) {
    db.users.findAll()
        .then(function (result) {
            res.render('users',{
                message: 'Listing Users',
                data: result
            });
        }).catch(function (erro) {
        console.log('Deu ruim => '+ erro);
    });
});


//Create View
router.get('/create', function (req, res) {
    res.render('new_users',{
        message: 'Creating Users'
    });
});


//Create
router.post('/create', function (req, res) {

    db.users.create(req.body)
        .then(function () {
            res.render('new_users',{
                message: 'Creating Users'
            })
        })
        .catch(function (erro) {
            console.log('Deu ruim => '+ erro);
        })
});


//Delete a user
router.delete('/:id', function (req, res) {
    db.users.destroy({
        where:{
            id: req.params.id
        }
    }).then(function () {
        res.redirect('/users');
    }).catch(function (erro) {
        console.log('Deu ruim => '+ erro);
    })
});


//Edit a User view
router.get('/edit/:id', function (req, res) {
    db.users.findOne({
        where:{
            id:req.params.id
        }
    }).then(function (result) {
        res.render('edit_user', {
            message: 'Editing Users',
            data: result
        })
    }).catch(function (erro) {
        console.log('Deu ruim => '+ erro);
    });
});

//Edit a user
router.put('/edit/:id', function (req, res) {
    db.users.update(req.body, {
        where:{
            id:req.params.id
        }
    }).then(function (result) {
        res.redirect('/users')
    }).catch(function (erro) {
        console.log('Deu ruim => '+ erro);
    });
});


//Get a user
router.get('/:id', function (req, res) {
    db.users.findOne({
        where:{
            id:req.params.id
        }
    }).then(function (result) {
        res.render('user', {
            message: 'Listing Users',
            data: result
        })
    }).catch(function (erro) {
        console.log('Deu ruim => '+ erro);
    });
});


module.exports = router;
