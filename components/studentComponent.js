// noinspection JSPotentiallyInvalidUsageOfClassThis

showStudentTable = () => {
    $.ajax({
        url: '../../api/post/student/getstudents.php',
        type: 'POST',
        dataType: 'json',
        success: function (data) {
            if (data.result === 'error') {
                let rec = `<tr><td colspan="7" class="text-center text-danger">${data.message}</td></tr>`;
                $("#student_data").html(rec);
            } else {
                if (data.length === 1) {
                    let rec = `
                    <tr>
                    <td>${data[0].idnumber}</td>
                    <td>${data[0].name}</td>
                    <td>${data[0].program}</td>
                    <td>${data[0].klass}</td>
                    <td>${data[0].contact}</td>
                    <td>${data[0].status}</td>
                    <td><a href="javascript:" class="text-primary" onclick="editStudent(${data[0].stid})"><i class="fa fa-edit"></i> Edit</a> <a href="javascript:" class="text-primary" onclick="deleteStudent(${data[0].stid})"><i class="fa fa-trash"></i> Delete</a> </td>
                    </tr>
                    `;
                    $("#student_data").html(rec);
                } else {
                    let rec = "";
                    for (let res of data) {
                        rec += `<tr>
                    <td>${res.idnumber}</td>
                    <td>${res.name}</td>
                    <td>${res.program}</td>
                    <td>${res.klass}</td>
                    <td>${res.contact}</td>
                    <td>${res.status}</td>
                    <td><a href="javascript:" class="text-primary" onclick="editStudent(${res.stid})"><i class="fa fa-edit"></i> Edit</a> <a href="javascript:" class="text-danger" onclick="deleteStudent(${res.stid})"><i class="fa fa-trash"></i> Delete</a></td>
                    </tr>`;
                    }
                    $("#student_data").html(rec);
                }
            }
        }
    });
}

