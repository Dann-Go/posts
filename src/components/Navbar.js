import {Link} from "react-router-dom";

const Navbar = (props) => {
    const {users, setPosts, posts} = props;

    const handleChange = (e) => {
        const userId = e.target.value;
        const filteredPosts = posts.filter(post => post.userId == userId);
        setPosts(filteredPosts);
    }

    return (
        <nav className="navbar" onChange={handleChange}>
            <Link to="/">Posts</Link>
            <Link to="/albums">Albums</Link>

            <select name="Users" id="users">
                <option disabled selected>Users</option>
                {users.map(user => <option key={user.id} value={user.id}>{user.username}</option>)}
            </select>
        </nav>
    )
}

export default Navbar;