import React from 'react';
import moment from 'moment';


const Post = ({posts}) => {
    return posts.map((post) => {
        return(
            <div className="card text-center my-3" key={post.id}>
                <div className="card-header">
                    <h3>{post.title}</h3>
                    <span> {moment(post.date_posted).format("LLL")}</span>
                </div>
                <div className="card-body">
                    <p>{post.content}</p>
                </div>
            </div>
        )
    })
}

export default Post;


