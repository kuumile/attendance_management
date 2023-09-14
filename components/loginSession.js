"use strict";

// function logoutUserNow() {
//
//     let currentSession = localStorage.removeItem("validUsername");
//     let checkSession = localStorage.getItem("validUsername");
//     if (!checkSession) {
//         window.location = "../../index.html";
//     }
//
// }


function getLoginSession() {
    let loginSession = localStorage.getItem("validUsername");
    if (!loginSession) {
        window.location = "../../index.html";
    } else {
        let loginSession = localStorage.getItem("validUsername");
        let users = JSON.parse(loginSession);
        //console.log(users);
        $("#loginUserName").html(users.name);
        $("#loginUsers").html(users.name);
        //$("#user_id").val(users.uid);
    }

}

$(document).ready(function () {
    getLoginSession();
});