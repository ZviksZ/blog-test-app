import React, {useEffect, useReducer} from 'react'
import {
   ADD_BLOG_ITEM,
   DELETE_BLOG_ITEM,
   EDIT_BLOG_ITEM,
   ADD_COMMENT,
   DELETE_COMMENT
}                                     from "../types.js";
import {blogReducer}                  from "./blogReducer.js";
import {BlogContext}                  from "./blogContext.js";


export const BlogState = ({children}) => {
   const initialState = {
      blogItems: JSON.parse(localStorage.getItem("blogItems")) || []
   }
   const [state, dispatch] = useReducer(blogReducer, initialState)
   
   useEffect(() => {
      localStorage.setItem('blogItems', JSON.stringify(state.blogItems));
   }, [state.blogItems])

   const addBlogItem = (title, shortText, bigText) => {
      const item = {
         id: new Date().toJSON(),
         title: title,
         shortText: shortText,
         bigText: bigText,
         comments: [],
         date: new Date().toJSON(),
      }

      dispatch({type: ADD_BLOG_ITEM, payload: item})

   }

   const removeBlogItem = id => {      
      dispatch({
         type: DELETE_BLOG_ITEM,
         payload: id
      })
   }
   
   const editBlogItem =  (itemId, title, shortText, bigText) => {
      dispatch({ type: EDIT_BLOG_ITEM, itemId, title, shortText, bigText })
   }
   
   const addComment = (itemId, commentName, commentText) => {
      const comment = {
         id: new Date().toJSON(),
         name: commentName,
         text: commentText
      }
      
      dispatch({ type: ADD_COMMENT, itemId, comment })
      
   }
   
   const deleteComment = (itemId, commentId) => {
      dispatch({ type: DELETE_COMMENT, itemId, commentId })
   }

   return (
      <BlogContext.Provider value={{
         addBlogItem, removeBlogItem, addComment, deleteComment, editBlogItem, state}}>
         {children}
      </BlogContext.Provider>
   )
}