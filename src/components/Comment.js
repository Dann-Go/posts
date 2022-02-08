import image from "../images/abstract-user-flat-1.svg"

function Comment(props){

    const {comment, userId} = props

    return (
        <div className="comment">
            <div className="comment__header">
                <div className="comment__tittle">{comment.name}</div>
                <div className="comment__user" id={`user-${userId}`}>
                    <img src={image} alt="user"/>
                </div>
            </div>
            <div className="comment__body">{comment.body}</div>
        </div>
    )
}

export default Comment;