<?php

class Login
{
    public $uid;
    public $password;
    public $username;
    private $conn;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    /**
     * @return mixed
     */
    public function getLogin()
    {
        $login = $this->conn->query("SELECT uid, name, username, password, email FROM user_account WHERE username='$this->username' and password='$this->password'");
        if ($login->num_rows > 0) {
            $row = $login->fetch_assoc();
            extract($row);
            $post_item = array(
                'uid' => $uid,
                'username' => $username,
                'name' => $name,
                'email' => $email
            );
            echo json_encode($post_item);
        } else {
            echo json_encode(['error' => 'Wrong username or password']);
        }
    }
}