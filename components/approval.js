'use strict';

$(document).ready(function () {
});

$("#btnFetchStudents").click(function () {
    let program = inputValues("programme"),
        klass = inputValues("klass");
    if (program.length < 1) {
        $.growl({
            icon: "fa fa-info-circle",
            message: "Select programme",
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
    } else if (klass.length < 1) {
        $.growl({
            icon: "fa fa-info-circle",
            message: "Select Class",
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
            url: "../../api/post/approval/fetchrecords.php",
            type: "POST",
            dataType: "json",
            data: {
                pid: program,
                kid: klass
            },
            success: function (data) {
                if (data.result === 'error') {
                    let rec = `<tr><td colspan="6" class="text-center text-danger">${data.message}</td></tr>`;
                    $("#changeStudentsStatus").html(rec);
                } else {
                    let newStatus, textColor;
                    if (data.length === 1) {
                        if (data[0].status == 'Active') {
                            newStatus = "Deactivate";
                            textColor = "text-danger";
                        } else {
                            newStatus = "Activate";
                            textColor = "text-primary";
                        }
                        let rec = `
                    <tr>
                    <td>${data[0].idnumber}</td>
                    <td>${data[0].name}</td>
                    <td>${data[0].program}</td>
                    <td>${data[0].klass}</td>
                    <td>${data[0].status}</td>
                    <td><a href="javascript:" class="${textColor}" onclick="changeStatus(${data[0].stid})"><i class="fa fa-refresh"></i> ${newStatus}</a></td>
                    </tr>
                    `;
                        $("#changeStudentsStatus").html(rec);
                    } else {
                        let rec = "";
                        for (let res of data) {
                            if (res.status == 'Active') {
                                newStatus = "Deactivate";
                                textColor = "text-danger";
                            } else {
                                newStatus = "Activate";
                                textColor = "text-primary";
                            }
                            rec += `<tr>
                    <td>${res.idnumber}</td>
                    <td>${res.name}</td>
                    <td>${res.program}</td>
                    <td>${res.klass}</td>
                    <td>${res.status}</td>
                    <td><a href="javascript:" class="${textColor}" onclick="changeStatus(${res.stid})"><i class="fa fa-refresh"></i> ${newStatus}</a></td>
                    </tr>`;
                        }
                        $("#changeStudentsStatus").html(rec);
                    }
                }
            }
        })
    }
});

function changeStatus(id) {
    let editid = id;
    $.confirm({
        title: 'Confirm Change!',
        content: 'You are about to change the status of the student. Are you sure you want to proceed?',
        autoClose: 'cancel|10000',
        buttons: {
            Yes: function () {
                $.ajax({
                    url: "../../api/post/approval/changestatus.php",
                    type: "POST",
                    dataType: "JSON",
                    data: {
                        stid: editid
                    },
                    success: function (data) {
                        if (data.result === 'error') {
                            let rec = `<tr><td colspan="6" class="text-center text-danger">${data.message}</td></tr>`;
                            $("#changeStudentsStatus").html(rec);
                        } else {
                            let newStatus, textColor;
                            if (data.length === 1) {
                                if (data[0].status == 'Active') {
                                    newStatus = "Deactivate";
                                    textColor = "text-danger";
                                } else {
                                    newStatus = "Activate";
                                    textColor = "text-primary";
                                }
                                let rec = `
                    <tr>
                    <td>${data[0].idnumber}</td>
                    <td>${data[0].name}</td>
                    <td>${data[0].program}</td>
                    <td>${data[0].klass}</td>
                    <td>${data[0].status}</td>
                    <td><a href="javascript:" class="${textColor}" onclick="changeStatus(${data[0].stid})"><i class="fa fa-refresh"></i> ${newStatus}</a></td>
                    </tr>
                    `;
                                $("#changeStudentsStatus").html(rec);
                            } else {
                                let rec = "";
                                for (let res of data) {
                                    if (res.status == 'Active') {
                                        newStatus = "Deactivate";
                                        textColor = "text-danger";
                                    } else {
                                        newStatus = "Activate";
                                        textColor = "text-primary";
                                    }
                                    rec += `<tr>
                    <td>${res.idnumber}</td>
                    <td>${res.name}</td>
                    <td>${res.program}</td>
                    <td>${res.klass}</td>
                    <td>${res.status}</td>
                    <td><a href="javascript:" class="${textColor}" onclick="changeStatus(${res.stid})"><i class="fa fa-refresh"></i> ${newStatus}</a></td>
                    </tr>`;
                                }
                                $("#changeStudentsStatus").html(rec);
                            }
                        }
                    }
                });
            },
            cancel: function () {
                $.alert('Delete action canceled!', 'Canceled!');
            }
        }
    });

}

function inputValues(id) {
    return document.getElementById(id).value;
}