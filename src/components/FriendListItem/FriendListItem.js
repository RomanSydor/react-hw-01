import s from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.item}>
      <span className={`${s.dot} ${isOnline ? s.online : s.offline}`}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
