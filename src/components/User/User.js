import React from 'react';
import PropTypes from 'prop-types';

import s from '../../styles.module.css';

function User({ avatar, location, name, tag, stats }) {
  const { followers, views, likes } = stats;
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="userAvatar" className={s.avatar} />
        <div>
          <p className={s.name}>{name}</p>
          <p className={s.tag}>@{tag}</p>
          <p className={s.location}>{location}</p>
        </div>
      </div>
      <ul className={s.stats}>
        <li className={s.statsItem}>
          <p className={s.label}>{'followers'}</p>
          <p className={s.quantity}>{followers}</p>
        </li>
        <li className={s.statsItem}>
          <p className={s.label}>{'views'}</p>
          <p className={s.quantity}>{views}</p>
        </li>
        <li className={s.statsItem}>
          <p className={s.label}>{'likes'}</p>
          <p className={s.quantity}>{likes}</p>
        </li>
      </ul>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default User;
