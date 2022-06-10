import React from 'react'

export default function PostAddForm({addValue, setAddValue, addPost}) {
  return (
    <div className='post_add_form' action="#">
        <input 
            className='form_input'
            type="text"
            placeholder='  What are you thinking about?'
            onChange={(event) => {setAddValue(event.target.value)}}
            value = {addValue}
        />
        <button onClick={() => {setAddValue(''); addPost(addValue)} } className='add_btn' type='Submit'>Add Post</button>
    </div>
  )
}
