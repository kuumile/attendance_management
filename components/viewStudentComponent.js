class ViewStudent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="form-element-list">
                        <div class="basic-tb-hd">
                            <h2>Input Text</h2>
                            <p>Text Inputs with different sizes by height and column.</p>
                        </div>
                        <div class="row">
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
                            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                                <input id="uid" name="uid" type="hidden">
                                <div class="form-group ic-cmp-int">
                                    <div class="form-ic-cmp">
                                        <i class="notika-icon notika-file"></i>
                                    </div>
                                    <div class="nk-int-st">
                                        <select class="form-control" id="klass" name="klass">

                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                                <div class="form-group">
                                    <button class="btn btn-primary btn-sm" id="fetchStudents" type="button"><i
                                            class="glyphicon glyphicon-search"></i> Fetch Class
                                    </button>
                                </div>
                            </div>

                            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                                <div class="form-group">
                                    <button class="btn btn-primary btn-sm" id="generateBarcode" name="generateBarcode" type="button"><i
                                            class="fa fa-gears"></i> Generate Barcode
                                    </button>
                                </div>
                            </div>

                            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <div class="row">
<!--                                <div class="form-group">-->
<!--                                    <button class="btn btn-primary btn-sm" id="exportcards" name="exportcard" type="button"><i-->
<!--                                            class="fa fa-file-pdf-o"></i> Export-->
<!--                                    </button>-->
<!--                                </div>-->
                                <div class="form-group">
                                <button class="btn btn-primary btn-sm"  onClick="print_div('printr')" id="print" name="print" type="button"><i class="fa fa-print"></i> Print</button>
                                </div>
                                </div>
                            </div>

                        </div>
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

    fetchStudents() {
        let program = this.querySelector("#programme").value,
            klass = this.querySelector("#klass").value;
        if (program.length < 1) {
            $.growl({
                icon: "fa fa-info-circle",
                message: "Select a program",
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
                message: "Select a class",
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
                url: "../../api/post/student/fetchstudents.php",
                type: "POST",
                dataType: "json",
                data: {
                    program: program,
                    klass: klass
                },
                success: function (data) {
                    let viewCard = "";
                    let i = 1;
                    let total = [];

                    for (let vcard of data) {

                        i++;
                        let t_arr = {'id': i, 'idnumber': vcard.idnumber};

                        viewCard += `
                       
                        <div class='col-lg-6 col-md-6 col-sm-6 col-xs-12 g-1'>
<!--                        <div class='card search-engine-int'>-->
<!--                        <div class='card-body'>-->
                        <table width="86mm" height="56mm" id="table" style="margin-top: 30px; background-image: radial-gradient(circle, #6bd178, #84d678, #9bda79, #b0de7b, #c3e27f, #d9d56b, #edc65e, #ffb55c, #ff8767, #ff598f, #ec47c7, #815ffb) !important;
                border-radius: 2em !important;
                -webkit-border-radius: 2em !important;
                -moz-border-radius: 2em !important;">
                        <tr><td colspan="3" style="text-align: center; font-weight: bold; padding-top: 1px; color: #ffffff;">${vcard.company}</td></tr>
                        <tr>
                        <td style="width: 40%; text-align: center;"><img id="imgs" src='../../${vcard.logo}'width="180" height="180"></td>
                        <td align="center" width="20%" style="font-weight: bold">STUDENT<br/>ID CARD</td>
                        <td align="center" style="width: 40%; text-align: center;"><div style="align-content: center; padding: 1px"><img id="imgs" src='../../${vcard.picture}'width="180" height="180"></div></td>
</tr>
                        <tr>
                        <td class='text-uppercase' id="td" colspan="3" style="text-align: center; font-size: 13px"><strong>${vcard.name}</strong></td>
</tr>
                        <tr>
                        <td class='text-uppercase' id="td" colspan="2"><strong>INDEX No.:</strong> ${vcard.idnumber}</td><td class='text-uppercase' id="td"><strong>CLASS:</strong> ${vcard.klass}</td>
</tr>
                        <!--<tr>
                        <td class='text-uppercase' id="td" colspan="3"><strong>STATUS:</strong>  </td>
</tr>-->
                        <tr>
                        <td class='text-uppercase text-center' style="background-color: white" colspan="3"><svg id='barcode${i}'>
</svg></td>
</tr>
<tr><td colspan="3" style="text-align: center;">Valid Only in DNTC</td></tr>
</table>
<!--</div>-->
<!--</div>-->
</div>
</div>`;
                        total.push(t_arr);
                        // console.log(total);
                        document.getElementById("totalstudents").value = JSON.stringify(total);
                    }
                    $("#viewStudentIDCard").html(viewCard);
                }
            });
        }
    }

    connectedCallback() {
// load class code
        this.querySelector("#programme").addEventListener('change', () => this.loadKlass());

        this.querySelector("#fetchStudents").addEventListener('click', () => this.fetchStudents());
    }

    disconnectedCallback() {

    }
}

class ShowStudent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

    }

    disconnectedCallback() {

    }
}

customElements.define('view-student', ViewStudent);
customElements.define('show-student', ShowStudent);