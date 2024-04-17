import React, { useState } from 'react';
import './Card.scss';
import "../styles/global.scss";

const Card = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [smileCount, setSmileCount] = useState(0);
  const [heartCount, setHeartCount] = useState(0);

  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
  };

  const handleSmileClick = () => {
    setSmileCount(smileCount + 1);
  };

  const handleHeartClick = () => {
    setHeartCount(heartCount + 1);
  };

  return (
    <div className="card-container">
      <div className="card purple">
        <div className="card-header">
          <h3>To. Sowon</h3>
          <div className="profile-info">
            <div className="card-body">
              <p className="author-count" style={{ color: 'black' }}>
                <b>30</b>명이 작성했어요!
              </p>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="reaction-icons">
            <button id="likeButton" className="icon" onClick={handleLikeClick}>
              <i className="like"></i> {likeCount}
            </button>
            <button id="smileButton" className="icon" onClick={handleSmileClick}>
              <i className="smile"></i> {smileCount}
            </button>
            <button id="heartButton" className="icon" onClick={handleHeartClick}>
              <i className="heart"></i> {heartCount}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;