@extends('layouts.main')

@section('content')
    <article class="mb-5">
        <h1 class="text-light"> <a href="/posts/">{{$post["Judul"]}}</a> </h1>
        <h2 class="text-light">By: {{$post["Author"]}} </h2>
        <p class="text-light"> {{$post["Body"]}} </p>
    </article>
    <a href="/posts">Back</a>
@endsection