import React from 'react';
import '../App.css'


export default function PostStatusFilter({filterLiked, allData}) {
  return (
    <div className='post_filter'>
        <button className='filter_all' onClick={allData}>
            All    
        </button>
        <button className='filter_liked' onClick={filterLiked}>
            Liked
        </button>        
    </div>
  )
}
