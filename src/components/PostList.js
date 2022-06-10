import React from 'react';
import '../App.css';
import PostListItem from './PostListItem'

export default function PostList({data, removeList, likes, posts, setLikes, setPosts, likedArray, setLikedArray, idLiked, setIdLiked}) {
  
  return (
    <ul className='post_list'>
        {data.map(item =>{ 
          return(
          <PostListItem 
            label = {item.label}
            id = {item.id}
            removeList = {removeList}
            likes = {likes}
            setLikes = {setLikes}
            posts = {posts}
            setPosts = {setPosts}
            likedArray = {likedArray}
            setLikedArray = {setLikedArray}
            idLiked = {idLiked}
            setIdLiked = {setIdLiked}
          />) }
        )}
    </ul>
  )
}