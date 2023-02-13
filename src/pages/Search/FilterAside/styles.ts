import styled from "styled-components";
import { ClearButtonStyle } from "../../../components/ClearButton/styles";

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  > p {
    color: ${({ theme }) => theme["ice-blue-1"]};
    margin: 0.4rem 0 0.4rem;
    font-size: 0.8rem;
    font-weight: 500;
  }
`;

export const ClearButton = styled(ClearButtonStyle)`
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.8rem 1.2rem;
  width: fit-content;

  &:hover {
    background: ${({ theme }) => theme["ice-blue-2"]};
  }

  &:hover {
    background: ${({ theme }) => theme["ice-blue-2"]};
  }

  /* create after element with x */
  &:after {
    content: "x";
    margin-left: 0.5rem;
  }

  /* Tablet responsive */
  @media (max-width: 1024px) {
    font-size: 0.6rem;
    padding: 0.6rem 0.6rem;
    text-align: left;
  }

  /* Mobile Responsive */
  @media (max-width: 425px) {
    display: none;
  }
`;
