import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const SearchForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 30rem;
`;
export const SearchInput = styled.input`
  background: ${({ theme }) => theme["white-1"]};
  border: 1px solid ${({ theme }) => theme["gray-light-2"]};
  border-radius: 1.4rem;
  padding: 1rem;
  outline: none;
  height: 2.5rem;
  width: 100%;
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 1rem;
  margin: auto 0;
  background: none;
  border: none;
  outline: none;

  cursor: pointer;
`;
