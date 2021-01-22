<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Comment;
use App\Models\User;

class PageController extends Controller
{
    //
    public function posts()
    {
        return view("posts", [
            "posts" => Post::with("user")
                ->latest()
                ->paginate(),
        ]);
    }

    public function post(Post $post)
    {
        return view("post", [
            "post" => $post,
            /* "comments" => Comment::with("user")->latest()->paginate() */
            "comments" => Comment::where("post_id", "=", $post->id)->get(),
        ]);
    }

    public function user_home(User $user)
    {
        return view("user", [
            "user" => $user,
            "posts" => Post::where("user_id", "=", $user->id)->get(),
        ]);
    }
}
