@extends('layouts.main')

@section('content')
  @foreach ($posts as $post)
    <article class="mb-5">
        <h1 class="text-light"> <a href="/posts/{{$post["slug"]}}">{{$post["Judul"]}}</a> </h1>
        <h2 class="text-light">By: {{$post["Author"]}} </h2>
        <p class="text-light"> {{$post["Body"]}} </p>
    </article>
  @endforeach
@endsection