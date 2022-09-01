import React from 'react'
import "./sidebar.css"
import {Users} from '../../dummyData'
import CloseFriend from '../closeFriend/CloseFriend'
import { useNavigate} from 'react-router-dom'
import { MdRssFeed,MdPlayCircleOutline,MdGroup,MdBookmark,MdOutlineHelpOutline,MdWorkOutline,MdEvent,MdSchool,MdLogout } from "react-icons/md";
import { BsChatSquareText } from "react-icons/bs";
export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className='sidebar' >
       <div className="sidebarWrapper">
       
       <ul className="sidebarList">
          <li className="sidebarListItem">
            <MdRssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <BsChatSquareText className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <MdPlayCircleOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <MdGroup className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <MdBookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <MdOutlineHelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <MdWorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <MdEvent className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <MdSchool className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
          <li className="sidebarListItem">
            <MdLogout className="sidebarIcon" />
            <span className="sidebarListItemText logout" onClick={()=>navigate('/') }>Log out</span>
          </li>
        </ul>
        <button  className='sidebarButton'> Show more</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
            {Users.map(u=>(
                <CloseFriend key={u.id} user={u}/>
            ))}
        </ul>
        </div> 
    </div>
  )
}
