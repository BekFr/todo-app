import React from 'react';
import '../App.css'

export default function AppHeader({likes, posts}) {
  return (
    <div className='app_header'>
        <h1>Bekzod Shamsiyev</h1>
        <h2 className='info'>{posts} posts, {likes} likes</h2>
    </div>
  )
}