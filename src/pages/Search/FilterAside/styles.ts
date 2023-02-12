import styled from "styled-components";

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 30%;

  > h4 {
    margin-bottom: 1rem;
  }

  > p {
    color: ${({ theme }) => theme["ice-blue-1"]};
    margin: 0.4rem 0 0.4rem;
    font-size: 0.8rem;
    font-weight: 500;
  }
`;

export const ClearButton = styled.button`
  background: ${({ theme }) => theme["ice-blue-1"]};
  color: ${({ theme }) => theme["white"]};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.8rem 1.2rem;
  margin-bottom: 1rem;
  transition: all 0.2s;

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
`;
