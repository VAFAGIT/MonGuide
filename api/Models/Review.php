<?php

class Review extends Model
{
    public function __construct()
    {
        $this->table = 'review';

        $this->getConnection();
    }
    /**
     * Retourne un article en fonction de son slug
     *
     * @param string $slug
     * @return void
     */


    public function update($data)
    {
        // print_r ($data);
        // die;
        $query = " UPDATE reservation SET status_user ='1'  WHERE id_users = :id and id_travel=:id_travel";
        $stmt = $this->_connexion->prepare($query);
        $stmt->bindParam(':id', $data->id_users);
        $stmt->bindParam(':id_travel', $data->id_travel);
        $stmt->execute();

        $query = "INSERT INTO  $this->table ( id_travel , id_users )VALUES( :id_travel , :id_users)";
        $stmt = $this->_connexion->prepare($query);
        $stmt->bindParam(':id_travel', $data->id_travel);
        $stmt->bindParam(':id_users', $data->id_users);
    
        if ($stmt->execute()) {
            return 'everything went good ';
        } else {
            return 'something went wrong';
        }
    }

    public function create($data)
    {
        // print_r ($data);
        // die;
        $query = " UPDATE $this->table SET comments =:comments,star = :star WHERE id_users = :id_users AND id_travel = :id_travel ";
        $stmt = $this->_connexion->prepare($query);
        $stmt->bindParam(':id_travel', $data->id_travel);
        $stmt->bindParam(':id_users', $data->id_users); 
        $stmt->bindParam(':comments', $data->comments);
        $stmt->bindParam(':star', $data->star);
    
    
        if ($stmt->execute()) {
            return 'everything went good ';
        } else {
            return 'something went wrong';
        }
    }

    public function getAllR()
    {    

        $query = "SELECT * FROM  `review` WHERE `comments` is not null ";
        $stmt = $this->_connexion->prepare($query);
        if ($stmt->execute()) {
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } else {
            return false;
        }
    }

   

}
