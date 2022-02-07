import React from 'react';
import FriendListItem from '../FriendListItem';
import friends from '../../data/friends.json';
import PropTypes from 'prop-types';
import { List } from './FriendList.styled';

const FriendList = () => {
  return (
    <List>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;