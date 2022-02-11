import './css/App.css';
import Navbar from "./components/Navbar";
import {useEffect, useState} from "react";
import axios from "axios";
import Posts from "./components/Posts";
import ModalWindow from "./components/ModalWindow";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [postsList, setPostsList] = useState([]);
    const [showModalWindow, setShowModalWindow] = useState(false);
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const usersResponse = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUsers(usersResponse);
        }
        getUsers();

        const getPosts = async () => {
            const postsResponse = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(postsResponse.data);
            setPostsList(postsResponse.data);
        }

        getPosts()
    }, [])
    return (
        <Router>
            {showModalWindow ? <ModalWindow isShow={setShowModalWindow} user={userInfo}/> : null}
            {users.data ? <Navbar users={users.data} posts={postsList} setPosts={setPosts}/> : null}
            <Routes>
                <Route path="/" element={posts ? <Posts posts={posts} showModal={setShowModalWindow} users={users} showUser={setUserInfo}/> : null}/>
                <Route path="/albums" element ={null}/>
            </Routes>
        </Router>
    );
}

export default App;
