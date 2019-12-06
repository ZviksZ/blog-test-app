import {
   ADD_BLOG_ITEM,
   DELETE_BLOG_ITEM,
   EDIT_BLOG_ITEM,
   ADD_COMMENT,
   DELETE_COMMENT
} from "../types.js";

const handlers = {
   [ADD_BLOG_ITEM]: (state, {payload}) => ({
      ...state,
      blogItems: [payload,...state.blogItems]
   }),
   [DELETE_BLOG_ITEM]: (state, {payload}) => ({
      ...state,
      blogItems: state.blogItems.filter(b => b.id !== payload)
   }),
   [EDIT_BLOG_ITEM]: (state, {itemId, title, shortText, bigText}) => ({
      ...state,
      blogItems: state.blogItems.map(b => {
         if (itemId === b.id) {
            return {
               ...b,
               title, 
               shortText,
               bigText
            }
         }
         return b;
      })
   }),
   [ADD_COMMENT]: (state, {itemId, comment}) => ({
      ...state,
      blogItems: state.blogItems.map(b => {
         if (itemId === b.id) {
            b.comments.push(comment)
         }
         return b;
      })
   }),
   [DELETE_COMMENT]: (state, {itemId, commentId}) => ({
      ...state,
      blogItems: state.blogItems.map(b => {
         if (itemId === b.id) {
            return {
               ...b,
               comments: b.comments.filter(c => c.id !== commentId)
            }
         }
         return b;
      })
   }),
   DEFAULT: state => state
}

export const blogReducer = (state, action) => {
   const handle = handlers[action.type] || handlers.DEFAULT

   return handle(state, action)
}