<?php

class Config
{
    private $host = 'localhost';
    private $user = 'root';
    private $pass = '';
    private $database = 'idcarddb';
    private $conn;


    public function connect()
    {
        $this->conn = null;
        try {
            $this->conn = new MySQLi($this->host, $this->user, $this->pass, $this->database);
        } catch (Exception $e) {
            echo json_encode(array('message' => 'Connection error ' . $e->getMessage()));
        }

        return $this->conn;
    }
}