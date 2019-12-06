import React, {useState} from 'react'

export const SimpleForm = ({itemId, onSubmit}) => {
   const [authorName, setAuthorName] = useState('')
   const [commentText, setCommentText] = useState('')

   const clearFields = () => {
      setAuthorName('')
      setCommentText('')
   }

   const submitHandler = event => {
      event.preventDefault()
      onSubmit(itemId, authorName, commentText)

      clearFields()
   }

   return (
      <form onSubmit={submitHandler}>
         <h5>Добавить комментарий</h5>
         <div className="form-group">
            <input
               type="text"
               className="form-control mb-3"
               placeholder='Имя'
               required={true}
               value={authorName}
               onChange={e => setAuthorName(e.target.value)}
            />
            <textarea
               className="form-control mb-3"
               placeholder='Текст комментария'
               required={true}
               value={commentText}
               onChange={e => setCommentText(e.target.value)}
            />

            <button className="btn btn-dark" type="submit">Отправить</button>
         </div>
      </form>
   )
}