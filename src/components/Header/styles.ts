import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0;

  > a > div {
    width: 10rem;
    height: 2rem;
    overflow: auto;
    overflow: hidden;

    > svg {
      width: 100%;
      height: 100%;
    }
  }
`;

export const SearchForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 30rem;

  /* Mobile Responsive */
  @media (max-width: 426px) {
    display: none;
  }
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

export const AreaProfile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  max-width: 11.6rem;

  /* Table Responsive */
  @media (max-width: 1024px) {
    max-width: 8rem;
  }
`;

export const AreaNotification = styled.div`
  position: relative;
  margin: 0 0.8rem;

  :after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 0.5rem;
    height: 0.5rem;
    background: ${({ theme }) => theme["danger"]};
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme["white-1"]};
  }

  /* Tablet responsive */
  @media (min-width: 1024px) {
    display: none;
  }
`;
