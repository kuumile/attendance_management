function countProgram() {
    $.ajax({
        url: '../../api/post/dashboard/countprogram.php',
        type: 'POST',
        dataType: 'json',
        success: function (data) {
            $("#pid").html(data.result);
        }
    });
}

function countStudents() {
    $.ajax({
        url: '../../api/post/dashboard/countstudents.php',
        type: 'POST',
        dataType: 'json',
        success: function (data) {
            $("#stid").html(data.result);
        }
    });
}

function countactiveStudent() {
    $.ajax({
        url: '../../api/post/dashboard/countactivestudents.php',
        type: 'POST',
        dataType: 'JSON',
        success: function (feedback) {
            $("#astid").html(feedback.result);
        }
    });
}

function countinactiveStudent() {
    $.ajax({
        url: '../../api/post/dashboard/countinactivestudents.php',
        type: 'POST',
        dataType: 'JSON',
        success: function (feedback) {
            $("#istid").html(feedback.result);
        }
    });
}

(function ($) {
    countProgram();
    countStudents();
    countactiveStudent();
    countinactiveStudent();
})(jQuery);