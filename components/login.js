"use strict";

$("#loginButton").on("click", function (e) {
    e.preventDefault();
    let username = getUser("username");
    let password = getUser("password");
    if (username.length < 1) {
        $.growl({
            icon: "fa fa-info-circle",
            message: "Please enter a username",
        }, {
            type: "danger",
            allow_dismiss: true,
            offset: {
                x: 20,
                y: 85
            },
            spacing: 10,
            z_index: 1031,
            delay: 2500,
            timer: 1000,
            mouse_over: false,
            animate: {
                enter: "animated bounceInLeft",
                exit: "animated bounceOutLeft"
            }
        });
    } else if (password.length < 1) {
        $.growl({
            icon: "fa fa-info-circle",
            message: "Please enter a password",
        }, {
            type: "danger",
            allow_dismiss: true,
            offset: {
                x: 20,
                y: 85
            },
            spacing: 10,
            z_index: 1031,
            delay: 2500,
            timer: 1000,
            mouse_over: false,
            animate: {
                enter: "animated bounceInLeft",
                exit: "animated bounceOutLeft"
            }
        });
    } else {
        $.ajax({
            url: "api/post/login/login.php",
            type: "POST",
            dataType: "json",
            data: {
                username: username,
                password: password
            },
            success: function (feedback) {
                if (feedback.error) {
                    $.growl({
                        icon: "fa fa-info-circle",
                        message: feedback.error,
                    }, {
                        type: "danger",
                        allow_dismiss: true,
                        offset: {
                            x: 20,
                            y: 85
                        },
                        spacing: 10,
                        z_index: 1031,
                        delay: 2500,
                        timer: 1000,
                        mouse_over: false,
                        animate: {
                            enter: "animated bounceInLeft",
                            exit: "animated bounceOutLeft"
                        }
                    });
                } else {
                    let loginValid = JSON.stringify(feedback);
                    localStorage.setItem("validUsername", loginValid);
                    if (feedback.uid) {
                        window.location = 'pages/dashboard/dashboard.html#hmenu';
                    }
                }
            }
        })
    }

});

function getLoginSession() {
    let loginSession = localStorage.getItem("validUsername");
    if (!loginSession) {
        // window.location = "index.html";

    } else {
        let users = JSON.parse(loginSession);
        //console.log(users);
        if (users.uid) {
            window.location = 'pages/dashboard/dashboard.html#hmenu';
        }
    }
    return false;
}

$(document).ready(function () {
    getLoginSession();
});

function getUser(id) {
    return document.getElementById(id).value;
}