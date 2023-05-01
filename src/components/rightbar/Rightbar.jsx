import "./rightbar.css";
import CelebrationIcon from "@mui/icons-material/Celebration";
import { Users } from "../../dummyData";
import Online from "../online/Online";
export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
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
      </div>
    </div>
  );
}
