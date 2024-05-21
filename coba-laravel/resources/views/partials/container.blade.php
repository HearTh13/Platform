<!-- Container -->
<div id="con">
    <div class="container-md shadow-sm text-dark tron" id="container">
    <!-- Jumbotron -->
    <section class="jumbotron {{ ($title === "Posts") ? "text-left" : "text-center" }} profile tron">
        @yield('content')
    </section>
    <!-- Akhir Jumbotron -->
    </div>
</div>
<!-- End Container -->