function loadProgramme() {
    $.ajax({
        url: '../../api/post/program/fetchdata.php',
        type: 'POST',
        dataType: 'json',
        success: function (feedback) {
            if (feedback.length === 1) {
                let option = `<option value="${feedback[0].pid}">${feedback[0].program}</option>`;
                $("#programme").html(option);
            } else {
                let option = `<option value="">Select Programme</option>`;
                for (let options of feedback) {
                    option += `<option value="${options.pid}">${options.program}</option>`
                }
                $("#programme").html(option);
            }
        }
    });
}


function loadKlass() {
    let loadid = document.getElementById("programme").value;
    $.ajax({
        url: "../../api/post/program/loadklass.php",
        type: "POST",
        dataType: "json",
        data: {
            pid: loadid
        },
        success: function (feedback) {
            if (feedback.length === 1) {
                let option = `<option value="">Select Class</option><option value="${feedback[0].kid}">${feedback[0].kname}</option>`;
                $("#klass").html(option);
            } else {
                let option = `<option value=""></option>`;
                for (let options of feedback) {
                    option += `<option value="${options.kid}">${options.kname}</option>`
                }
                $("#klass").html(option);
            }
        }
    });
}

function getVerifiedStudents() {
    let pid = document.getElementById("programme").value,
        kids = document.getElementById("klass").value,
        title = document.getElementById("titles").value,
        vdate = document.getElementById("vdate").value;
    $.ajax({
        url: "../../api/post/card/fetchcards.php",
        type: "POST",
        dataType: "json",
        data: {
            pid: pid,
            kid: kids,
            title: title,
            vdate: vdate
        },
        success: function (feedback) {
            if (feedback.result === "error") {
                let table = "";
                table = `<tr>
<td colspan="8" class="text-center text-danger">${feedback.message}</td>
</tr>
`;
                $("#htitle").html(title);
                $("#svdate").html(`<span style='font-weight: bold'>Date: </span> ${vdate}`);
                $("#verifiedStudents").html(table);
            } else if (feedback.length === 1) {
                let i = 1;
                let table = `
                    <tr>
                    <td>${i}</td>
                    <td>${feedback[0].idnumber}</td>
                    <td>${feedback[0].name}</td>
                    <td>${feedback[0].program}</td>
                    <td>${feedback[0].subject}</td>
                    <td>${feedback[0].klass}</td>
                    <td>${feedback[0].status}</td>
                    <td>${feedback[0].dor}</td>
                    </tr>
                    `;
                $("#htitle").html(title);
                $("#svdate").html(`<span style='font-weight: bold'>Date: </span> ${vdate}`);
                $("#verifiedStudents").html(table);
            } else {
                let table = "";
                let i = 0;
                for (let std of feedback) {
                    i++;
                    table += `
                        <tr>
                        <td>${i}</td>
                    <td>${std.idnumber}</td>
                    <td>${std.name}</td>
                    <td>${std.program}</td>
                    <td>${std.subject}</td>
                    <td>${std.klass}</td>
                    <td>${std.status}</td>
                    <td>${std.dor}</td>
                    </tr>
                        `;
                }
                $("#htitle").html(title);
                $("#svdate").html(`<span style='font-weight: bold'>Date: </span> ${vdate}`);
                $("#verifiedStudents").html(table);
            }
        }
    })
}

$("#programme").on("change", loadKlass);
$("#btnFetch").on("click", getVerifiedStudents);
(function ($) {
    loadProgramme();
})(jQuery);