<h1>To-Do</h1>


<form method="POST">
    <input name="New_task" required>
    <input type="submit" name="oper" value="+"><br>
</form>

<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "todo_2";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
if(isset($_POST)){
    $NewTask = $_POST["New_task"];

    $sql = "INSERT INTO task (Text) VALUES ('$NewTask')";

    if ($conn->query($sql) === TRUE) {
        $Ouputsql = "SELECT ID , Text FROM task";
        $result = $conn->query($Ouputsql);

        if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
                echo "ID: " . $row["ID"]. " - Task: " . $row["Text"]. "<br>";
            }
        } else {
            echo "0 results";
        }
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }


    $conn->close();
}


?>