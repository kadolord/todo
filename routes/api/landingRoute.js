const router = require('express').Router();
const TodoModel  = require('../../models/todoModel');

router.route('/').get((req,res) => {
    return TodoModel.findAll()
    .then((todos) => {
        res.json(todos);
    })
    .catch((err) => {
        res.json(err);
    })
});

router.route('/addTodo').post((req,res) => {
    console.log(req.body);
    //model
    return TodoModel.create({
        title: req.body.title
    })
    .then(() => {
        console.log('Created');
    })
    .catch((err) => {
        console.log(err);
    })
});

router.route('/updateTodo/:id').post((req,res) => {
    const id = req.params.id;
    const title = req.body.title;
    TodoModel.update({ 
        title: title
    },
    { where: { id: id } })
    .then(() => {
        console.log('Updated')
    }).catch((err) => {
        console.log(err)
    })
});

router.route('/deleteTodo/:id').post((req,res) => {
    const id = req.params.id;
    return TodoModel.destroy({
        where: {id : id}
    }).then(() => {
        console.log('deleted')
    }).catch((err) => {
        console.log(err);
    })
})


module.exports = router;