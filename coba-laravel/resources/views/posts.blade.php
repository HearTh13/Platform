@extends('layouts.main')

@section('content')
  @foreach ($posts as $post)
    <article class="mb-5">
        <h1 class="text-light"> {{$post["Judul"]}} </h1>
        <h2 class="text-light"> {{$post["Author"]}} </h2>
        <p class="text-light"> {{$post["Body"]}} </p>
    </article>
  @endforeach
@endsection