import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem";
import { List } from "./FriendList.styled";

const FriendList = ({ friends }) => (
  <List>
    {friends.map(item => (
      <FriendListItem key={item.id} {...item} />
    ))}
  </List>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired
};

export default FriendList;
