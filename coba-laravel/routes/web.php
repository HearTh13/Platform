<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home', [
        "title" => "Home"
    ]);
});

Route::get('/about', function () {
    return view('about', [
        "title" => "About",
        "Nama" => "Achmad Herlambang Prasetyo",
        "NIM" => "225314018"
    ]);
});

Route::get('/login', function () {
    return view('login', [
        "title" => "Login"
    ]);
});

Route::get('/register', function () {
    return view('register', [
        "title" => "Register"
    ]);
});



Route::get('/posts', function () {
    $posts = [
        [
            "Judul" => "Satu",
            "Author" => "Tyo",
            "Body" => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolore eos error enim repellendus dignissimos ex officia cumque possimus numquam praesentium dicta, animi voluptate excepturi quisquam commodi, assumenda recusandae necessitatibus nesciunt debitis fuga deleniti similique molestiae iusto. Consequuntur praesentium impedit odit quaerat necessitatibus deserunt mollitia odio similique aliquam repudiandae ad nam, est repellendus pariatur ea cupiditate. Reiciendis explicabo repellendus iste. Sunt, labore fugiat, inventore ex vero nostrum ad mollitia repudiandae accusantium et aliquid nisi, facilis explicabo vel veritatis tenetur! Et reprehenderit, fugiat saepe ad, recusandae ipsum officia incidunt, sed consectetur excepturi perspiciatis voluptatem commodi. Vel dolores dolorum cumque ipsum itaque."
        ],
        [
            "Judul" => "Dua",
            "Author" => "Achmad",
            "Body" => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eius odio quas! Corporis quidem, velit enim perspiciatis reiciendis necessitatibus hic nemo? Itaque suscipit maxime voluptatibus explicabo, quasi hic. Labore quo doloribus aspernatur odio. Et, molestiae neque deserunt dolores consequuntur quam officia libero velit quos impedit possimus nostrum, ratione, quaerat ea omnis fuga corrupti sint? Vero explicabo adipisci ex! Totam, minima!"
        ],
    ];
    return view('posts', [
        "title" => "Posts",
        "posts" => $posts
    ]);
});