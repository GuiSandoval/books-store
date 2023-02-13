import styled from "styled-components";

export const ClearButtonStyle = styled.button`
  background: ${({ theme }) => theme["ice-blue-1"]};
  color: ${({ theme }) => theme["white"]};
  border: none;
  border-radius: 10px;
  cursor: pointer;

  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 600;

  padding: 1rem;
  margin: 1rem 0;
  width: 100%;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme["ice-blue-2"]};
  }
`;
