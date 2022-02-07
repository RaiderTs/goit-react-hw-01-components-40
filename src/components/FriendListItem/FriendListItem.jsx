import React from 'react';
import defaultImage from '../../assets/man.png';
import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.defaultProps = {
  avatar: defaultImage,
  name: 'Не известно',
  isOnline: true,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
