import React      from 'react'
import styles     from "../BlogItemsList.module.scss"
import {Animated} from "react-animated-css";


export const CommentItem = ({comment, deleteComment, itemId}) => (
   <Animated animationIn="zoomIn"
             animationOut="fadeOut"
             animationInDuration={400}>
      <li className={styles.commentsItem} id={comment.id}>

         <h5>{comment.name}</h5>
         <p>{comment.text}</p>


         <button onClick={() => deleteComment(itemId, comment.id)}
                 type="button"
                 className="btn btn-outline-danger btn-sm"
         >
            &times;
         </button>
      </li>
   </Animated>
)