<?php
$nama = "Achmad";
$x = 10;
$y = 20;
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
        echo "bingo!"
      } else{
        echo "salah";
      }
    ?>

  </body>
</html>
