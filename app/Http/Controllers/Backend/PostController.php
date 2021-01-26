<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use \App\Http\Request\PostRequest;
use Inertia\Inertia;
class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::with('user')->latest()->get();
        return Inertia::render('Posts', [
            'posts'=>$posts
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PostRequest $request)
    {
        //
        $custom_request= $request->validate([
            //here are our validations
        ]);
        //
        $post = Post::create([
            'user_id' => auth()->user()->id
            //we take the user from the login
        ] + $custom_request);

        //image
        if($request->file('file')){
            $post->image = $request->file('file')->store('posts', 'public');
            $post->save();
        }

        return back()->with('status', 'Created successfully');
        //we create de status session var, in the login view, we send an alert
        //if it exists, so it will dispay this message, we can use that feature
        //as a Template in other views
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        //
        $post->delete();
        return back();
        //return Redirect::route("posts")
    }
}
