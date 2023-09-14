<?php

class Post
{
    public $search;
    public $uid;
    public $uname;
    public $username;
    public $password;
    public $email;
    public $sid;
    public $pid;
    public $stid;
    public $stname;
    public $program;
    public $klass_name;
    public $kid;
    public $idnumber;
    public $today;
    public $title;
    public $logo;
    public $contact;
    public $status;
    public $picture;
    public $company_name;
    public $company_email;
    public $company_logo;
// subject variables
    public $code;
    public $subject;
    public $sbjid;
    private $conn;


    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function dupUsername()
    {
        $select = $this->conn->query("SELECT * FROM user_account where username = '$this->username'");
        return $select;
    }

    public function userID()
    {
        return $this->uid;
    }

    public function addUser()
    {
//        if ($this->uid === "") {
        $addUsers = $this->conn->query("INSERT INTO user_account (username,name,password,email) values ('$this->username','$this->uname','$this->password','$this->email')");
        if ($addUsers) {
            $msg = json_encode(['message' => 'User account created successfully']);
        } else {
            $msg = json_encode(['message' => 'User account creation failed']);
        }
        return $msg;
    }

    public function updateUser()
    {
        $updateUser = $this->conn->query("UPDATE user_account SET username = '$this->username',name = '$this->uname',password = '$this->password',email = '$this->email' where uid = '$this->uid'");
        if ($updateUser) {
            $msg = json_encode(['message' => 'User account updated successfully']);
        } else {
            $msg = json_encode(['message' => 'User account update failed']);
        }
        return $msg;
    }

    public function deleteUser()
    {
        $deleteUser = $this->conn->query("DELETE FROM user_account WHERE uid = $this->uid");
        if ($deleteUser) {
            $msg = json_encode(['message' => 'User account deleted successfully']);
        } else {
            $msg = json_encode(['message' => 'User account deleting failed']);
        }
        return $msg;
    }

    public function checkUsername()
    {
        $user = $this->conn->query("SELECT * FROM user_account where username = '$this->username'");
        if ($user->num_rows > 0) {
            $msg = json_encode(["result" => "exist", "message" => "Username already exists"]);
        } else {
            $msg = json_encode(["result" => "not", "message" => "Username Do not exists"]);
        }
        return $msg;
    }

    public function checkEmail()
    {
        $email = $this->conn->query("SELECT * FROM user_account where email = '$this->email'");
        if ($email->num_rows > 0) {
            $msg = json_encode(["result" => "exist", "message" => "Email already exists"]);
        } else {
            $msg = json_encode(["result" => "not", "message" => "Email Do not exists"]);
        }
        return $msg;
    }

    public function getUsers()
    {
        $getusers = $this->conn->query("SELECT * FROM user_account");
        return $getusers;
    }

    public function editUsers()
    {
        $fetch = $this->conn->query("SELECT * FROM user_account where uid = '$this->uid'");
        return $fetch;
    }

// Company functions goes here

    public function checkCompany()
    {
        $check = $this->conn->query("SELECT * FROM company");
        return $check;
    }

    public function addCompany()
    {
        $insert = $this->conn->query("INSERT INTO company set company_name = '$this->company_name', company_email = '$this->company_email', company_logo = '$this->company_logo'");
        return $insert;
    }

    public function updateCompany()
    {
        $update = $this->conn->query("update company set company_name = '$this->company_name', company_email = '$this->company_email', company_logo = '$this->company_logo'");
        return $update;
    }

    public function deleteCompany()
    {
        $delete = $this->conn->query("DELETE from company");
        return $delete;
    }

// add programme code starts here
    public function checkProgram()
    {
        $check = $this->conn->query("SELECT * from program where program_name = '$this->program'");
        return $check;
    }

    public function addProgram()
    {
        $insert = $this->conn->query("INSERT INTO program set program_name = '$this->program'");
        return $insert;
    }

    public function updateProgram()
    {
        $update = $this->conn->query("UPDATE program set program_name = '$this->program' where pid = '$this->pid'");
        return $update;
    }

    public function deleteProgram()
    {
        $delete = $this->conn->query("DELETE from program where pid = '$this->pid'");
        return $delete;
    }

    public function editProgram()
    {
        $edit = $this->conn->query("select * from program where pid = '$this->pid'");
        return $edit;
    }

    public function getProgram()
    {
        $getall = $this->conn->query("select * from program");
        return $getall;
    }

    //Klass Methods start here
    public function getKlass()
    {
        $result = $this->conn->query("select * from klass");
        return $result;
    }

    public function addKlass()
    {
        $result = $this->conn->query("insert into klass set klass_name = '$this->klass_name', pid = '$this->pid'");
        return $result;
    }

    public function updateKlass()
    {
        $result = $this->conn->query("update klass set klass_name = '$this->klass_name', pid = '$this->pid' where kid = '$this->kid'");
        return $result;
    }

