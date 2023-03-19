import React, { useState } from 'react';
import './Blog_Page.css'

function Blog_Page() {
 
    const[Search_Text,setSearch_Text]=useState('')
    const arr_blogs=[
        {id:1,
        Title:'UX review Presentations',
        status:'',
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries...`,
        image:'image 3.png',
        }
    ]
  return (
    <div className='blog_container'>
        <div className='our_blog'>
            <h4  className='title' >Our blog</h4>
            <h2 className='desc'>Stories and interviews</h2>
            <h5>The blog is the best source of information for interviews,tips,guides,industry best practices, and news.Subscribe for updates in your inbox every week </h5>
            <input type='text' placeholder='Search' onChange={(e)=>{setSearch_Text(e.target.value)}}/>
          
        </div>
        <div className='blog_result'>
            {arr_blogs.map(elemnts => {
                return(
                <div className='content'>
                    <img className='Blog_image' src='image 3.png' alt='im'/>
                    <div className='text_content'>
                        <h2>{elemnts.Title}</h2>
                        <h4 >{elemnts.description}</h4>
                    </div>
                    
                </div>
            )}
            )}
        </div>
    </div>
  )

}

export default Blog_Page