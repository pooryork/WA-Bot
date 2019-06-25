//Подключаем хуебесину
const mysql = require('mysql');
const app = require('express')();
const bodyParser = require('body-parser');
const request = require('request');
const WAController = require('./lib/WAC.js');
const BLogic = require('./lib/BL.js');
const fs = require("fs");
const testDB = JSON.parse(fs.readFileSync("testDB.json", "utf8"));

//настраиваем
const BLsettings = {
    useKeyWords : true,
    useMenus : true,
    useStaticWords : true,
    keyWords : {
        getTime : {
            words:['врем','час'],
            useOnlyIn : ["main"]
        },
        getDay : {
            words:['понедел', 'вторн', 'сред', 'четвер', 'пятниц', 'суббот','субот', 'воскр']
        }
    },
    menus : {
        titles:["main","admin"],
        main : {
            items:[
                {
                    text: "Сколько, бля, время?!",
                    type: "function",
                    funcName: "getTime"
                },
                {
                    text: "Какой, сука, день?!",
                    type: "function",
                    funcName: "getDay"
                },
                {
                    text: "Админ меню",
                    type: "redirect",
                    menuName: "admin"
                },
            ]
        },
        admin : {
            items:[
                {
                    text: "Какая-то админская хуета!",
                    type: "function",
                    funcName: "admin"
                },
                {
                    text: "Назад",
                    type: "redirect",
                    menuName: "main"
                }
            ]
        },
    },
    staticWords:{
        "!getAdmin" : {
            funcName : "getAdmin",
            useOnlyIn : ["admin"]
        },
        "!goMain" : {
            funcName : "goMain"
        },
        "!sayHello" : {
            funcName : "sayHello",
            sayHello : ()=>{return "hello"}
        }
    }
};
let WAC = new WAController("https://eu17.chat-api.com/instance39476/","1xzr32xmx0mzm5zo");
let BL = new BLogic(BLsettings);
app.use(bodyParser.json());


app.post("/webhook", (req, res) => {
    let route = WAC.route(req.body,{fromMe:false});


    if(route.type != "message")
        return res.send("no message");

    if(route.messages.length < 1)
        return res.send("no message for criteries");

    route.messages.forEach((msg) => {
        console.log(BL.route(msg));
    });


    res.send("ok");
});

app.listen(3000);
	