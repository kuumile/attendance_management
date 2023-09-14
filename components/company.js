"use strict";

$("#companyForm").on("submit", function (e) {
    e.preventDefault();

    $.ajax({
        url: "../../api/post/company/addcompany.php",
        type: "POST",
        dataType: "JSON",
        data: new FormData(this),
        contentType: false,
        cache: false,
        processData: false,
        success: function (data) {
            if (data) {
                displayCompanyDetails();
            }
        }
    })
});

function displayCompanyDetails() {
    $.ajax({
        url: "../../api/post/company/fetchdata.php",
        type: "POST",
        dataType: "JSON",
        success: function (data) {
            if (data.error) {
                $("#company_data").html('');
            } else {
                let tr = `
<div class="col-md-4 col-xs-12"><img src="${'../../' + data.logo}" width="500px"></div>
<div class="col-md-8 col-xs-12 h1">${data.cname}</div>
<div class="col-md-8 col-xs-12 h3">${data.email}</div>
<div class="col-md-8 col-xs-12"><a href="javascript:" class="btn btn-danger btn-xs" id="deletecompany" onclick="deleteCompanyAccount(${data.cid})"><i class="fa fa-trash"></i> Delete company Account</a> </div>
<script></script>
`
                $("#company_data").html(tr);
            }
        }
    })
}


function deleteCompanyAccount(id) {
    let del = id;
    $.confirm({
        title: 'Confirm delete!',
        content: 'You are about to delete a company account. Are you sure you want to proceed?',
        autoClose: 'cancel|10000',
        buttons: {
            Yes: function () {
                $.ajax({
                    url: "../../api/post/company/deletecompany.php",
                    type: "POST",
                    dataType: "JSON",
                    data: {
                        cid: del
                    },
                    success: function (feedback) {
                        displayCompanyDetails();
                    }
                });
            },
            cancel: function () {
                $.alert('Delete action canceled!', 'Canceled!');
            }
        }
    });
    //console.log(del);
}


// function getCompany(id) {
//     return document.getElementById(id).value;
// }

$(document).ready(function () {
    displayCompanyDetails();
})