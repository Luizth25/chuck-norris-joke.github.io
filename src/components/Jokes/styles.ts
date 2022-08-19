import styled, { css } from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Joke = styled.p`
  ${({ theme }) => css`
    background-color: ${theme.colors.componentColor};
    width: 50%;
    height: 50%;
    border-radius: 5px;
    border: 2px solid ${theme.colors.borderColor};
    text-align: center;
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    padding: 10px;
    width: 100px;
    margin: 15px;
    cursor: pointer;
    border-radius: 5px;
    background-color: ${theme.colors.buttonColor};
    border: 2px solid ${theme.colors.borderColor};
  `}
`;
