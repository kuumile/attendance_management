<?php


class Get
{
    private $conn;
    private $st_cardtb = 'st_cardtb';

    public function __construct($db)
    {
        $this->conn = $db;
    }

}