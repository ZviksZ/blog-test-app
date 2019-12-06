import React, {useContext} from 'react'
import {BlogItemForm}      from "../components/common/BlogItemForm.jsx";
import {BlogItemsList}     from "../components/BlogItems/BlogItemsList.jsx";
import {BlogContext}       from "../context/blog/blogContext.js";

export const Home = () => {

   const {state, addBlogItem} = useContext(BlogContext)

   return (
      <>
         <BlogItemForm onSubmit={addBlogItem}/>
         <BlogItemsList blogItems={state.blogItems}/>
      </>
   )
}