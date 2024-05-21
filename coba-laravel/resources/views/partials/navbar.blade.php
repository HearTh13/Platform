<!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm" id="navbar">
    <div class="container-fluid">
    <a class="navbar-brand" href="/">
        Achmad Herlambang Prasetyo
    </a>
    <div class="collapse navbar-collapse justify-content-md-end" id="navbarNavAltMarkup">
        <div class="navbar-nav">
        <a class="nav-link {{ ($title === "Home") ? "active" : "" }} " href="/">Home</a>
        <a class="nav-link {{ ($title === "Register") ? "active" : "" }}" href="/register">Register</a>
        <a class="nav-link {{ ($title === "Login") ? "active" : "" }}" href="/login">Login</a>
        <a class="nav-link {{ ($title === "About") ? "active" : "" }}" href="/about">About</a>
        </div>
    </div>
    </div>
</nav>
<!-- End Navigation -->