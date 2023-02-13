import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-top: 2rem;

  /* Mobile Responsive */
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const AreaBooks = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  > h4 {
    margin-bottom: 1rem;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const AreaFiltersMobile = styled.div`
  display: none;

  /* Mobile Responsive */
  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
  }
`;
