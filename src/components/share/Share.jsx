import "./share.css";
import React from "react";
import { MdPermMedia,MdOutlineAddLocation} from "react-icons/md";
import { BsFillTagFill,BsEmojiSmile } from "react-icons/bs";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input
            placeholder="What's in your mind Safak?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <MdPermMedia htmlColor="tomato" className="shareIcon MdPermMedia"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                    <BsFillTagFill htmlColor="blue" className="shareIcon BsFillTagFill"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <MdOutlineAddLocation htmlColor="green" className="shareIcon MdOutlineAddLocation"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <BsEmojiSmile htmlColor="goldenrod" className="shareIcon BsEmojiSmile"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}