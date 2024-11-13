import React, { useState } from 'react';


function CommentsList() {

    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    const deleteComment = (id) => {
        setComments(comments.filter(comment => comment.id !== id));
    }


    return (
        <div>
            <h2>{comments.length > 0 ? "Комментарии" : "Нет комментариев"}</h2>
            {comments.map((comment) =>
                <div className="comment-item " key={comment.id}>
                    <p>{comment.text}</p>
                    <button className='delete-btn' onClick={() => deleteComment(comment.id)}>Удалить комментарий</button>
                </div>)}
        </div>)
}

export default CommentsList;