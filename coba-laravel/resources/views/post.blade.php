@extends('layouts.main')

@section('content')
    <article class="mb-5 mt-5">
        <h1 class="text-dark"> {{$post["Judul"]}} </h1>
        <h2 class="text-dark">By: {{$post["Author"]}} </h2>
        <p class="text-dark"> {{$post["Body"]}} </p>
    </article>
    <a href="/posts">Back</a>
@endsection