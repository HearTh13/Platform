<?php
require 'functions.php';
$nama = "Achmad";
$x = 10;
$y = 20;
$conn = mysqli_connect("localhost", "root", "", "test");
$login_result = mysqli_query($conn, "SELECT * FROM login");
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>
      Belajar PHP
    </title>
  </head>
  <body>
    <h1>Selamat Datang <?php echo $nama ?></h1>
    <p><?php echo "Ini adalah Paragraph"; ?></p>
    <?php echo "<h1>Ini menggunakan PHP</h1>" ?>
    <?php echo $x+$y ?>
    <?php echo $x*$y ?>
    <br />
    <?php echo $nama . " " . $x+$y . $x*$y ?>
    <br />
    <?php var_dump(1 < 5) ?>
    <br />
    <?php var_dump(1 == "1") ?>
    <br />
    <?php var_dump(1 === "1") ?>
    <br />
    <?php var_dump($x == $y || $x == 10); ?>
    <br />
    <?php for($i = 0; $i < 5; $i++){
      print("NECO CHOMP <br />");
    } ?>
    <br />
    <?php while ($x < $y){
      print("NECO <br />");
      $x++;
    } ?>
    <br />
    <?php do {
      print($y);
      $x++;
    } while($x < $y) ?>

    <table border="1" cellpadding="10" cellpadding="0">
     <?php 
      for($i=1; $i <= 3; $i++){
        echo "<tr>";
        for($j=1; $j <= 5; $j++){ 
          echo"<td>$i,$j</td>";
        };
        echo "</tr>";
      }
     ?>
     <?php for($i=1; $i <= 3; $i++): ?>
      <tr>
        <?php for($j=1; $j <= 5; $j++){ ?>
          <td><?php echo "$i,$j"; ?></td>
        <?php } ?>
      </tr>
     <?php endfor; ?>
    </table>
    <br>
    <?php 
      $m = 10;
      if($m < 20){
        echo "benar";
      } else if($m == 20){
        echo "bingo!";
      } else{
        echo "salah";
      }
    ?>
    <br>
    <br>
    <!-- Built-in Function -->
    <?php 
      echo date("l, d-M-Y");
      echo "<br>";
      echo date("d M Y", time()-60*60*24*100);
      echo "<br>";
      echo date("l, d M Y", mktime(0,0,0,8,25,1985));
      echo "<br>";
      echo date("l, d M Y", strtotime("25 aug 2015"));
    ?>
    <br>
    <br>
    <!-- Self-defined Function -->
    <?php 
     function salam($waktu, $nama){
      return "Selamat $waktu, $nama!";
     }
     echo salam("Pagi", "Tyo");
    ?>
    <br>
    <br>
    <table border="1" cellpadding="10" cellpadding="0">
      <tr>
        <th>No.</th>
        <th>Username</th>
        <th>Password</th>
      </tr>
      <?php
        while ($row = mysqli_fetch_assoc($login_result)){
      ?>
      <tr>
        <td><?php echo $row["ID"]; ?></td>
        <td><?php echo $row["Username"]; ?></td>
        <td><?php echo $row["Password"]; ?></td>
      </tr>
      <?php 
        }
      ?>
  </body>
</html>
