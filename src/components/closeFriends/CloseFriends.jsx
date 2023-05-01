import "./closeFriends.css";

export default function CloseFriends({user}) {
  return (
    <div>
       <li className="sidebarFriend">
          <img src={user.profilePicture} alt="person" className="sidebarFriendImg" />
          <span className="sidebarFriendName">{user.username}</span>
        </li>
    </div>
  )
}
