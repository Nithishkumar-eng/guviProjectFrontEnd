import React from 'react'
import "./topbar.css"
import { useNavigate } from 'react-router-dom';
import { MdSearch,MdPermIdentity,MdChat,MdNotificationsNone } from "react-icons/md";
export default function topbar() {
  // const navigate = useNavigate();
  // const showProfile=()=>{
  //   navigate('profile');
  // }
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className="logo">Lamasocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
            {/* <Search className="searchIcon" /> */}
            <MdSearch className="searchIcon"/>
            <input
              placeholder="Search for friend, post or video"
              className="searchInput"
            />
          </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <MdPermIdentity/>
           
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <MdChat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <MdNotificationsNone />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt=""  className="topbarImg"/>
      </div>
    </div>
    
  )
}
