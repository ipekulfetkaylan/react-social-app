import "./rightbar.css";
import CelebrationIcon from "@mui/icons-material/Celebration";
import { Users } from "../../dummyData";
import Online from "../online/Online";
export default function Rightbar({profile}) {
  const HomeRightbar = ()=>{
    return(
      <>
         <div className="birthdayContainer">
          <CelebrationIcon className="birthdayImg" />
          <span className="birthdayText">
            <b>Joe and 3 other</b> friends have a birthday.
          </span>
        </div>
        <img
          src="/assets/img/reklam1.jpg"
          alt="reklam"
          className="rightbarAd"
        />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u =>(
             <Online key={u.id} user={u}/>
          ) )}
        </ul>
      </>
    )
  };

  const ProfileRightbar = ()=>{
    return ( 
      <>
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">Spain</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Barcelona</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Married</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="/assets/img/p_1.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Joe Doe</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/img/p_1.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Joe Doe</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/img/p_1.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Joe Doe</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/img/p_1" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Joe Doe</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/img/p_1.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Joe Doe</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
     
      </div>
    </div>
  );
}
