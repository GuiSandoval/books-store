import styled from "styled-components";

export const Container = styled.label`
  display: flex;
  flex-direction: row;
  cursor: pointer;

  color: ${({ theme }) => theme["tea-dark-2"]};
  font-size: 1rem;
  font-weight: 500;

  > input {
    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;
    border: 1px solid ${({ theme }) => theme["tea-dark-2"]};
    border-radius: 4px;
    cursor: pointer;
    vertical-align: middle;
    appearance: none;

    height: 1rem;
    width: 1rem;
    margin: 0 0.4rem 0.4rem 0;
    transition: all 0.2s ease-in-out;

    &:hover {
      filter: brightness(1.2);
    }

    &:checked {
      background: ${({ theme }) => theme["tea-dark-2"]};
      border-color: ${({ theme }) => theme["tea-dark-2"]};

      &:after {
        content: "✓";
        color: ${({ theme }) => theme["white"]};
      }
    }
  }
`;
