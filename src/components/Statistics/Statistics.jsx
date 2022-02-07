import React from 'react';
import randomColor from '../../helpers/randomColor';
import PropTypes from 'prop-types';
import { StatisticsContainer, Title, List, Item } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id} style={{ background: randomColor() }}>
            <span>{label}</span>
            <span>{percentage}</span>
          </Item>
        ))}
      </List>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
