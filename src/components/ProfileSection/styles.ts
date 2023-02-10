import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 11.6rem;

  > img {
    display: block;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    object-fit: cover;
  }

  > p {
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme["tea-dark-1"]};
  }
`;
