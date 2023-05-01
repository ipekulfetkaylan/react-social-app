import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({post}) {
    const [like, setLike]= useState(post.like);
    const [isLike, setIsLike]= useState(false);

    const likeHandler = ()=>{
        setLike( isLike ? like - 1 : like + 1)
        setIsLike(!isLike)
    }
  return (
    <div>
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfilImg" src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt="" />
                        <span className="postUsername">{Users.filter( u=> u.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                     <button onClick={likeHandler}><FavoriteIcon className="likeIcon" htmlColor="red"/> </button> 
                     <button  onClick={likeHandler}><ThumbUpIcon className="likeIcon" htmlColor="blue"/></button> 
                      <span className="postLikeCounter">{like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comment</span>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}
