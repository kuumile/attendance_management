class UploadStudents extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="form-element-list">
<!--                        <div class="basic-tb-hd">-->
<!--                            <h2>Input Text</h2>-->
<!--                            <p>Text Inputs with different sizes by height and column.</p>-->
<!--                        </div>-->
                        <form id="uploadForm" method="post" enctype="multipart/form-data">
                        <div class="row">
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <div class="form-group ic-cmp-int">
                                        <div class="form-ic-cmp">
                                            <i class="notika-icon notika-app"></i>
                                        </div>
                                        <div class="nk-int-st">
                                            <select class="form-control" id="programme" name="programme" required="required">
                                                <option value=""></option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                                <div class="form-group ic-cmp-int">
                                    <div class="form-ic-cmp">
                                        <i class="notika-icon notika-file"></i>
                                    </div>
                                    <div class="nk-int-st">
                                        <select class="form-control" id="klass" name="klass" required="required">

                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div class="form-group ic-cmp-int">
                                    <div class="form-ic-cmp">
                                        <i class="notika-icon notika-cloud"></i>
                                    </div>
                                    <div class="nk-int-st">
                                        <input type="file" class="select select-multiple" id="file" name="file" required="required">
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                                <div class="form-group">
                                    <button class="btn btn-primary btn-sm" id="exportcards" name="exportcard" type="submit"><i
                                            class="fa fa-file-excel-o"></i> Import Students
                                    </button>
                                </div>
                            </div>

                        </div>
                        </form>
                    </div>
                </div>
            </div>`;
        this.loadProgramme();
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
        this.querySelector("#programme").addEventListener('change', () => this.loadKlass());

        this.querySelector("#uploadForm").addEventListener('submit', (evt) => {
            evt.preventDefault();
            $.ajax({
                url: '../../api/post/student/uploadstudents.php',
                type: 'POST',
                dataType: 'json',
                data: new FormData(document.getElementById("uploadForm")),
                contentType: false,
                cache: false,
                processData: false,
                success: function (feedback) {
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
                            icon: "fa fa-check-circle ",
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

    }

    disconnectedCallback() {

    }
}

class UploadPictures extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="form-element-list">
                        <div class="basic-tb-hd">
                            <h2>Bulk Upload Images</h2>
                            <p>Browse to select images to upload. The Image must be name with the Id number of the students</p>
                        </div>
                        <form id="uploadPicturesForm" method="post" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div class="form-group ic-cmp-int">
                                    <div class="form-ic-cmp">
                                        <i class="notika-icon notika-cloud"></i>
                                    </div>
                                    <div class="nk-int-st">
                                        <input type="file" class="select select-multiple" id="files" name="files[]" required="required" multiple>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                                <div class="form-group">
                                    <button class="btn btn-primary btn-sm" id="importpicture" name="importpicture" type="submit"><i
                                            class="fa fa-file-excel-o"></i> Import Picture
                                    </button>
                                </div>
                            </div>

                        </div>
                        </form>
                    </div>
                </div>
            </div>`;
    }

    connectedCallback() {
        this.querySelector("#uploadPicturesForm").addEventListener("submit", function (evt) {
            evt.preventDefault();
            $.ajax({
                url: '../../api/post/student/uploadpicture.php',
                type: 'POST',
                dataType: 'json',
                data: new FormData(document.getElementById("uploadPicturesForm")),
                contentType: false,
                cache: false,
                processData: false,
                success: function (feedback) {
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
                            icon: "fa fa-check-circle ",
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

        })
    }

    disconnectedCallback() {

    }
}

customElements.define('view-student', UploadStudents);
customElements.define('upload-picture', UploadPictures);

