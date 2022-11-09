const express = require('express');
const middleWare2 = require('./middleWare');
const app = express();
const route = express.Router();
route.use(middleWare2)
const name1 = require('./data')

console.log(name1);

const middleWare = (req, res, next) => {
    // for (let i = 0; i < name1.length; i++) {
        if (req.query.name != "mobashir") {
            res.send("you are not register. so, you can't see plese enter ?name=mobashir in the url")
        }
        else {
            next()
        }
    // }
}
app.use(middleWare);

app.get('/home', (req, res) => {
    res.send("welcome to home page");
})

app.get('/about', (req, res) => {
    res.send("welcome to about page");
})

app.get('/contact', (req, res) => {
    res.send("welcome to contact page");
})

app.get('/resume', (req, res) => {
    res.send("welcome to resume page");
})

app.get('/profile', (req, res) => {
    res.send("welcome to profile page");
})

route.get('/18+', (req, res) => {
    res.send("welcome to 18+ page");
})

route.get('/adult', (req, res) => {
    res.send("welcome to adult page");
})
app.use(route)

app.listen(1786, () => {
    console.log("app is running on 1786 port");
})