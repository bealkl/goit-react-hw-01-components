import React from 'react';
import styles from '../../styles.module.css';
// eslint-disable-next-line
import PropTypes from 'prop-types';

function User({ avatar, location, name, tag, stats: { followers, views, likes } }) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="userAvatar" className={styles.avatar} />
        <div>
          <p className={styles.name}>{name}</p>
          <p className={styles.tag}>@{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>
      </div>
      <ul className={styles.stats}>
        <li className={styles.statsItem}>
          <p className={styles.label}>{'followers'}</p>
          <p className={styles.quantity}>{followers}</p>
        </li>
        <li className={styles.statsItem}>
          <p className={styles.label}>{'views'}</p>
          <p className={styles.quantity}>{views}</p>
        </li>
        <li className={styles.statsItem}>
          <p className={styles.label}>{'likes'}</p>
          <p className={styles.quantity}>{likes}</p>
        </li>
      </ul>
    </div>
  );
}

// User.PropTypes = {
//   name: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   stats: PropTypes.shape({
//     followers: PropTypes.number.isRequired,
//     views: PropTypes.number.isRequired,
//     likes: PropTypes.number.isRequired,
//   }).isRequired,
// };

export default User;
