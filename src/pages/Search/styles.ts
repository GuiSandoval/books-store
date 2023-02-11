import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-top: 2rem;
`;

export const FilterAside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: red;
  width: 30%;
`;

export const BooksList = styled.div`
  background: blue;
  width: 70%;
`;
