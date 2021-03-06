import React, {useContext} from 'react'
import {BlogContext}       from "../../context/blog/blogContext.js";
import {BlogItem}          from "./BlogItem/BlogItem.jsx";
import styles              from "./BlogItemsList.module.scss"


export const BlogItemsList = ({blogItems}) => {
   const {removeBlogItem, addComment, deleteComment, editBlogItem} = useContext(BlogContext)

   return (
      <div className={styles.blogWrap}>
         <h2>Список статей</h2>
         {
            blogItems.length ?
               <ul className={styles.blogItemsList}>
                  {blogItems.map((blog, i) => <BlogItem key={blog.id}
                                                        item={blog}
                                                        index={i}
                                                        addComment={addComment}
                                                        deleteComment={deleteComment}
                                                        editBlogItem={editBlogItem}
                                                        removeBlogItem={removeBlogItem}/>)}
               </ul>
               :
               <p>Здесь пока ничего нет.</p>
         }

      </div>
   )
}