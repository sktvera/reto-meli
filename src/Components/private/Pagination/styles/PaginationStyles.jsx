import styled, { css } from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  flex-wrap: wrap;
  gap: 4px;
`;

export const PageButton = styled.button`
  padding: 8px 12px;
  font-size: 14px;
  background-color: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: #333;
  transition: background-color 0.2s, border 0.2s;

  ${({ isActive }) =>
    isActive &&
    css`
      border: 2px solid #3483fa;
      color: #3483fa;
      font-weight: bold;
    `} &:hover {
    background-color: #007bff2d;
   
  }
`;

export const NextButton = styled.button`
  padding: 8px 12px;
  font-size: 14px;
  color: #333;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #007bff2d;
   border-radius: 8px;
  }
`;