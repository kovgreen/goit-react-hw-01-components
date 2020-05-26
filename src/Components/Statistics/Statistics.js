import React from "react";
import PropTypes from "prop-types";
import colorGenerator from "../../helpers/colorGenerator";
import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  StatisticsLabel,
  StatisticsPercentage
} from "./Statistics.styled";

const Statistics = ({ title, stats }) => (
  <StatisticsSection>
    {title && <StatisticsTitle>{title}</StatisticsTitle>}
    <StatisticsList>
      {stats.map(({ id, label, percentage }) => (
        <StatisticsItem key={id} style={{ backgroundColor: colorGenerator() }}>
          <StatisticsLabel>{label}</StatisticsLabel>
          <StatisticsPercentage>{percentage}%</StatisticsPercentage>
        </StatisticsItem>
      ))}
    </StatisticsList>
  </StatisticsSection>
);

Statistics.defaultProps = {
  title: ""
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })
  ).isRequired
};

export default Statistics;
