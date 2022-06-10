import './App.css';
import React, {useState, useEffect } from 'react';
import AppHeader from './components/AppHeader';
import PostAddForm from './components/PostAddForm';
import PostList from './components/PostList';
import PostStatusFilter from './components/PostStatusFilter';
import SearchPanel from './components/SearchPanel';

function App() {

  let [data, setData] = useState ([]);
  let id = -1;

  const idMaker = () => {
    data.map((item) => {
      id ++;
     item.id = id
    })
  };

  idMaker();

  // useEffect (() => {idMaker}, [setData])

  let [addvalue, setAddValue] = useState('')

  const removeList = (id) => {
    let newData =data.filter((item) => item.id !== id);
    setData(newData)
  }

  const addPost = (label) => {
    let newListItem = {label : label} 
    let newData = [...data, newListItem]
    setData(newData)
  }

  // Calculate posts` and likes` amount

  let [likes, setLikes] = useState(0);
  let [posts, setPosts] = useState(3);

  useEffect(
    () => {setPosts(data.length)}
  , [data])

  // Search section

  let [searchItem, setSearchItem] = useState('');

  const searchFoo = () => {
    if(searchItem.length === 0) {
      return data
    }
    const newData = data.filter(item => item.label.indexOf(searchItem) > -1);
    return newData
  };

  // Filter by like

  let [likedArray, setLikedArray] = useState([]);
  let [idLiked, setIdLiked] = useState([]);

  const filterLiked = () => {
    idLiked.map((index) => {
      return setLikedArray(likedArray.push(data[index]))
    })
    setData(likedArray)
  };

  const allData = () => {
    
  };

  return (
    <div className="App">
      <AppHeader
        likes = {likes}
        posts = {posts}
      />
      <div className='Search_filter'>
        <SearchPanel 
          searchItem = {searchItem} 
          setSearchItem = {setSearchItem}  
        />
          
        <PostStatusFilter 
          filterLiked = {filterLiked} 
          allData = {allData}
        />
      </div>
      <PostList 
        data = {searchFoo()} 
        removeList = {removeList}
        likes = {likes}
        setLikes = {setLikes}
        posts = {posts}
        setPosts = {setPosts}
        likedArray = {likedArray}
        setLikedArray = {setLikedArray}
        idLiked = {idLiked}
        setIdLiked = {setIdLiked}
      />
      <PostAddForm
        addValue = {addvalue}
        setAddValue = {setAddValue}
        addPost = {addPost}
      />
    </div>
  );
}

export default App;
