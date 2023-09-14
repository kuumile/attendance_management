<?php
//global $con;
//include "https://feepayment.aitechgh.com/config/config.php";
//$con = new mysqli("localhost","root", "", "feepaymentdb");

class Database
{
    private static $con;
    private $connection;

    private function __construct()
    {
        $this->connection = new mysqli("localhost", "root", "", "idcarddb");
    }

    public static function getConnection()
    {
        if (self::$con == null) {
            self::$con = new Database();
        }
        return self::$con->connection;
    }

    public function __destruct()
    {
        $this->connection->close();
    }
}