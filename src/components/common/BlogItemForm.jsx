import React, {useState, useContext} from 'react'
import {BlogContext}                 from "../../context/blog/blogContext.js";

export const BlogItemForm = ({initialTitle = '', shortTxt = '', bigTxt = '', onSubmit, itemId, setEditMode}) => {
   const [title, setTitle] = useState(initialTitle)
   const [shortText, setShortText] = useState(shortTxt)
   const [bigText, setBigText] = useState(bigTxt)

   const {addBlogItem} = useContext(BlogContext)

   const clearFields = () => {
      setTitle('')
      setShortText('')
      setBigText('')
   }
   
   const submitHandler = event => {
      event.preventDefault()
      if (itemId && setEditMode) {
         onSubmit(itemId, title, shortText, bigText)
         setEditMode(false)
      } else {
         onSubmit(title, shortText, bigText)
      }     

      clearFields()
   }

   return (
      <form onSubmit={submitHandler}>
         <h3>Форма для добавления статьи</h3>
         <div className="form-group">
            <input
               type="text"
               className="form-control mb-3"
               placeholder='Название статьи'
               required={true}
               value={title}
               onChange={e => setTitle(e.target.value)}
            />
            <input
               type="text"
               className="form-control mb-3"
               placeholder='Краткое описание'
               required={true}
               value={shortText}
               onChange={e => setShortText(e.target.value)}
            />
            <textarea
               className="form-control mb-3"
               placeholder='Полный текст статьи'
               required={true}
               value={bigText}
               onChange={e => setBigText(e.target.value)}
            />

            <button className="btn btn-dark" type="submit">Добавить статью</button>
         </div>
      </form>
   )
}