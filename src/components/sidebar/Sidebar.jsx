import "./sidebar.css";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ChatIcon from '@mui/icons-material/Chat';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import PeopleIcon from '@mui/icons-material/People';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import WorkIcon from '@mui/icons-material/Work';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';
export default function Sidebar() {
  return (
  <div className="sidebar">
    <div className="sidebarWrapper">
      <ul className="sidebarList">
        <li className="sidebarListItem">
          <RssFeedIcon className="sidebarIcon"/>
          <span className="sidebarListItemText">Feed</span>
        </li>
        <li className="sidebarListItem">
          <ChatIcon className="sidebarIcon"/>
          <span className="sidebarListItemText">Chat</span>
        </li>
        <li className="sidebarListItem">
          <PlayCircleIcon className="sidebarIcon"/>
          <span className="sidebarListItemText">Videos</span>
        </li>
        <li className="sidebarListItem">
          <PeopleIcon className="sidebarIcon"/>
          <span className="sidebarListItemText">Groups</span>
        </li>
        <li className="sidebarListItem">
          <TurnedInIcon className="sidebarIcon"/>
          <span className="sidebarListItemText">Bookmarks</span>
        </li>
        <li className="sidebarListItem">
          <WorkIcon className="sidebarIcon"/>
          <span className="sidebarListItemText">Jobs</span>
        </li>
        <li className="sidebarListItem">
          <CalendarMonthIcon className="sidebarIcon"/>
          <span className="sidebarListItemText">Events</span>
        </li>
        <li className="sidebarListItem">
          <SchoolIcon className="sidebarIcon"/>
          <span className="sidebarListItemText">Courses</span>
        </li>
      </ul>
      <button className="sidebarButton">Show More</button>
      <hr className="sidebarHr"/>
      <ul className="sidebarFriendList">
        <li className="sidebarFriend">
          <img src="./assets/img/p_1.jpg" alt="person" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Jhon Doe</span>
        </li>
        <li className="sidebarFriend">
          <img src="./assets/img/p_1.jpg" alt="person" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Jhon Doe</span>
        </li>
        <li className="sidebarFriend">
          <img src="./assets/img/p_1.jpg" alt="person" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Jhon Doe</span>
        </li>
        <li className="sidebarFriend">
          <img src="./assets/img/p_1.jpg" alt="person" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Jhon Doe</span>
        </li>
        <li className="sidebarFriend">
          <img src="./assets/img/p_1.jpg" alt="person" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Jhon Doe</span>
        </li>
        <li className="sidebarFriend">
          <img src="./assets/img/p_1.jpg" alt="person" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Jhon Doe</span>
        </li>
        <li className="sidebarFriend">
          <img src="./assets/img/p_1.jpg" alt="person" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Jhon Doe</span>
        </li>
        <li className="sidebarFriend">
          <img src="./assets/img/p_1.jpg" alt="person" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Jhon Doe</span>
        </li>
        <li className="sidebarFriend">
          <img src="./assets/img/p_1.jpg" alt="person" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Jhon Doe</span>
        </li>
        <li className="sidebarFriend">
          <img src="./assets/img/p_1.jpg" alt="person" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Jhon Doe</span>
        </li>
        <li className="sidebarFriend">
          <img src="./assets/img/p_1.jpg" alt="person" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Jhon Doe</span>
        </li>
        <li className="sidebarFriend">
          <img src="./assets/img/p_1.jpg" alt="person" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Jhon Doe</span>
        </li>
        <li className="sidebarFriend">
          <img src="./assets/img/p_1.jpg" alt="person" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Jhon Doe</span>
        </li>
        <li className="sidebarFriend">
          <img src="./assets/img/p_1.jpg" alt="person" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Jhon Doe</span>
        </li>
        <li className="sidebarFriend">
          <img src="./assets/img/p_1.jpg" alt="person" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Jhon Doe</span>
        </li>
        <li className="sidebarFriend">
          <img src="./assets/img/p_1.jpg" alt="person" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Jhon Doe</span>
        </li>
        <li className="sidebarFriend">
          <img src="./assets/img/p_1.jpg" alt="person" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Jhon Doe</span>
        </li>
        <li className="sidebarFriend">
          <img src="./assets/img/p_1.jpg" alt="person" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Jhon Doe</span>
        </li>
        <li className="sidebarFriend">
          <img src="./assets/img/p_1.jpg" alt="person" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Jhon Doe</span>
        </li>
        <li className="sidebarFriend">
          <img src="./assets/img/p_1.jpg" alt="person" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Jhon Doe</span>
        </li>
      </ul>
    </div>
  </div>);
}
