import React from "react";
import PropTypes from "prop-types";
import { ListItem, ItemStatus, ItemAvatar } from "./FriendListItem.syled";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <ListItem>
        <ItemStatus isOnline={isOnline}></ItemStatus>
        <ItemAvatar src={avatar} alt={name} />
        <p className="name">{name}</p>
      </ListItem>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};

export default FriendListItem;
