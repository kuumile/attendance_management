$(document).ready(function () {
    loadProgramOption();
});

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

$("#programme").change(function () {
    let program = document.getElementById("programme").value;
    $.ajax({
        url: "../../api/post/card/loadsubject.php",
        type: "POST",
        dataType: "json",
        data: {
            program: program
        },
        success: function (feedback) {
            if (feedback.length === 1) {
                let option = `<option value="${feedback[0].sbjid}">${feedback[0].subject}</option>`;
                $("#subject").html(option);
            } else {
                let option = '<option value=""></option>';
                for (let options of feedback) {
                    option += `<option value="${options.sbjid}">${options.subject}</option>`
                }
                $("#subject").html(option);
            }
        }
    })

});