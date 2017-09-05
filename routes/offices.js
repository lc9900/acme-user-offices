const router = require('express').Router();
const Office = require('../models/Office');

module.exports = router;

router.get('/', (req, res) => {
    return Office.extractAllOffices()
                .then(offices => {
                    res.json(offices);
                })
                .catch(err => { throw err; });
});

router.delete('/:id', (req, res) => {
    return Office.removeOffice(req.params.id*1)
                    .then(() => {
                        res.send('Office removed');
                    })
                    .catch(err => { throw err; });
});
