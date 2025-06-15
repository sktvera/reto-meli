import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #f2f2f2;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 30px;
`;

const BottomSection = styled.div`
  border-top: 1px solid #ddd;
  text-align: center;
  padding-top: 20px;
  color: #666;
  font-size: 13px;
`;

const Column = styled.div`
  flex: 1;
  min-width: 180px;
  margin-bottom: 20px;
`;

const ColumnTitle = styled.h4`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 10px;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledLink = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 13px;
  display: block;
  margin-bottom: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

const LegalLink = styled.a`
  color: #666;
  margin: 0 8px;
  text-decoration: none;
  font-size: 13px;

  &:hover {
    text-decoration: underline;
  }
`;

const LegalDivider = styled.span`
  margin: 0 5px;
  color: #999;
`;

const Copyright = styled.p`
  margin-top: 10px;
  color: #999;
`;


export default {
  FooterWrapper,
  TopSection,
  BottomSection,
  Column,
  ColumnTitle,
  LinkList,
  StyledLink,
  LegalLink,
  LegalDivider,
  Copyright,
};