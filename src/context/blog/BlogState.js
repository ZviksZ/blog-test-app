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

const testBlogItems = [{
   "id": "2019-12-06T13:49:43.724Z",
   "title": "Тестовая статья 3",
   "shortText": "Душа",
   "bigText": "Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я. Я так счастлив, мой друг, так упоен ощущением покоя, что искусство мое страдает от этого. Ни одного штриха не мог бы я сделать, а никогда не был таким большим художником, как в эти минуты. ",
   "comments": [{"id": "2019-12-06T13:55:56.433Z", "name": "Павел", "text": "Отлично!!!"}, {"id": "2019-12-06T13:56:07.963Z", "name": "Мария", "text": "Великолепно"}],
   "date": "2019-12-06T13:49:43.724Z"
}, {
   "id": "2019-12-06T13:49:13.089Z",
   "title": "Тестовая статья 2 ",
   "shortText": "Горы",
   "bigText": "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами. Эта парадигматическая страна, в которой жаренные члены предложения залетают прямо в рот. Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографичный образ жизни. Однажды одна маленькая строчка рыбного текста по имени Lorem ipsum решила выйти в большой мир грамматики. Великий Оксмокс предупреждал ее о злых запятых, диких знаках вопроса и коварных точках с запятой, но текст не дал сбить себя с толку.",
   "comments": [{"id": "2019-12-06T13:55:56.433Z", "name": "Павел", "text": "Отлично!!!"}, {"id": "2019-12-06T13:56:07.963Z", "name": "Мария", "text": "Великолепно"}],
   "date": "2019-12-06T13:49:13.089Z"
}, {
   "id": "2019-12-06T13:48:41.296Z",
   "title": "Тестовая статья 1",
   "shortText": "Сон",
   "bigText": "Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое. Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову, свой коричневый, выпуклый, разделенный дугообразными чешуйками живот, на верхушке которого еле держалось готовое вот-вот окончательно сползти одеяло. Его многочисленные, убого тонкие по сравнению с остальным телом ножки беспомощно копошились у него перед глазами. «Что со мной случилось?» – подумал он. Это не было сном. Его комната, настоящая, разве что слишком маленькая, но обычная комната, мирно покоилась в своих четырех хорошо",
   "comments": [{"id": "2019-12-06T13:55:56.433Z", "name": "Павел", "text": "Отлично!!!"}, {"id": "2019-12-06T13:56:07.963Z", "name": "Мария", "text": "Великолепно"}],
   "date": "2019-12-06T13:48:41.296Z"
}]


export const BlogState = ({children}) => {
   const initialState = {
      blogItems: JSON.parse(localStorage.getItem("blogItems")) || testBlogItems
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

   const editBlogItem = (itemId, title, shortText, bigText) => {
      dispatch({type: EDIT_BLOG_ITEM, itemId, title, shortText, bigText})
   }

   const addComment = (itemId, commentName, commentText) => {
      const comment = {
         id: new Date().toJSON(),
         name: commentName,
         text: commentText
      }

      dispatch({type: ADD_COMMENT, itemId, comment})

   }

   const deleteComment = (itemId, commentId) => {
      dispatch({type: DELETE_COMMENT, itemId, commentId})
   }

   return (
      <BlogContext.Provider value={{
         addBlogItem, removeBlogItem, addComment, deleteComment, editBlogItem, state
      }}>
         {children}
      </BlogContext.Provider>
   )
}