import React, { useState } from 'react'
import "./post.css"
import {Users} from '../../dummyData'
export default function Post({post}) {
    const [like,setLike]=useState(post.like);
    const [isLiked,setIsLiked] = useState(false);
    const likeHandler=() =>{
        setLike(isLiked ? like-1 : like+1);
        setIsLiked(!isLiked);
    }
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                    <span className="postUsername">{Users.filter((u) => u.id === post.userId)[0].username}</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">

                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post.desc}</span>
                <img className='postImg' src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="assets/like.png" alt="" onClick={likeHandler} className="likeIcon" />
                    <img src="assets/heart.png" alt="" onClick={likeHandler} className="likeIcon" />
                    <span className="postLikeCounter">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>

        </div>
    </div>
  )
}
