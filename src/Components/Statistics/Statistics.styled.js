import styled from "styled-components";

export const StatisticsSection = styled.section`
  width: 270px;
  margin: 0 auto;
  padding: 50px 0;
  font-family: "Lato", "sans-serif";
  font-weight: 400;
  line-height: 1.2;
  border-radius: 2px;
  box-shadow: 0px 2px 2px 0px rgba(2, 2, 2, 0.02);
`;

export const StatisticsTitle = styled.h2`
  margin: 0;
  padding: 30px 10px;
  font-size: 16px;
  font-weight: 600;
  color: rgb(71, 89, 101);
  background-color: rgb(255, 255, 255);
  text-align: center;
  text-transform: uppercase;
`;

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  /* background-color: rgb(210, 200, 200); */
  flex-basis: 20%;
  padding: 6px 0;
  text-align: center;
  color: rgb(255, 255, 255);
`;

export const StatisticsLabel = styled.span`
  font-size: 12px;
  line-height: 1.6;
  font-weight: 300;
`;

export const StatisticsPercentage = styled.span`
  font-size: 18px;
`;
