let express = require("express");
//let session = require('express-session')
let cookieSession = require('cookie-session');
let app = express();
let bodyParser = require("body-parser");
let passwordHash = require('password-hash');
let md5 = require('md5');
let mysql = require('mysql');
let mysqlSync = require('sync-mysql');
let unixtime = require('unixtime');
const SECRET_WORD = "0UCjN7ppZBkZYhU";
const routes = {
  login : "/login",
  cabinet : "/cabinet",
  editor : "/editor"
};

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
}));

let mysqlConfig = {
    host : "a0300059.xsph.ru",
    user : "a0300059_WTbot",
    password : "UxCH3vpu",
    database : "a0300059_WTbot",
};

let connectionSync = new mysqlSync(mysqlConfig);
let pool = mysql.createPool(mysqlConfig);
let connection = mysql.createConnection(mysqlConfig);

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/assets', express.static('public'));

app.get('/logout', (req,res) => {
    req.session.clientId = null;
    return res.redirect(routes.login);
});

app.get('/', (req,res) => {
    return res.redirect(routes.login);
});

app.get('/login', (req,res) => {
    if(verify(req))
        return res.redirect(routes.cabinet);
    else
        return res.render('login');
});

app.get('/cabinet', (req,res) => {
    if(verify(req))
        return res.render('cabinet');
    else
        return res.redirect(routes.login);
});

app.get('/editor', (req,res) => {
    if(verify(req))
        return res.render('editor');
    else
        return res.redirect(routes.login);
});

app.post('/login', function (req, res) {
    let data = req.body;

    if (!data || data.type == null || data.type == undefined) return res.send({status:"error", error:{type:"data", text:{eu:"data is null",ru:"данные пусты"}}});

    let resDBQuery = connectionSync.query("SELECT * FROM `WTBotClients` WHERE `email`=?",[data.email]);
    const User = resDBQuery[0];

        switch (data.type) {

        case 'login':
            if(User == undefined)
                return res.send({status:"error", error:{type:"user", text:{eu:"user is undefined",ru:"пользователь не обнаружен"}}});

            if(!passwordHash.verify(data.password,User.hPassword))
                return res.send({status:"error", error:{type:"user", text:{eu:"password incorrect",ru:"неверный пароль"}}});

            req.session.clientId = User.session;

            return res.send({status:"ok", response:{redirect:routes.cabinet,data:{}}});

        break;

        case 'register':
            if(User != undefined)
                return res.send({status:"error", error:{type:"user", text:{eu:"user already exists",ru:"пользователь уже существует"}}});

            let hPassword = passwordHash.generate(data.password);
            let session = md5(Date.now() + SECRET_WORD);
            req.session.clientId = session;

            connection.connect(function (err) {
                if (err) throw err;

                connection.query("INSERT INTO `WTBotClients`(`name`,`hPassword`,`email`,`session`) VALUES (?,?,?,?)",[data.name,hPassword,data.email,session], function (error) {
                    if (error) throw error;
                    return res.send({status:"ok", response:{redirect:routes.cabinet,data:{}}});
                });

                connection.end();
            });

        break;

        default: return res.sendStatus(400);

    }
});

app.listen(3000);

function verify(req) {

    if (req.session.clientId) {

        let resDBQuery = connectionSync.query("SELECT * FROM `WTBotClients` WHERE `session` = ?",[req.session.clientId]);
        const User = resDBQuery[0];

        if(User) return true;

        req.session.clientId = null;

    } else return false;

}


