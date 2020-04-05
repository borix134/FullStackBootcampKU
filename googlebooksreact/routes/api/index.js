const router = require('express').Router();
const Book = require('../../db/Book')

router.post('/books', (req, res) => {
    Book.findOne(req.body).then((res) => {
        if (res === null){
            Book.create(req.body,(err) => {
                if (err) throw err;
            });
        }
    });
    res.end();
});

router.get('/books', (req, res) => {
    Book.find({}).then((books) => {
        res.json(books);
    });
});

router.post('/book_id',(req, res) => {
    Book.findOne(req.body).then((book) => {
        if (book === null){
            res.end();
            return 0;
        }
        res.json({id: book._id});
    })
})

router.delete('/books/:id', (req, res) => {
    console.log(req.params.id);
    Book.remove({_id: req.params.id}, (err) => {
        if (err) throw err;
    });
    res.end();
});

module.exports = router;
