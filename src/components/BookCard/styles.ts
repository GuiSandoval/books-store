import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > img {
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme["gray-light-1"]};
    height: 180px;
    width: 120px;
    object-fit: cover;
    margin-right: 2rem;
  }

  &: hover {
    > img {
      transform: scale(1.1);
      transition: 0.4s ease-in-out;
      z-index: 10;
    }
  }
`;

export const Title = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme["black"]};
  margin: 0.6rem 0;
`;

export const Author = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme["gray-light-1"]};
`;
