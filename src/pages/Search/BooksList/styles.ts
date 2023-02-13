import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 120px);
  grid-gap: 0.4rem;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-top: 1rem;

  > div {
    margin-right: 0; //reset margin-right from BookCard
  }
`;

export const ObserverInfiniteScroll = styled.div`
  width: 100%;
  height: 5rem;
`;
