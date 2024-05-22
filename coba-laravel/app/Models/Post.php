<?php

namespace App\Models;

class Post {
    private static $blog = [
        [
            "Judul" => "Satu",
            "slug" => "judul-post-pertama",
            "Author" => "Tyo",
            "Body" => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolore eos error enim repellendus dignissimos ex officia cumque possimus numquam praesentium dicta, animi voluptate excepturi quisquam commodi, assumenda recusandae necessitatibus nesciunt debitis fuga deleniti similique molestiae iusto. Consequuntur praesentium impedit odit quaerat necessitatibus deserunt mollitia odio similique aliquam repudiandae ad nam, est repellendus pariatur ea cupiditate. Reiciendis explicabo repellendus iste. Sunt, labore fugiat, inventore ex vero nostrum ad mollitia repudiandae accusantium et aliquid nisi, facilis explicabo vel veritatis tenetur! Et reprehenderit, fugiat saepe ad, recusandae ipsum officia incidunt, sed consectetur excepturi perspiciatis voluptatem commodi. Vel dolores dolorum cumque ipsum itaque."
        ],
        [
            "Judul" => "Dua",
            "slug" => "judul-post-kedua",
            "Author" => "Achmad",
            "Body" => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eius odio quas! Corporis quidem, velit enim perspiciatis reiciendis necessitatibus hic nemo? Itaque suscipit maxime voluptatibus explicabo, quasi hic. Labore quo doloribus aspernatur odio. Et, molestiae neque deserunt dolores consequuntur quam officia libero velit quos impedit possimus nostrum, ratione, quaerat ea omnis fuga corrupti sint? Vero explicabo adipisci ex! Totam, minima!"
        ]
    ];

    public static function all(){
        return collect(self::$blog);
    }

    public static function find($slug){
        $posts = static::all();
        // $new_post = [];
        // foreach ($posts as $post){
        //     if ($post["slug"] === $slug){
        //         $new_post = $post;
        //     }
        // }

        return $posts->firstWhere('slug', $slug);

    }
    
}
