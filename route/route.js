"use strict";

function mainClickHandler(url) {
    let path = url;
    window.location = path + ".html";
}

$(document).ready(function () {


    $("a#mobilemenu").click(function () {
        let menu = $(this).attr("name");
        $("#mainApp").load("pages/" + menu + ".html");
    });
});