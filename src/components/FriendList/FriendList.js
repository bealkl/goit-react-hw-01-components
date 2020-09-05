import React from 'react';
import './friends.css';
// eslint-disable-next-line
import PropTypes from 'prop-types';

function FriendList({ friends }) {
  return (
    <>
      <ul className="friend-list">
        {friends.map(data => {
          const { avatar, name, isOnline, id } = data;
          return (
            <li className="itemFriends" key={id}>
              <span className={isOnline ? 'statusIsOnline' : 'statusIsOffline'}></span>
              <img className="avatar" src={avatar} alt="" width="48" />
              <p className="name">{name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

// FriendList.PropTypes = {

//     id: PropTypes.number.isRequired,
//     avatar: PropTypes.string,
//     name: PropTypes.string.isRequired,
// isOnline: PropTypes.bool.isRequired,
// };

export default FriendList;
