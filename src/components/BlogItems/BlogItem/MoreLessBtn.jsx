import React    from 'react'


export const MoreLessBtn = ({fullMode, toggleFullMode}) => (
   <div className="text-center">
      <button type="button"
              className="btn btn-outline-dark btm-sm center-block"
              onClick={toggleFullMode}>
         {
            fullMode ?
               <span>Скрыть полный текст</span>
               :
               <span>Показать полный текст</span>

         }
      </button>
   </div>
)