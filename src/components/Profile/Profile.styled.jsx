import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  width: 300px;
  border: 3px solid #e7ecf2;
  border-radius: 10px;
  padding-top: 35px;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 34px;
`;

export const Avatar = styled.img`
  width: 110px;
  border-radius: 100%;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
  padding: 0;
  margin: 0;
  margin-bottom: 12px;
  margin-top: 24px;
`;

export const Tag = styled.p`
  display: flex;
  align-items: end;
  color: #888888;
  margin: 0;
  padding: 0;
  margin-bottom: 12px;
`;

export const Location = styled.p`
  color: #888888;
  margin: 0;
  padding: 0;
  margin-bottom: 12px;
`;

export const Stats = styled.ul`
  border-top: 3px solid #e4e9f0;
  background-color: #f3f6f9;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  border-right: 3px solid #e4e9f0;
  width: 33%;
  text-align: center;
  padding: 18px 5px;
  &:last-child {
    border-right: 0px solid;
  }
`;

export const Label = styled.span`
  color: #888888;
  display: block;
  font-size: 17px;
  padding-bottom: 2px;
`;

export const Quantity = styled.span`
  font-weight: bold;
  font-size: 17px;
`;
