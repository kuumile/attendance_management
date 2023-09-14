"use strict";

// function topHeader() {
//     $("#top_header").load("../../menu/top_header.html");
// }
//
// function mobileMenu() {
//     $("#mobile_menu").load("../../menu/mobile_menu.html");
// }
//
// function mainMenu() {
//     $("#main_menu").load("../../menu/main_menu.html");
// }

let username = getId("username"),
    email = getId("email");
username.addEventListener("blur", function () {
    let usernamedata = getValue("username");
    $.ajax({
        url: "../../api/post/user/checkusername.php",
        type: "POST",
        dataType: "json",
        data: {username: usernamedata},
        success: function (data) {
            if (data.result === "exist") {
                $("#usernameerror").html(data.message);
            } else {
                $("#usernameerror").html("");
            }
        }
    })
});
email.addEventListener("blur", function () {
    let emaildata = getValue("email");
    $.ajax({
        url: "../../api/post/user/checkemail.php",
        type: "POST",
        dataType: "json",
        data: {email: emaildata},
        success: function (data) {
            if (data.result === "exist") {
                $("#emailerror").html(data.message);
            } else {
                $("#emailerror").html("");
            }
        }
    })
});


function loadTable() {
    $.ajax({
        url: "../../api/post/user/fetchdata.php",
        type: "POST",
        dataType: "json",
        success: function (data) {
            if (data.result === "not_found") {
                let placeholder = document.querySelector("#users_data");
                let out = `
                    <tr>
                    <td colspan="4" class="text-center">No records found</td>
                    </tr>
                    `

                placeholder.innerHTML = out;
            } else {
                let log = localStorage.getItem("validUsername");
                let userdata = JSON.parse(log);
                let placeholder = document.querySelector("#users_data");
                
                let out = "";
                for (let users of data) {
                    let result = JSON.stringify(users) === JSON.stringify(userdata);
                    if (result == true) {

                    } else {
                        out += `
                    <tr>
                    <td>${users.name}</td>
                    <td>${users.email}</td>
                    <td>${users.username}</td>
                    <td><a href="javascript:" id="edituser" name="${users.uid}" class="text-primary" onclick="editUser(${users.uid})"><i class="fa fa-edit"></i> Edit</a> <a href="javascript:" id="deluser" name="${users.uid}" onclick="deleteUser(${users.uid})" class="text-danger"><i class="fa fa-trash"></i> Delete</a></td>
                    </tr>
                    `
                    }
                }
                placeholder.innerHTML = out;
            }
        }

    });
}

function editUser(id) {
    let editid = id;
    $.ajax({
        url: "../../api/post/user/edituser.php",
        type: "POST",
        dataType: "json",
        data: {
            uid: editid
        },
        success: function (data) {
            console.log(data);
            document.getElementById("uid").value = data['uid'];
            document.getElementById("username").value = data['username'];
            document.getElementById("name").value = data['name'];
            document.getElementById("email").value = data['email'];
            document.getElementById("password").value = data['password'];

        }
    })

}

function deleteUser(id) {
    let editid = id;
    $.confirm({
        title: 'Confirm delete!',
        content: 'You are about to delete a user account. Are you sure you want to proceed?',
        autoClose: 'cancel|10000',
        buttons: {
            Yes: function () {
                $.ajax({
                    url: "../../api/post/user/deleteuser.php",
                    type: "POST",
                    dataType: "JSON",
                    data: {
                        uid: editid
                    },
                    success: function (feedback) {
                        loadTable();
                    }
                });
            },
            cancel: function () {
                $.alert('Delete action canceled!', 'Canceled!');
            }
        }
    });

}

$(document).ready(function () {
    $("#data-table-basic").dataTable();
    loadTable();
    // topHeader();
    // mainMenu();
    // mobileMenu();
});

document.getElementById("saveuser").addEventListener("click", function (e) {
    e.preventDefault();
    let uid = getValue("uid"),
        username = getValue("username"),
        name = getValue("name"),
        email = getValue("email"),
        password = getValue("password");
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
    } else if (name.length < 1) {
        $.growl({
            icon: "fa fa-info-circle",
            message: "Please enter full name",
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
    } else if (email.length < 1) {
        $.growl({
            icon: "fa fa-info-circle",
            message: "Please enter email address",
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
            icon: "fa fa-info-circle ",
            message: "Please enter password",
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
            url: "../../api/post/user/adduser.php",
            type: "POST",
            dataType: "json",
            data: {
                uid: uid,
                username: username,
                name: name,
                email: email,
                password: password
            },
            success: function (data) {
                loadTable();
                $.growl({
                    icon: "fa fa-check ",
                    message: data.message,
                }, {
                    type: "success",
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
            }
        })
    }
});

function getValue(id) {
    return document.getElementById(id).value;
}

function getId(id) {
    return document.getElementById(id);
}