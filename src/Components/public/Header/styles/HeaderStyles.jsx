import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #fff159;
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
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 4px 0 0 4px;
  font-size: 14px;
`;

export const SearchButton = styled.button`
  padding: 10px 16px;
  background-color: #ededed;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 16px;
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