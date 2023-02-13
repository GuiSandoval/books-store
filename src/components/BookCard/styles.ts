import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  width: 120px;
  margin-right: 2rem;

  > img {
    height: 180px;
    width: 100%;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme["gray-light-1"]};
    object-fit: cover;
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
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme["black"]};
  margin: 0.6rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Author = styled.p`
  font-size: 0.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme["gray-light-1"]};
`;
