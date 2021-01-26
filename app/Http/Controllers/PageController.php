<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Comment;
use App\Models\User;
use Inertia\Inertia;

class PageController extends Controller
{
    //

    public function posts()
    {
        $posts = Post::with('user')->latest()->get();
        return Inertia::render('Posts', [
            'posts'=>$posts
        ]);
    }

    public function post(string $author, int $id, string $post_slug)
    {
        $page_post = Post::where("id", "=", $id)->get();
        $post_author = User::where("id", "=", $page_post[0]->user->id)->get();

        return Inertia::render('Post', [
            'author'=>$post_author,
            'post'=>$page_post 
        ]);
    }
    public function user(User $user)
    {
        return Inertia::render('User', [
            'user'=>$user
        ]);
    }
}
