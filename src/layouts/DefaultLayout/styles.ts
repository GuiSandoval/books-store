import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 4rem;
  min-height: 100vh;
  width: 100%;
  max-width: 80rem;

  /* Tablet Responsive */
  @media (max-width: 1024px) {
    padding: 0 2rem;
  }
  /* Mobile Responsive */
  @media (max-width: 425px) {
    padding: 0 1rem;
  }
`;

export const Content = styled.div``;