    public function editKlass()
    {
        $result = $this->conn->query("select * from klass where kid = '$this->kid'");
        return $result;
    }

    public function deleteKlass()
    {
        $delete = $this->conn->query("delete from klass where kid ='$this->kid'");
        return $delete;
    }

    public function checkKlass()
    {
        $check = $this->conn->query("select * from klass where klass_name='$this->klass_name'and pid = '$this->pid'");
        return $check;
    }

    public function loadKlass()
    {
        $loadklass = $this->conn->query("select * from klass where pid = '$this->pid'");
        return $loadklass;
    }

    // student methods go here

    public function getStudent()
    {
        $result = $this->conn->query("select * from student_account");
        return $result;
    }

    public function checkStudent()
    {
        $result = $this->conn->query("select * from student_account where idnumber = '$this->idnumber'");
        return $result;
    }

    public function checkStudentStatus()
    {
        $result = $this->conn->query("select * from student_account where idnumber = '$this->idnumber'");
        return $result;
    }

    public function addStudent()
    {
        $insert = $this->conn->query("insert into student_account set fullname ='$this->stname', program ='$this->pid',idnumber ='$this->idnumber',contact ='$this->contact',klass = '$this->kid',picture='$this->picture',status='$this->status'");
        return $insert;
    }

    public function updateStudent()
    {
        $update = $this->conn->query("update student_account set fullname ='$this->stname', program ='$this->pid', idnumber ='$this->idnumber', contact ='$this->contact',klass = '$this->kid',picture='$this->picture',status='$this->status' where stid = '$this->stid'");
        return $update;
    }

    public function changeStatus()
    {
        $update = $this->conn->query("update student_account set status='$this->status' where stid = '$this->stid'");
        return $update;
    }

    public function deleteStudent()
    {
        $delete = $this->conn->query("delete from student_account where stid = '$this->stid'");
        return $delete;
    }

    public function editStudent()
    {
        $edit = $this->conn->query("select * from student_account where stid = '$this->stid'");
        return $edit;
    }

    public function fetchStudents()
    {
        $fetch = $this->conn->query("select * from student_account where program = '$this->pid' and klass = '$this->kid'");
        return $fetch;
    }

    public function uploadStudent()
    {
        $insert = $this->conn->query("insert into student_account set fullname ='$this->stname', program ='$this->pid',idnumber ='$this->idnumber',klass = '$this->kid',contact='$this->contact',status='$this->status'");
        return $insert;
    }

    public function uploadPictures()
    {
        $insert = $this->conn->query("update student_account set picture ='$this->picture' where idnumber ='$this->idnumber'");
        return $insert;
    }


    // ID Card Verification Saving Methods

    public function checkCardVerification()
    {
        $vdate = date('Y-m-d');
        $check = $this->conn->query("select * from st_cardtb where idnumber ='$this->idnumber' and vdate = '$vdate' and title = '$this->title' and subject = '$this->subject'");
        return $check;
    }


    public function saveCardVerification()
    {
        $vdate = date('Y-m-d');
        $month = date('M');

        $insert = $this->conn->query("insert into st_cardtb set uid ='$this->uid', idnumber ='$this->idnumber',title = '$this->title',subject = '$this->subject',vdate = '$vdate',month = '$month',status='$this->status'");

        return $insert;
    }

    public function getTodaysVerification()
    {
        $get = $this->conn->query("select * from st_cardtb where title = '$this->title' and vdate = '$this->today' order by idnumber asc");
        return $get;
    }

    public function checkVerifyStudent()
    {
        $result = $this->conn->query("select * from student_account where idnumber = '$this->idnumber' and program='$this->pid' and klass='$this->kid'");
        return $result;
    }

    function addSubject()
    {
        $addsub = $this->conn->query("insert into subjecttb set code = '$this->code', subject = '$this->subject', program = '$this->pid'");
        return $addsub;
    }

    function updateSubject()
    {
        $updatesub = $this->conn->query("update subjecttb set code = '$this->code', subject = '$this->subject', program = '$this->pid' where sbj = '$this->sbjid'");
        return $updatesub;
    }

    function getSubject()
    {
        $getSubject = $this->conn->query("SELECT * from subjecttb where sbj = '$this->sbjid'");
        return $getSubject;
    }

    function deleteSubject()
    {
        $deleteSubject = $this->conn->query("DELETE FROM subjecttb WHERE sbj = '$this->sbjid'");
        return $deleteSubject;
    }

    function fetchSubject()
    {
        $fetchSubject = $this->conn->query("SELECT * FROM subjecttb order by program");
        return $fetchSubject;
    }

    function checkSubject()
    {
        $check = $this->conn->query("SELECT * from subjecttb where subject = '$this->subject'and program = '$this->pid'");
        return $check;
    }

    function loadSubject()
    {
        $check = $this->conn->query("SELECT * from subjecttb where program = '$this->pid'");
        return $check;
    }


}


