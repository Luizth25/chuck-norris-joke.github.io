import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fontStyles.title}
`;
