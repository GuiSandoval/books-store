import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-top: 2rem;
`;

export const AreaBooks = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  > h4 {
    margin-bottom: 1rem;
  }
`;
