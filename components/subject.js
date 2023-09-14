$(document).ready(function () {
    getSubjects();
});


$("#subjectForm").submit(function (e) {
    e.preventDefault();
    $.ajax({
        url: "../../api/post/subject/subject.php",
        type: "POST",
        dataType: "JSON",
        data: $("#subjectForm").serialize(),
        success: function (feedback) {
            getSubjects();
            document.getElementById("subject").value = "";
            document.getElementById("code").value = "";
            document.getElementById("sbjid").value = "";
            if (feedback.result === 'success') {
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
            } else if (feedback.result === 'error') {
                $.growl({
                    icon: "fa fa-info-circle",
                    message: feedback.message,
                }, {
                    type: "error",
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
    });
});

function getSubjects() {
    $.ajax({
        url: "../../api/post/subject/fetch.php",
        type: "POST",
        dataType: "json",
        success: function (feedback) {
            if (feedback.result === "error") {
                $("#subject_data").html(`<td colspan="4" class="text-center text-danger">${feedback.message}</td>`);
            } else {

                if (feedback.length === 1) {

                    let tr = `
                <tr>
                <td>${feedback[0].program}</td>
                <td>${feedback[0].code}</td>
                <td>${feedback[0].subject}</td>
                <td><a href="javascript:" class="text-primary" onclick="editSubject(${feedback[0].sbj})"><i class="fa fa-edit"></i> Edit</a> <a href="javascript:" class="text-danger" onclick="deleteSubject(${feedback[0].sbj})"><i class="fa fa-trash"></i> Delete</a> </td>
</tr>
                `;
                    $("#subject_data").html(tr);
                } else {
                    let tr = "";
                    for (let pro of feedback) {
                        tr += `
                <tr>
                <td>${pro.program}</td>
                <td>${pro.code}</td>
                <td>${pro.subject}</td>
                <td><a href="javascript:" class="text-primary" onclick="editSubject(${pro.sbj})"><i class="fa fa-edit"></i> Edit</a> <a href="javascript:" class="text-danger" onclick="deleteSubject(${pro.sbj})"><i class="fa fa-trash"></i> Delete</a> </td>
</tr>
                `;
                    }
                    $("#subject_data").html(tr);
                }
            }
        }
    });
}

function editSubject(id) {
    let sbj = id;
    $.ajax({
        url: "../../api/post/subject/editsubject.php",
        type: "post",
        dataType: "json",
        data: {
            sbj: sbj
        },
        success: function (data) {
            if (data) {
                document.getElementById("subject").value = data.subject;
                document.getElementById("code").value = data.code;
                document.getElementById("programme").value = data.program;
                document.getElementById("sbjid").value = data.sbj;

            }
        }
    })
}

function deleteSubject(id) {
    let delid = id;
    $.confirm({
        title: 'Confirm delete!',
        content: 'You are about to delete this subject. Are you sure you want to proceed?',
        autoClose: 'cancel|10000',
        buttons: {
            Yes: function () {
                $.ajax({
                    url: "../../api/post/subject/deletesubject.php",
                    type: "POST",
                    dataType: "JSON",
                    data: {
                        sbjid: delid
                    },
                    success: function (data) {
                        getSubjects();
                    }
                });
            },
            cancel: function () {
                $.alert('Delete action canceled!', 'Canceled!');
            }
        }
    });
}