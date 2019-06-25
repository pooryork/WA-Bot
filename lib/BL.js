const fs = require("fs");

function testMenu(menuDesired,userPhone){

    if(getUser(userPhone).menu == menuDesired)
        return true;
    else
        return false;
}

function createUser(phone) {
    let testDB = JSON.parse(fs.readFileSync("testDB.json", "utf8"));

    testDB.users.push({
        "name":"",
        "phone":phone,
        "menu":"main"
    });

    fs.writeFileSync("testDB.json", JSON.stringify(testDB))
}

function sendResponse(type,obj,el,SettingsAll = [],phone) {

    switch (type) {
        case "staticWords":
            let funcName = obj[el].funcName;

            if(obj[el][funcName] != undefined){
                return {result:"ok",data:{funcName:"anonimFunc",result:obj[el][funcName]()}};
            } else
                return {result:"ok",data:{funcName:funcName}};
        break;

        case "keyWords":
            return {result:"ok",data:{funcName:el}};
        break;

        case "menus":
            let info = obj[el-1];

            if(info.type == 'redirect') {
                let newMenu = info.menuName;
                swapMenu(phone,newMenu);
                let newMenuItems = SettingsAll.menus[newMenu].items;
                let newMenuRes = [];
                for(let i=0; i<newMenuItems.length; i++)
                    newMenuRes.push(newMenuItems[i].text);

                return {result: "ok", data: {type: info.type, newMenu: newMenuRes}};
            }else
                return {result:"ok",data:{type:info.type, funcName:info.funcName}};
        break;
    }

    return sendError("type","undefined type from sendResponse");
}

function getUser(phone) {
    let testDB = JSON.parse(fs.readFileSync("testDB.json", "utf8"));
    return testDB.users.find(x => x.phone == phone);
}

function sendError(type,data) {

    return {
        result:"error",
        error:{
            type : type,
            text : data
        }
    };

}

function NIchoose(msg,keywords) { //нИче се?
    for (funcName in keywords)
        if(keywords[funcName].words.find((element)=>{return (msg.toLowerCase().indexOf(element) >= 0)? true : false}) !== undefined)
            return funcName
    return false
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function swapMenu(phone,menu){
    let testDB = JSON.parse(fs.readFileSync("testDB.json", "utf8"));

    let user = getUser(phone);
    user.menu = menu;
    let userId = testDB.users.findIndex((obj => obj.phone == phone));

    testDB.users[userId] = user;

    fs.writeFileSync("testDB.json", JSON.stringify(testDB));
}

class BLogic {
    constructor(settings = {}) {
        console.log("Bot Logic by gt99 init");
        this.settings = settings;
    }

    route(info = {}){



        let message = info.body;
        let userPhone = info.author;



        if(getUser(userPhone) == undefined)
            createUser(userPhone);

        if(this.settings.useStaticWords){

            for (let key in this.settings.staticWords)
                if (key == message)
                    if (this.settings.staticWords[key].useOnlyIn != undefined)
                        if (this.settings.useMenus) {
                            for (let i = 0; i < this.settings.staticWords[key].useOnlyIn.length; i++)
                                if (testMenu(this.settings.staticWords[key].useOnlyIn[i],userPhone))
                                    return sendResponse("staticWords",this.settings.staticWords,key);

                            return sendError("menu","not this menu!");

                        } else return sendError("menuModul","Modul menu not active");

                    else return sendResponse("staticWords",this.settings.staticWords,key);
        }

        if(this.settings.useKeyWords){
            let funcName = NIchoose(message,this.settings.keyWords);

            if(funcName != false) {
                if (this.settings.keyWords[funcName].useOnlyIn != undefined)
                    if (this.settings.useMenus) {
                        for (let i = 0; i < this.settings.keyWords[funcName].useOnlyIn.length; i++)
                            if (testMenu(this.settings.keyWords[funcName].useOnlyIn[i],userPhone))
                                return sendResponse("keyWords",this.settings.keyWords,funcName);

                        return sendError("menu","not this menu!");

                    } else return sendError("menuModul","Modul menu not active");

                else return sendResponse("keyWords",this.settings.keyWords,funcName);
            }

        }

        if(this.settings.useMenus){
            let userMenuNow = getUser(userPhone).menu;

            if(!this.settings.menus.titles.find(x => x == userMenuNow))
                return sendError("menu","menu not found!");

            let menu = this.settings.menus[userMenuNow].items;

            if(isNumeric(message) && !(message.indexOf(".") >= 0)? true:false && message > 0)
                return sendResponse("menus", menu, message,this.settings,userPhone);

        }


        return sendError("message","undefined command");

    }
}
module.exports = BLogic;