import { Link } from 'react-router-dom';
import React from 'react'
import {useGlobalContext} from '../context'

const Blog = () => {
    const {blogPosts} = useGlobalContext();
    // console.log(blogPosts)
    return (            
      blogPosts && blogPosts.map(post=>{
        // console.log(post)
        return (
          <article key={post.id} id={`post-${post.id}`} className={`post-${post.id} post hentry`}>
            <header className="entry-header">
              <h2 className="entry-title">
                <Link to={post.slug}>{post.title}</Link>
              </h2>	
            </header>

            <div className="entry-content" dangerouslySetInnerHTML={{__html: post.content}} />
            
            <footer className="entry-footer">
                <span className="posted-on">
                  <span className="screen-reader-text">Posted on </span>
                  <Link to={post.slug}>
                    <time className="entry-date published" dateTime={post.date}>{post.date}</time>
                  </Link>
                </span>
            </footer>
          </article>
        )
      })
      
    )
}

export default Blog