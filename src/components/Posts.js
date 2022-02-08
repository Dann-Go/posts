import Post from "./Post";

function Posts(props) {

    const {posts, showUser, showModal} = props;

    return (
        <div className="post__container">
            {posts.map(post =><Post key={post.id.value} post={post} showModal={showModal} user={props.users.data.filter(u => u.id == post.userId)} showUser = {showUser}/> )}
        </div>
    )
}

export default Posts;