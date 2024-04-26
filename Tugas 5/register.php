<?php
  // Connection
  $login_connection = mysqli_connect("localhost", "root", "", "test");
  $login_result = mysqli_query($login_connection, "SELECT * FROM login");
  if (!$login_result){
    echo mysqli_error($login_connection);
  }

  if (isset($_POST["register"])){
    if (isset($_POST["register"]) > 0){
      echo "<script>alert('User baru telah ditambahkan')</script>";
    } else {
      echo mysqli_error($login_connection);
    }
  }

?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

    <title>Login Page</title>
  </head>
  <body>
  <!--Navigation-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Registration</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ">
          <li class="nav-item active">
            <a class="nav-link" href="#">Login<span class="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    </nav>
    <!--End of Navigation-->
    <!-- Container -->
    <div id="con">
      <div class="container-md shadow-sm text-dark" id="container">
        <!-- Jumbotron -->
        <section class="jumbotron text-center profile">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Username</label>
              <input class="form-control" name="username" id="username" placeholder="Enter Username">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" name="password" id="Password" placeholder="Enter Password">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Re-Enter Password</label>
              <input type="password" class="form-control" name="password2" id="Password" placeholder="Enter Password">
            </div>
            <button type="submit" name="register" class="btn btn-primary">Submit</button>
          </form>
        </section>
        <!-- Akhir Jumbotron -->
      </div>
    </div>
    <!-- End Container -->

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  </body>
</html>