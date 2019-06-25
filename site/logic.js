let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let urlencodedParser = bodyParser.urlencoded({ extended: false });
let passwordHash = require('password-hash');

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
  res.writeHead(302, {
    'Location': '/login'
  });
  res.end();
});

app.get('/login', (req,res) => {
  res.sendFile(__dirname + '/login.html');
});

app.post('/login', urlencodedParser, function (req, res) {
  let data = req.body;
  if (!data) return res.sendStatus(400);
  if (data.type == null || data.type == undefined) return res.sendStatus(400);
  switch (data.type) {
    case 'login':

    break;
    case 'register':
      if (data.email  == null || data.password == null || data.name == null) return res.sendStatus(400);
      let hPassword = passwordHash.generate(data.password);

    break;

    default: return res.sendStatus(400);

  }



  res.send('welcome, ' + data.email);
  console.log(req.body);
});

app.listen(3000);
let mysql= require('mysql');
var connection = mysql.createConnection({
  host : "a0300059.xsph.ru",
  user : "a0300059_WTbot",
  password : "UxCH3vpu",
  database : "a0300059_WTbot",
});

async function main(){
  let res = await dbQuery('SELECT * FROM `WTBotClients` WHERE `id`=?',[1]);
  console.log(res);
}
async function main_insert(){
  let res = await dbQuery('INSERT INTO `WTBotClients`(`phone`, `name`, `menu`,`hPassword`,`email`) VALUES (?,?,?,?,?)', ['123123123','test111','test11111','dgjdsfgdfjgidfj','hyi@yandex.ru']);
  console.log(res);
}

main();
main_insert();
async function dbQuery(...args) {
  return new Promise((resolve, reject) => {
    connection.query(args[0], args[1], (err, res) => {
      if (err) return reject(new Error(err));
      return resolve(res)
    }, args[3]);
  })
}

/*
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
connection.query('INSERT INTO `WTBotClients`(`phone`, `name`, `menu`,'hashedPassword') VALUES (?,?,?,?)', ['4564564564654','test','test1'], function (error, results, fields) {
  if (error) throw error;
  console.log(results.insertId);
});


connection.query('SELECT * FROM `WTBotClients` WHERE `id`=?', ['1'], function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});*/
