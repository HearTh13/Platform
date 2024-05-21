<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    @yield('container')
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
  </head>
  <body>
    <link rel="stylesheet" href="style.css" />

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm" id="navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Achmad Herlambang Prasetyo
        </a>
        <div class="collapse navbar-collapse justify-content-md-end" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" href="/">Home</a>
            <a class="nav-link active" href="/register">Register</a>
            <a class="nav-link active" href="/login">Login</a>
            <a class="nav-link active" href="/about">About</a>
          </div>
        </div>
      </div>
    </nav>
    <!-- End Navigation -->

    <!-- Container -->
    <div id="con">
      <div class="container-md shadow-sm text-dark tron" id="container">
        <!-- Jumbotron -->
        <section class="jumbotron text-center profile tron">
          <h1 class="text-light fs-5">To-Do List</h1>
          <p class="con text-light">Getting Started</p>
        </section>
        <!-- Akhir Jumbotron -->
      </div>
    </div>
    <!-- End Container -->

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </body>
</html>
