class MainNavBar extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<div class="container">
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <ul class="nav nav-tabs notika-menu-wrap menu-it-icon-pro">
                <li id="hmenu"><a data-toggle="tab" href="#home"><i class="notika-icon notika-house"></i>
                    Home</a>
                </li>
                <li id="idmenu"><a data-toggle="tab" href="#idcard"><i class="notika-icon notika-mail"></i> Cards</a>
                </li>
                <li id="stmenu"><a data-toggle="tab" href="#student"><i class="notika-icon notika-edit"></i>
                    Students</a>
                </li>
                <li id="apstmenu"><a data-toggle="tab" href="#apstudent"><i class="notika-icon notika-edit"></i>
                    Card Status</a>
                </li>
                <li id="rmenu"><a data-toggle="tab" href="#reports"><i class="notika-icon notika-bar-chart"></i>
                    Reports</a>
                </li>
                <li id="pmenu"><a data-toggle="tab" href="#program"><i class="notika-icon notika-bar-chart"></i>
                    Programme</a>
                </li>
                <li id="symenu"><a data-toggle="tab" href="#system"><i class="notika-icon notika-windows"></i> System
                    Setup</a>
                </li>
            </ul>
            <div class="tab-content custom-menu-content">
                <div class="tab-pane notika-tab-menu-bg animated flipInX" id="home">
                    <ul class="notika-main-menu-dropdown">
                        <li><a id="dashboard" href="javascript:"
                               name="../../pages/dashboard/dashboard.html#hmenu">Dashboard</a></li>
                    </ul>
                </div>
                <div class="tab-pane notika-tab-menu-bg animated flipInX" id="idcard">
                    <ul class="notika-main-menu-dropdown">
                        <li><a id="createCard" href="javascript:"
                               name="../../pages/cards/addcard.html#idmenu">Verify ID Card</a>
                        </li>
                        <li><a id="viewCard" href="javascript:"
                               name="../../pages/cards/viewcards.html#idmenu">View Verified ID Card</a>
                        </li>
                    </ul>
                </div>
                <div class="tab-pane notika-tab-menu-bg animated flipInX" id="student">
                    <ul class="notika-main-menu-dropdown">
                        <li><a id="addStudent" href="javascript:"
                               name="../../pages/students/addstudent.html#stmenu">Add
                            Student</a>
                        </li>
                        <li><a id="viewStudents" href="javascript:"
                               name="../../pages/students/viewstudents.html#stmenu">View
                            Students</a></li>
                        <li><a id="uploadStudents" href="javascript:"
                               name="../../pages/students/uploadstudents.html#stmenu">Upload
                            Students</a></li>
                    </ul>
                </div>
                <div class="tab-pane notika-tab-menu-bg animated flipInX" id="apstudent">
                    <ul class="notika-main-menu-dropdown">
                        <li><a id="approveStudent" href="javascript:"
                               name="../../pages/approval/approvestudent.html#apstmenu">Change
                            Status</a>
                        </li>
                        
                    </ul>
                </div>
                <div class="tab-pane notika-tab-menu-bg animated flipInX" id="reports">
                    <ul class="notika-main-menu-dropdown">
                        <li><a id="dailyreport" href="javascript:"
                               name="../../pages/report/dailyreport.html#rmenu">Daily Report</a>
                        </li>
                        <li><a id="monthlyreports" href="javascript:"
                               name="../../pages/report/monthlyreport.html#rmenu">Monthly Reports</a>
                        </li>
                    </ul>
                </div>
                <div class="tab-pane notika-tab-menu-bg animated flipInX" id="program">
                    <ul class="notika-main-menu-dropdown">
                        <li><a id="addProgram" href="javascript:"
                               name="../../pages/program/addprogram.html#pmenu">Add Program</a>
                        </li>
                        <li><a id="addSubject" href="javascript:"
                               name="../../pages/subject/addsubject.html#pmenu">Add Subject</a>
                        </li>
                    </ul>
                </div>
                <div class="tab-pane notika-tab-menu-bg animated flipInX" id="system">
                    <ul class="notika-main-menu-dropdown">
                        <li><a id="companyMenu" name="../../pages/company/company.html#symenu" href="javascript:">Register
                            Institution</a>
                        </li>
                        <li><a id="userMenu" name="../../pages/user/user.html#symenu" href="javascript:">Register Account</a></li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</div>`;
        let tab = window.location.hash;
        let element = document.querySelector(tab);
        if (tab === "#hmenu") {
            element.classList.add("active");
            //$(tab).addClass("active");
            $("#home").addClass("in active");
        } else if (tab === "#idmenu") {
            $(tab).addClass("active");
            $("#idcard").addClass("in active");
        } else if (tab === "#stmenu") {
            $(tab).addClass("active");
            $("#student").addClass("in active");
        } else if (tab === "#apstmenu") {
            $(tab).addClass("active");
            $("#apstudent").addClass("in active");
        } else if (tab === "#pmenu") {
            $(tab).addClass("active");
            $("#program").addClass("in active");
        } else if (tab === "#sbjmenu") {
            $(tab).addClass("active");
            $("#program").addClass("in active");
        } else if (tab === "#rmenu") {
            $(tab).addClass("active");
            $("#reports").addClass("in active");
        } else if (tab === "#symenu") {
            $(tab).addClass("active");
            $("#system").addClass("in active");
        }
    }


    dashboard() {
        let getValue = this.querySelector('#dashboard').getAttribute('name');
        window.location = getValue;
    }

    createCard() {
        let getValue = this.querySelector('#createCard').getAttribute('name');
        window.location = getValue;
    }

    viewCard() {
        let getValue = this.querySelector('#viewCard').getAttribute('name');
        window.location = getValue;
    }

    addStudent() {
        let getValue = this.querySelector('#addStudent').getAttribute('name');
        window.location = getValue;
    }

    approvalStudent() {
        let getValue = this.querySelector('#approveStudent').getAttribute('name');
        window.location = getValue;
    }

    viewStudents() {
        let getValue = this.querySelector('#viewStudents').getAttribute('name');
        window.location = getValue;
    }

    uploadStudents() {
        let getValue = this.querySelector('#uploadStudents').getAttribute('name');
        window.location = getValue;
    }

    addProgram() {
        let getValue = this.querySelector('#addProgram').getAttribute('name');
        window.location = getValue;
    }

    dailyReport() {
        let getValue = this.querySelector('#dailyreport').getAttribute('name');
        window.location = getValue;
    }

    monthlyReport() {
        let getValue = this.querySelector('#monthlyreports').getAttribute('name');
        window.location = getValue;
    }

    addSubject() {
        let getValue = this.querySelector('#addSubject').getAttribute('name');
        window.location = getValue;
    }


    companyMenu() {
        let getValue = this.querySelector('#companyMenu').getAttribute('name');
        window.location = getValue;
    }

    userMenu() {
        let getValue = this.querySelector('#userMenu').getAttribute('name');
        window.location = getValue;
    }

    connectedCallback() {
        this.querySelector('#dashboard').addEventListener('click', () => this.dashboard());
        this.querySelector('#createCard').addEventListener('click', () => this.createCard());
        this.querySelector('#viewCard').addEventListener('click', () => this.viewCard());
        this.querySelector('#addStudent').addEventListener('click', () => this.addStudent());
        this.querySelector('#approveStudent').addEventListener('click', () => this.approvalStudent());
        this.querySelector('#viewStudents').addEventListener('click', () => this.viewStudents());
        this.querySelector('#uploadStudents').addEventListener('click', () => this.uploadStudents());
        this.querySelector('#addProgram').addEventListener('click', () => this.addProgram());
        this.querySelector('#dailyreport').addEventListener('click', () => this.dailyReport());
        this.querySelector('#monthlyreports').addEventListener('click', () => this.monthlyReport());
        this.querySelector('#addSubject').addEventListener('click', () => this.addSubject());
        this.querySelector('#companyMenu').addEventListener('click', () => this.companyMenu());
        this.querySelector('#userMenu').addEventListener('click', () => this.userMenu());
    }

    disconnectedCallback() {
        //this.querySelector('#userMenu').addEventListener();
    }
}


class TopNav extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<div class="container">
    <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="logo-area">
                <a href="javascript:"><img height="64px" src="../../dist/img/logo/logo.png" width="120px"></a>
            </div>
        </div>
        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">

            <div class="header-top-menu float-end">
                <ul class="nav navbar-nav notika-top-nav">
                    <li style="font-size: 12px">
                        <a class="btn triger-rotateIn" data-toggle="dropdown" style="font-size: 12px" href="javascript:"><i
                                class="glyphicon glyphicon-user"></i> <span
                                id="loginUsers"></span></a>
                        <ul class="dropdown-menu triger-rotateIn-dp" style="font-size: 12px">
                            <li><a href="#" style="font-size: 12px">Profile</a></li>
                            <li><a href="#" style="font-size: 12px">Change Password</a></li>
                            <li class="divider"></li>
                            <li><a href="javascript:" id="logoutNow" style="font-size: 12px"><i
                                    class="glyphicon glyphicon-log-out"></i>
                                Logout</a></li>
                        </ul>
                    </li>


                </ul>
            </div>
        </div>
    </div>
</div>`;
        let loginSessions = localStorage.getItem("validUsername");
        if (!loginSessions) {

        } else {
            let loginSessions = localStorage.getItem("validUsername");
            let data = JSON.parse(loginSessions);
            //console.log(users.name);
            $("#loginUsers").html(data.name);
        }
    }

    logoutNow() {
        localStorage.removeItem("validUsername");
        let checkSession = localStorage.getItem("validUsername");
        if (!checkSession) {
            window.location = "../../index.html";
        }
    }

    connectedCallback() {
        this.querySelector("#logoutNow").addEventListener('click', () => this.logoutNow());
    }

    disconectedCallback() {
        //this.querySelector("#logoutNow").addEventListener();
    }
}


customElements.define('top-header', TopNav);
customElements.define('main-navbar', MainNavBar);