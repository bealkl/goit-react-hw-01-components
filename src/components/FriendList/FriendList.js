import React from 'react';
import PropTypes from 'prop-types';

import s from './friends.module.css';

function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        const statusClass = isOnline ? s.statusIsOnline : s.statusIsOffline;
        return (
          <li className={s.itemFriends} key={id}>
            <span className={statusClass}></span>
            <img className={s.avatar} src={avatar} alt="" width="48" />
            <p className={s.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendList;
