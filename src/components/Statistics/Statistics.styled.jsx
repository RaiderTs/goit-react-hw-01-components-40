import styled from '@emotion/styled';

export const StatisticsContainer = styled.section`
  display: inline-block;
  margin-left: 20px;
  margin-top: 50px;
  margin-bottom: 25px;
  padding-top: 25px;
  cursor: pointer;
  background-color: azure;
  box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06),
    0px 1px 1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms;
`;

export const Title = styled.h2`
  font-weight: 500;
  text-transform: uppercase;
  font-size: 30px;
  text-align: center;
  letter-spacing: 0.03em;
`;

export const List = styled.ul`
  display: flex;
  margin-top: 20px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 60px;
  color: #fff;
  transition: transform 250ms;
  &:hover,
  &:focus {
    transform: translateY(20px);
  }
`;
