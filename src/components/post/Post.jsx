import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export default function Post() {
  return (
    <div>
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfilImg" src="/assets/img/p_1.jpg" alt="" />
                        <span className="postUsername">İpek</span>
                        <span className="postDate">5 min ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey! Its my fist post</span>
                    <img className="postImg" src="/assets/img/post1.jpg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                      <FavoriteIcon className="likeIcon" htmlColor="red"/> 
                      <ThumbUpIcon className="likeIcon" htmlColor="blue"/>
                      <span className="postLikeCounter">17 people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">10 comment</span>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}
