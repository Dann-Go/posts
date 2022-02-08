import image from "../images/abstract-user-flat-1.svg"
import {useState} from "react";
import axios from "axios";
import Comment from "./Comment";
import Loader from "./Loader";

const Post = (props) => {
    const [isShown, setIsShown] = useState(false);
    const [comments, setComments] = useState([]);
    const [immComments, setImmComments] = useState([]);
    const [showLoader, setShowLoader] = useState(false);

    const btnText = isShown ? "Hide comments" : "Show comments";

    const {post,user} = props;

    const showComments =() => {
        if (immComments.length === 0 && !isShown) {
            setShowLoader(true)
            const requestComments = async () => {
                const commentsRequest = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${props.post.id}`)
                setComments(commentsRequest.data);
                setImmComments(commentsRequest.data);
            }
            setShowLoader(false);
            requestComments();
            setIsShown(true)
        } else if (isShown) {
            setComments([]);
            setIsShown(false);
        } else {
            setComments(immComments);
            setIsShown(true);
        }
    }

    function showModalWindow() {
        props.showModal(true);
        props.showUser(user);
    }

    return (
        <div className="post" id={`postId-${post.id}`}>
            <div className="post__header">
                <div className="post__title">{post.title}</div>
                <div className="post__user" id={`user-${post.userId}`}>
                    <img src={image} alt="user" onClick={showModalWindow}/>
                </div>
            </div>
            <div className="post__body">{post.body}</div>
            <div className="post__comments">

                <div className="comments__toolbar">
                    <button type="button" className="custom-btn visibility-comments-btn" id="showCommentsBtn"
                            onClick={showComments}>{`${btnText}`}
                    </button>
                </div>
                {showLoader ? <Loader/> : null}
                <ul className="comments__list" id={`commentsList-${post.id}`}>
                    {isShown ? comments.map(comment => <li><Comment key={comment.id} comment={comment} userId={1}/></li>) : null}
                </ul>
            </div>
        </div>
    )
}

export default Post;