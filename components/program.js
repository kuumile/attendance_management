"use strict";

$("#programForm").submit(function (e) {
    e.preventDefault();
    let program = getVal("programs");
    let pid = getVal("pid");
    $.ajax({
        url: "../../api/post/program/addprogram.php",
        type: "POST",
        dataType: "json",
        data: {
            pid: pid,
            program: program
        },
        success: function (feedback) {

            if (feedback.result === "success") {
                getProgram();
                loadProgramOption();
                $.growl({
                    icon: "fa fa-info-circle",
                    message: feedback.message,
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
            } else if (feedback.result == "error") {
                $.growl({
                    icon: "fa fa-info-circle",
                    message: feedback.message,
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
            }
        }
    })

});

function getProgram() {
    $.ajax({
        url: "../../api/post/program/fetchdata.php",
        type: "POST",
        dataType: "json",
        success: function (feedback) {
            if (feedback.result === "error") {
                $("#program_data").html(`<td colspan="2" class="text-center text-danger">${feedback.message}</td>`);
            } else {

                if (feedback.length === 1) {

                    let tr = `
                <tr>
                <td>${feedback[0].program}</td>
                <td><a href="javascript:" class="text-primary" onclick="editProgram(${feedback[0].pid})"><i class="fa fa-edit"></i> Edit</a> <a href="javascript:" class="text-danger" onclick="deleteProgram(${feedback[0].pid})"><i class="fa fa-trash"></i> Delete</a> </td>
</tr>
                `;
                    $("#program_data").html(tr);
                } else {
                    let tr = "";
                    for (let pro of feedback) {
                        tr += `
                <tr>
                <td>${pro.program}</td>
                <td><a href="javascript:" class="text-primary" onclick="editProgram(${pro.pid})"><i class="fa fa-edit"></i> Edit</a> <a href="javascript:" class="text-danger" onclick="deleteProgram(${pro.pid})"><i class="fa fa-trash"></i> Delete</a> </td>
</tr>
                `;
                    }
                    $("#program_data").html(tr);
                }
            }
        }
    });
}

function deleteProgram(id) {
    let delid = id;
    $.confirm({
        title: 'Confirm delete!',
        content: 'You are about to delete this programme. Are you sure you want to proceed?',
        autoClose: 'cancel|10000',
        buttons: {
            Yes: function () {
                $.ajax({
                    url: "../../api/post/program/deleteprogram.php",
                    type: "POST",
                    dataType: "JSON",
                    data: {
                        pid: delid
                    },
                    success: function (data) {
                        getProgram();
                        loadProgramOption();
                    }
                });
            },
            cancel: function () {
                $.alert('Delete action canceled!', 'Canceled!');
            }
        }
    });
}

function editProgram(id) {
    let delid = id;
    $.ajax({
        url: '../../api/post/program/editprogram.php',
        type: 'POST',
        dataType: 'json',
        data: {
            pid: delid
        },
        success: function (data) {
            console.log(data);
            if (data) {
                $('#programs').val(data.program);
                $("#pid").val(data.pid);
            }
        }
    })
}

function loadProgramOption() {
    $.ajax({
        url: "../../api/post/program/fetchdata.php",
        type: "POST",
        dataType: "json",
        success: function (feedback) {
            if (feedback.length === 1) {
                let option = `<option value="${feedback[0].pid}">${feedback[0].program}</option>`;
                $("#programme").html(option);
            } else {
                let option = '<option value=""></option>';
                for (let options of feedback) {
                    option += `<option value="${options.pid}">${options.program}</option>`
                }
                $("#programme").html(option);
            }
        }
    });
}

// Add class codes

$("#klassForm").submit((event) => {
    event.preventDefault();
    let kname = getVal("kname"),
        pid = getVal("programme"),
        kid = getVal("kid");
    $.ajax({
        url: "../../api/post/program/addklass.php",
        type: "POST",
        dataType: "json",
        data: {
            kname: kname,
            pid: pid,
            kid: kid
        },
        success: function (data) {
            getKlass();
        }
    });
});

function getKlass() {
    $.ajax({
        url: "../../api/post/program/fetchklass.php",
        type: "POST",
        dataType: "json",
        success: function (data) {
            if (data.result === "norecords") {
                $("#klass_data").html(`<tr><td colspan="2" class="text-danger text-center">${data.message}</td></tr>`);
            } else {
                if (data.length === 1) {
                    $("#klass_data").html(`<tr><td>${data[0].kname}</td><td><a href="javascript:" onclick="editKlass(${data[0].kid})" class="text-primary"><i class="fa fa-edit"></i> Edit</a> <a href="javascript:" onclick="deleteKlass(${data[0].kid})" class="text-danger"><i class="fa fa-trash"></i> Delete</a></td></tr>`);
                } else {
                    let tr = "";
                    for (let rec of data) {
                        tr += `<tr>
<td>${rec.kname}</td>
<td><a href="javascript:" onclick="editKlass(${rec.kid})" class="text-primary"><i class="fa fa-edit"></i> Edit</a> <a href="javascript:" onclick="deleteKlass(${rec.kid})" class="text-danger"><i class="fa fa-trash"></i> Delete</a></td>
</tr>`;
                    }
                    $("#klass_data").html(tr);
                }
            }
        }
    })
}

const editKlass = (id) => {
    let editid = id;
    $.ajax({
        url: "../../api/post/program/editklass.php",
        type: "POST",
        dataType: "JSON",
        data: {kid: editid},
        success: function (data) {
            if (data) {
                $("kid").val(data.kid);
                $("#kname").val(data.kname);
                $("#programme").val(data.pid);
            }
        }
    });
}
const deleteKlass = (id) => {
    let delid = id;
    $.confirm({
        title: 'Confirm delete!',
        content: 'You are about to delete this class. Are you sure you want to proceed?',
        autoClose: 'cancel|10000',
        buttons: {
            Yes: function () {
                $.ajax({
                    url: "../../api/post/program/deleteklass.php",
                    type: "POST",
                    dataType: "JSON",
                    data: {
                        kid: delid
                    },
                    success: function (data) {
                        getKlass();
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
    getProgram();
    loadProgramOption();
    getKlass();
});

function getVal(id) {
    return document.getElementById(id).value;
}