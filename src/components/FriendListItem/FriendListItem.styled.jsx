import styled from '@emotion/styled';

export const Item = styled.li`
  width: 276px;
  height: 80px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  padding: 8px 14px;
  margin: 10px 0;
  margin-left: 20px;
  cursor: pointer;
  background-color: rgb(225, 247, 245);
  box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06),
    0px 1px 1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms;
  &:hover,
  &:focus {
    transform: translateX(20px);
  }
  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const Status = styled.span`
  display: block;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? '#5ca95e' : '#fa554c')};
`;

export const Avatar = styled.img`
  margin: 7%;
`;

export const Name = styled.p`
  margin-bottom: 8px;
  margin-left: 10px;
  font-weight: 500;
  font-size: 18px;
`;
