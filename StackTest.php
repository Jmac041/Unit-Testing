<?php

use PHPUnit\Framework\TestCase;


require_once 'C:\xampp\htdocs\inc\bootstrap.php';
require_once 'C:\xampp\htdocs\config.php';
require_once 'C:\xampp\htdocs\Controller\Api\RatingController.php';

class StackTest extends PHPUnit\Framework\TestCase
{
    protected $client;

    protected function setUp() : void{
       parent::setUp();
       $this->client = new GuzzleHttp\Client([
        "base_uri" => "http://localhost:8080/index.php"]);
    }

    public function testGet_UserList()
    {
        $response = $this->client->request('GET', 'index.php/user/list');
        $this->assertEquals(200, $response->getStatusCode());
    }

    public function testPost_CreateUser()
    {
        $parameters = [
            'username' => 'newwwwwwwwwwsswusername',
            'password' => 'newwpassword',
        ];

        $json_parameters = json_encode($parameters);
        $response = $this->client->request('POST', 'index.php/user/create', [
            'body' => $json_parameters,
        ]);
        
        $this->assertEquals(201, $response->getStatusCode());
    }

    public function testPost_LoginUser()
    {
        $parameters = [
            'username' => 'jmac041',
            'password' => '1234567890',
        ];

        $json_parameters = json_encode($parameters);
        $response = $this->client->request('POST', 'index.php/user/login', [
            'body' => $json_parameters,
        ]);
        
        $this->assertEquals(200, $response->getStatusCode());
    }

    public function testPost_FailedLogin()
    {
        $parameters = [
            'username' => 'jmac041',
            'password' => 'gibberish',
        ];

        $json_parameters = json_encode($parameters);
        $response = $this->client->request('POST', 'index.php/user/login', [
            'body' => $json_parameters,
        ]);
        $response->getBody()->getContents();
        $this->assertEquals(200, $response->getStatusCode());
    }

    public function testPost_NewSong() {
        $parameters = [
            'username' => 'jmac041',
            'artist' => 'newwwwwwwwArtist',
            'song' => 'newwSong',
            'rating' => 5,
        ];

        $json_parameters = json_encode($parameters);
        $response = $this->client->request('POST', 'index.php/rating/create', [
            'body' => $json_parameters,
        ]);
       $this->assertEquals(201, $response->getStatusCode());
    }

    public function testPost_updateSong()
    {
        $parameters = [
            'artist' => 'updatedArrrtist',
            'song' => 'updatedSong',
            'rating' => 4,
            'id' => 1,
        ];

        $json_parameters = json_encode($parameters);
        $response = $this->client->request('PUT', 'index.php/rating/update', [
            'body' => $json_parameters,
        ]);

        $this->assertEquals(200, $response->getStatusCode());
    }

    public function testPost_DeleteSong()
    {
        $parameters = [
            'id' => 16,
        ];

        $json_parameters = json_encode($parameters);
        $response = $this->client->request('DELETE', 'index.php/rating/delete', [
            'body' => $json_parameters
        ]);

        $this->assertEquals(204, $response->getStatusCode());
    }

    public function tearDown() : void{
        parent::tearDown();
        $this->client = null;
     }

}
