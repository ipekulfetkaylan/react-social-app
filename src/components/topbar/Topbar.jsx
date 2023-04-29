import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">SocialFriend</span>
        </div>
        <div className="topbarCenter">
            <div className="searchBar">
                <SearchIcon className="searchIcon"/>
                <input type="text" placeholder="Search friends, post and video.." className="searchInput" />

            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">HomePage</span>
                <span className="topbarLink">TimeLine</span>
            </div>
            <div className="topbarIcon">
                <div className="topbarItemIcon">
                    <PersonIcon/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarItemIcon">
                    <NotificationsIcon/>
                    <span className="topbarIconBadge">3</span>
                </div>
                <div className="topbarItemIcon">
                    <ChatIcon/>
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>
            <img src="/assets/img/pexels-daniel-xavier-1239291.jpg" alt="person" className="topbarImg" />
        </div>
    
    </div>
  )
}
