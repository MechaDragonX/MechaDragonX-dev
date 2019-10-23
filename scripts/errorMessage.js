let random = Math.floor((Math.random() * 5));
let obj;

$(document).ready(function() {
    switch(random) {
        case 0:
            obj = $("#message").text("o_0\nResource not found");
            obj.html(obj.html().replace(/\n/g,'<br/>'));
            break;
        case 1:
            $("#message").css("font-family", "Famicom");
            $("#message").css("font-size", 18)
            obj = $("#message").text("うわー！　404ダヨー！！\nこのサービスは見つかりません");
            obj.html(obj.html().replace(/\n/g,'<br/>'));
            break;
        case 2:
            obj = $("#message").text("I AM ERROR\nResource not found");
            obj.html(obj.html().replace(/\n/g,'<br/>'));
            break;
        case 3:
            obj = $("#message").text("GAME OVER\nRETURN OF GANON\nResource not found");
            obj.html(obj.html().replace(/\n/g,'<br/>'));
            break;
        case 4:
            obj = $("#message").text("A WILD MISSINGNO APPEARED!\nResource not found");
            obj.html(obj.html().replace(/\n/g,'<br/>'));
            break;
        case 5:
            obj = $("#message").text("Resource not found");
            obj.html(obj.html().replace(/\n/g,'<br/>'));
            break;
    }
});