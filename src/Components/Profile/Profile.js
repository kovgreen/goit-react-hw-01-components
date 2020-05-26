import React from "react";
import PropTypes from "prop-types";
import {
  ProfileContainer,
  Discription,
  Avatar,
  Name,
  Tag,
  Location,
  StatsList,
  StatsItem,
  StatsLabel,
  StatsQuantity
} from "./Profile.styled";

const Profile = ({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes }
}) => (
  <ProfileContainer>
    <Discription>
      <Avatar src={avatar} alt={avatar} />
      <Name>{name}</Name>
      <Tag>{tag}</Tag>
      <Location>{location}</Location>
    </Discription>

    <StatsList>
      <StatsItem>
        <StatsLabel>Followers</StatsLabel>
        <StatsQuantity>{followers}</StatsQuantity>
      </StatsItem>
      <StatsItem>
        <StatsLabel>Views</StatsLabel>
        <StatsQuantity>{views}</StatsQuantity>
      </StatsItem>
      <StatsItem>
        <StatsLabel>Likes</StatsLabel>
        <StatsQuantity>{likes}</StatsQuantity>
      </StatsItem>
    </StatsList>
  </ProfileContainer>
);

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  }).isRequired
};

export default Profile;
