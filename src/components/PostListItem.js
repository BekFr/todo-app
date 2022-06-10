import { useState, useEffect } from 'react';
import '../App.css';

export default function PostListItem({label, id, removeList, likes, setLikes, idLiked, setIdLiked}) {
    let className = 'post_list_item';
    let [important, setImportant] = useState(false);
    let [isLiked, setIsLiked] = useState(false);   
    if(important) {
        className += ' important'
    };

    if(isLiked) {
        className += ' like';
    };

    const resLiked = () => {
        if(className.includes('like')) {
            setIdLiked([...idLiked, id])
        }
        console.log(idLiked);
    }
    
    const changeImportant = () => {
        setImportant(!important);
    };

    const changeLiked = () => {
        setIsLiked(!isLiked);
        if(isLiked){
            setLikes(likes - 1)
            resLiked()
        } else {
            setLikes(likes + 1)
        }
    }; 

    return (
        <li className={className}>
            <span onClick={changeLiked}>{label}</span>
            <div>
                <button onClick={changeImportant} className='icon'>
                    <i className='fa fa-star'></i>
                </button>
                <button onClick={() => {removeList(id)}} className='icon'>
                    <i className='fa fa-trash'></i>
                </button>
                <button onClick={changeLiked} className='icon'>
                    <i className='fa fa-heart'></i>
                </button>
            </div>
        </li>
    )
}
