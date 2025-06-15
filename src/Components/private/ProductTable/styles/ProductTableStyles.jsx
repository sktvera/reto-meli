import styled from 'styled-components';

 export const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

 export const Card = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 16px;
  margin-bottom: 0.5px;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin-right: 16px;
`;

 export const Info = styled.div`
  flex: 1;
`;

export const Title = styled.h3`
  font-size: 16px;
  margin: 0 0 8px 0;
  color: #333;
`;
 export const Price = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 4px 0;
  color: #00a650;
`;

 export const Condition = styled.p`
  font-size: 14px;
  color: #555;
  margin: 2px 0;
`;

 export const Seller = styled.p`
  font-size: 13px;
  color: #777;
`;

 export const Location = styled.p`
  font-size: 13px;
  color: #777;
`;

export const Link = styled.a`
  color: #000000; /* o el color que desees */
  text-decoration: none;
cursor: pointer;
`;




