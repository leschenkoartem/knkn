var regis = document.getElementById("regis");
var podregis = document.getElementById("podregis");
var numbr = document.getElementById('number');
var btn = document.getElementById("btn");
var listnum = document.getElementById("listnum");
var btdel = document.getElementById("del");
var forma = document.getElementById("form");

class User{
    constructor(uname, pass, number){
        this.uname = uname;
        this.pass = pass;
        this.number = number;
    }
}
var users = [];

function podreg(a, x){
    podregis.innerHTML = String(a);
    podregis.style.color = String(x);
    setTimeout(function(){podregis.innerHTML = "Введите даные для регистрации";
    podregis.style.color = "#9a7f9b";}, 2000);
    forma.inname.value = "";
    forma.pass.value = "";
    forma.number.value = "";
}

function mainadd(){
    var er = 0;
    var lst ="";
    document.getElementById("npn").innerHTML = "";
    var usr = new User(forma.inname.value, forma.pass.value, forma.number.value);

    if (users.length < 1){
        podreg("Пользователь "+ forma.inname.value+" создан!",  "#22e600");
        users.push(usr);
    }else{
        for (var i=0; i<users.length; i++){
            if (forma.inname.value==users[i].uname && forma.number.value==users[i].number){
                podreg("Такой пользователь существует","#eb1e03");
                er++;
                break;
            }
        }
        if (er == 0){podreg("Пользователь "+ forma.inname.value+" создан!",  "#22e600");
        users.push(usr);
        }
    }

    for (var i=0; i<users.length; i++){
        lst += (i+1)+") "+users[i].uname + " : " + users[i].number + "<br \/>";
        listnum.innerHTML = lst;
    }
    return false;
}

        
function maindel(){
    var er = 0;
    var lst ="";
    for (var i=0; i<users.length; i++){
        if (forma.inname.value == users[i].uname && forma.pass.value == users[i].pass && forma.number.value == users[i].number){
            podreg("Пользователь "+ forma.inname.value+" удалён!", "#eef606");
            users.splice(i,1);
            er++;
        }else if((forma.inname.value == users[i].uname && forma.number.value == users[i].number) && forma.pass.value != users[i].pass ){
            podreg("Неправильный пароль пользователя","#eb1e03");
            er++;
        }
    }
    if (er==0){
        podreg("Такого пользователя нет","#eb1e03");
    }
    if(users.length == 0){
        lst ="Пока нет телефонов";
        listnum.innerHTML = lst;
        listnum.style.cssText
    }else{
    for (var i=0; i<users.length; i++){
        lst += (i+1)+") "+users[i].uname + " : " + users[i].number + "<br \/>";
        listnum.innerHTML = lst;
    }}
    return false;
}

function deladd(el){
    if(el.innerHTML=="Удаление пользователя"){
        el.innerHTML= "Регистрация пользователя";
        regis.innerHTML = "Удаление";
        podregis.innerHTML="Введите даные для удаления";
        btn.innerHTML = "Удалить";
        document.getElementById("form").onsubmit = maindel;
    }else{
        el.innerHTML= "Удаление пользователя";
        regis.innerHTML = "Регистрация";
        podregis.innerHTML="Введите даные для регистрации";
        btn.innerHTML = "Добавить";
        document.getElementById("form").onsubmit = mainadd;
    }
}