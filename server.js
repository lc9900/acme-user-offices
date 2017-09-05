const express = require('express');
const app = express();
const path = require('path');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const db = require('./models');
const utils = require('./utils');
const userRouter = require('./routes/users');
const officeRouter = require('./routes/offices');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use('/custom', express.static(path.join(__dirname, 'source')));

app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    noCache: true
});

var port = process.env.PORT || 3000;
app.listen(port, () => {
    utils.inform(`Webserver listing on port ${port}`);
    db.syncAndSeed()
        .catch( err => {
            throw err;
        });
})

app.get('/', (req, res, next) => {
    db.extractAll()
        .then(result => {
            res.render('index', result);
            // res.json(result);
        })
        .catch(next);
});

app.use('/users', userRouter);
app.use('/offices', officeRouter);

app.use((error, req, res, next) => {
    res.render('error', {error});
})
