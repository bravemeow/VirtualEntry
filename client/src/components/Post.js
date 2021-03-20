import React, {useState, useEffect} from 'react';
import axios from 'axios';
import moment from 'moment';


function Post() {
    const [posts, setPosts] = useState([]);
        useEffect(() => {
            axios.get('/api/posts')
                .then(res => setPosts(res.data))
        }, [])
        return posts.map((post) => {
            return(
                <div className="post" key={post.id}>
                    <div className="post-title">
                        <h2>Title : {post.title}</h2>
                        <span> {moment(post.date_posted).format("LLL")}</span>
                    </div>
                    <div className="post-content">
                        <p>{post.content}</p>
                    </div>
                </div>
            )
        })
}

export default Post;