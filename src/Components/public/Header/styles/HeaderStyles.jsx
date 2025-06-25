/**
 * @author Julian David Vera Godoy
 * @description Styled components for the Header component
* @date 2025-06-24
 */
import React from 'react';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #ffe600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  flex-wrap: wrap;
  border-bottom: 1px solid #e0e0e0;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Logo = styled.img`
  height: 36px;
  cursor: pointer;
`;

export const CenterForm = styled.form`
  flex: 1;
  display: flex;
  max-width: 600px;
  margin: 10px 20px;
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 40px 10px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
  outline: none;

  &:focus {
    border-color: #1196ef;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2); 
  }
`;

export const SearchButton = styled.button`
cursor: pointer;
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  padding: 6px;
  background: none;
  border: none;

  font-size: 18px;
  color: #555;
  z-index: 10;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const LinkSpan = styled.span`
  font-size: 13px;
  cursor: pointer;
  color: #333;
    font-family: Arial, sans-serif;
`;

export const SuggestionList = styled.ul`
  position: absolute;
  background-color: white;
  list-style: none;
  padding: 8px;
  margin: 0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  width: 100%;
  z-index: 200;
  border-radius: 4px;
  top: 100%;
`;

export const SuggestionItem = styled.li`
  padding: 6px 10px;
  cursor: pointer;
  border-bottom: 1px solid #ddd;
`;