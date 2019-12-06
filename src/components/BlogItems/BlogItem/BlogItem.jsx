import React, {useState}    from 'react'
import {BlogItemForm, Form} from "../../common/BlogItemForm.jsx";
import {SimpleForm}         from "../../common/SimpleForm/SimpleForm.jsx";
import styles               from "../BlogItemsList.module.scss"
import {CommentItem}        from "./CommentsItem.jsx";
import LazyLoad             from 'react-lazyload';
import {Animated}           from "react-animated-css";
import {MoreLessBtn}        from "./MoreLessBtn.jsx";


export const BlogItem = React.memo(({index, item, removeBlogItem, addComment, deleteComment, editBlogItem}) => {
   const [editMode, setEditMode] = useState(false)
   const [fullMode, setFullMode] = useState(false)

   const toggleFullMode = () => {
      fullMode
         ? setFullMode(false) : setFullMode(true)
   }

   return (

      <LazyLoad debounce={300} height={200} once>
         <Animated animationIn="fadeInRight"
                   animationOut="rollOut"
                   animationOutDuration={2000}>
            <li className={`${styles.blogItem} list-group-item`}
                id={item.id}>
               {
                  !editMode
                     ? <div>
                        <h3 className={styles.itemTitle}>{item.title}</h3>

                        {fullMode
                           ? <Animated animationIn="zoomIn"
                                       animationOut="fadeOut"
                                       animationInDuration={400}>
                              <div className={styles.fullMode}>
                                 <p className={styles.bigText}>{item.bigText}</p>

                                 <hr/>

                                 <div className={styles.comments}>
                                    <h5 className={styles.commentsTitle}>Список комментариев</h5>
                                    {item.comments.length > 0
                                       ?
                                       <ul className={styles.commentsList}>
                                          {
                                             item.comments.map(c => <CommentItem key={c.id}
                                                                                 comment={c}
                                                                                 itemId={item.id}
                                                                                 deleteComment={deleteComment}/>)
                                          }
                                       </ul>
                                       :
                                       <p>Комментариев пока нет. Будьте первым.</p>

                                    }

                                    <hr/>

                                    <SimpleForm itemId={item.id} onSubmit={addComment}/>

                                 </div>
                              </div>
                           </Animated>
                           :
                           <div>
                              <p className={styles.shortText}>
                                 <b>Краткое описание статьи: </b> {item.shortText}
                              </p>
                              <p>
                                 <b>Комментариев: {item.comments.length}</b>
                              </p>
                           </div>
                        }

                        <MoreLessBtn fullMode={fullMode} toggleFullMode={toggleFullMode}/>


                        <div className={styles.buttons}>
                           <button type="button"
                                   className="btn btn-outline-info btn-sm"
                                   onClick={() => setEditMode(true)}>
                              Редактировать
                           </button>

                           <button type="button"
                                   className="btn btn-outline-danger btn-sm"
                                   onClick={() => removeBlogItem(item.id)}>
                              Удалить
                           </button>
                        </div>

                     </div>
                     :
                     <BlogItemForm
                        onSubmit={editBlogItem}
                        itemId={item.id}
                        initialTitle={item.title}
                        bigTxt={item.bigText}
                        shortTxt={item.shortText}
                        setEditMode={setEditMode}
                     />
               }
            </li>
         </Animated>
      </LazyLoad>

   )
});