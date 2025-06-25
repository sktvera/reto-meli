/**
 * @author Julian David Vera Godoy
 * @description Styles for the FormLogin component
* @date 2025-06-24
 */

import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 300px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0069d9;
  }
`;


export default {
Button,
Input,
Form,
Main
};