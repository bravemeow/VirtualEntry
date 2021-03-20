import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Post from '../components/Post';


function PostPage() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('/api/posts')
            .then(res => setPosts(res.data))
    }, [])

    return(
        <>
            <h1>Posts</h1>
            <Post posts={posts} />
        </>
    )
}

export default PostPage;