editStudent = (editid) => {
    let stid = editid;
    $.ajax({
        url: "../../api/post/student/editstudent.php",
        type: "POST",
        dataType: "json",
        data: {
            stid: stid
        },
        success: function (data) {
            if (data) {
                document.getElementById("stname").value = data.name;
                document.getElementById("stid").value = data.stid;
                document.getElementById("programme").value = data.program;
                document.getElementById("klass").value = data.klass;
                document.getElementById("idnumber").value = data.idnumber;
                document.getElementById("contact").value = data.contact;
                document.getElementById("status").value = data.status;
            }
        }
    });
}
deleteStudent = (delid) => {
    let stid = delid;
    $.confirm({
        title: 'Confirm delete!',
        content: 'You are about to delete a student records. Are you sure you want to proceed?',
        autoClose: 'cancel|10000',
        buttons: {
            Yes: function () {
                $.ajax({
                    url: "../../api/post/student/deletestudent.php",
                    type: "POST",
                    dataType: "JSON",
                    data: {
                        stid: stid
                    },
                    success: function (feedback) {

                        if (feedback.result === "success") {
                            showStudentTable();
                            $.growl({
                                icon: "fa fa-checked ",
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
                        } else {
                            $.growl({
                                icon: "fa fa-info-circle ",
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
                });
            },
            cancel: function () {
                $.alert('Delete action canceled!', 'Canceled!');
            }
        }
    });
}

class Student extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="form-element-list">
                        <div class="basic-tb-hd">
                            <h2>Input Text</h2>
                            <p>Text Inputs with different sizes by height and column.</p>
                        </div>
                        <form enctype="multipart/form-data" id="studentForm" method="post">
                            <div class="row">
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <input id="stid" name="stid" type="hidden">
                                    <div class="form-group ic-cmp-int">
                                        <div class="form-ic-cmp">
                                            <i class="notika-icon notika-support"></i>
                                        </div>
                                        <div class="nk-int-st">
                                            <input class="form-control" id="stname" name="stname"
                                                   placeholder="Full Name"
                                                   type="text" required="required">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <div class="form-group ic-cmp-int">
                                        <div class="form-ic-cmp">
                                            <i class="notika-icon notika-app"></i>
                                        </div>
                                        <div class="nk-int-st">
                                            <select class="form-control" id="programme" name="programme">
                                                <option value=""></option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <div class="form-group ic-cmp-int">
                                        <div class="form-ic-cmp">
                                            <i class="notika-icon notika-mail"></i>
                                        </div>
                                        <div class="nk-int-st">
                                            <select class="form-control" id="klass" name="klass">
                                                <option value=""></option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <div class="form-group ic-cmp-int">
                                        <div class="form-ic-cmp">
                                            <i class="notika-icon notika-star"></i>
                                        </div>
                                        <div class="nk-int-st">
                                            <input class="form-control" id="idnumber" name="idnumber"
                                                   placeholder="Index number"
                                                   type="text" required="required">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <div class="form-group ic-cmp-int">
                                        <div class="form-ic-cmp">
                                            <i class="notika-icon notika-phone"></i>
                                        </div>
                                        <div class="nk-int-st">
                                            <input class="form-control" id="contact" name="contact"
                                                   placeholder="contact Number" type="text" required="required">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <div class="form-group ic-cmp-int">
                                        <div class="form-ic-cmp">
                                            <i class="notika-icon notika-picture"></i>
                                        </div>
                                        <div class="nk-int-st">
                                            <input class="form-control" id="file" name="file"
                                                   type="file" required="required">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <div class="form-group ic-cmp-int">
                                        <div class="form-ic-cmp">
                                            <i class="notika-icon notika-checked"></i>
                                        </div>
                                        <div class="nk-int-st">
                                            <input class="form-control" id="status" name="status" readonly="readonly"
                                                   type="text"
                                                   value="Active">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                    <div class="form-group">
                                        <button class="btn btn-primary btn-sm" id="saveStudent" type="submit"><i
                                                class="glyphicon glyphicon-save"></i> Save
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>`;

        this.loadProgramme();
        showStudentTable();
    }


    loadProgramme() {
        $.ajax({
            url: '../../api/post/program/fetchdata.php',
            type: 'POST',
            dataType: 'json',
            success: function (feedback) {
                if (feedback.length === 1) {
                    let option = `<option value="${feedback[0].pid}">${feedback[0].program}</option>`;
                    $("#programme").html(option);
                } else {
                    let option = `<option value=""></option>`;
                    for (let options of feedback) {
                        option += `<option value="${options.pid}">${options.program}</option>`
                    }
                    $("#programme").html(option);
                }
            }
        });
    }

    loadKlass() {
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
                    let option = `<option value=""></option><option value="${feedback[0].kid}">${feedback[0].kname}</option>`;
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


    connectedCallback() {

        // save students code
        this.querySelector("#studentForm").addEventListener('submit', (evt) => {
            evt.preventDefault();

            $.ajax({
                url: '../../api/post/student/addstudent.php',
                type: 'POST',
                dataType: 'json',
                data: new FormData(document.getElementById("studentForm")),
                contentType: false,
                cache: false,
                processData: false,
                success: function (feedback) {
                    showStudentTable();
                    if (feedback.result === "success") {
                        $.growl({
                            icon: "fa fa-check-circle ",
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
                    } else if (feedback.result === "error") {
                        $.growl({
                            icon: "fa fa-info-circle ",
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
            });
        });

        // save student code to database ends here

        // load class code
        this.querySelector("#programme").addEventListener('change', () => this.loadKlass());

        //load class code end here

    }

    disconnectedCallback() {
        this.querySelector("#saveStudent").addEventListener();
    }
}

class StudentTable extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<div class="row">

                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="datepicker-int mg-t-30">
                        <div class="row table-responsive">
                            <h4>List of registered students</h4>
                            <table class="table table-bordered table-sm">
                                <thead>
                                <tr>
                                    <th>Index Number</th>
                                    <th>Name</th>
                                    <th>Programme</th>
                                    <th>Class</th>
                                    <th>contact</th>
                                    <th>Status</th>
                                    <th>Option</th>
                                </tr>
                                </thead>
                                <tbody id="student_data">

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>`;
        // this.displayStudents();
    }


    connectedCallback() {


    }

    disconnectedCallback() {

    }
}

customElements.define('student-table', StudentTable);
customElements.define('student-form', Student);