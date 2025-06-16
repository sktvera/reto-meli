import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  font-family: 'DejaVu Sans', 'Liberation Sans', Arial, sans-serif;
  background-color: #f5f5f5;
`;

export const Card = styled.div`
  display: flex;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12);
cursor: pointer;
  overflow: hidden;
  margin-bottom: 1px;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  }
`;

export const Image = styled.img`
  width: 160px;
  height: auto;
  object-fit: contain;
  padding: 12px;
  background-color: #fff;
`;

export const Info = styled.div`
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

export const Brand = styled.h4`
  font-size: 12px;
  font-weight: bold;
  color: #333;
  margin: 0 0 4px 0;
  text-transform: uppercase;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: normal;
  margin: 0 0 8px 0;
  color: #333;
`;

export const Link = styled.a`
  color: #333;
  text-decoration: none;

  &:hover {
    color: #3483fa;
    text-decoration: underline;
  }
`;

export const Price = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #00a650;
  margin: 4px 0;
`;

export const Condition = styled.p`
  font-size: 14px;
  color: #555;
  margin: 2px 0;
`;

export const Seller = styled.p`
  font-size: 13px;
  color: #555;
`;

export const Location = styled.p`
  font-size: 13px;
  color: #999;
`;

export const Installments = styled.p`
  font-size: 14px;
  color: #000;
  margin: 2px 0;
`;

export const FreeShipping = styled.p`
  font-size: 13px;
  color: #00a650;
  font-weight: bold;
  margin-top: 4px;
`;