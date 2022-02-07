import styled from '@emotion/styled';

export const History = styled.table`
  width: 700px;
  margin-left: 20px;
  margin-top: 50px;
  cursor: pointer;
  box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06),
    0px 1px 1px rgba(0, 0, 0, 0.12);
`;

export const Heading = styled.thead`
  height: 50px;
  background-color: #00bcd5;
  color: #fff;
`;

export const Row = styled.tr`
  transition: transform 100ms;
  &:nth-of-type(2n + 1) {
    background-color: #fff;
  }
  &:nth-of-type(2n) {
    background-color: #ecf1f4;
  }
  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 4px -2px 33px 16px rgba(0, 188, 213, 0.18);
  }
`;

export const Cell = styled.td`
  width: 200px;
  padding: 10px 0;
`;
