import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  width: 400px;
  padding: 10px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 3px 5px 3px rgba(0, 0, 0, 0.2);
  :not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const ItemStatus = styled.span`
  align-self: center;
  margin-right: 15px;
  width: 20px;
  height: 20px;
  background-color: ${props =>
    props.isOnline ? "rgb(0, 207, 0)" : "rgb(218, 0, 0)"};
  border-radius: 50%;
`;

export const ItemAvatar = styled.img`
  display: block;
  max-width: 100%;
  width: 100px;
  height: 100px;
  margin-right: 15px;
  border-radius: 10px;
`;

export const ItemName = styled.p`
  align-self: center;
  margin: 0;
  font-family: "Lato", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  vertical-align: middle;
`;
