import styled from "styled-components";

export const Container = styled.header`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "logo search profile";
  padding: 0.8rem 0;

  > a {
    grid-area: logo;

    > div {
      width: 10rem;
      height: 2rem;
      overflow: auto;
      overflow: hidden;

      > svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  /* Tablet Responsive */
  @media (max-width: 1024px) {
    grid-template-columns: 10rem 1fr 6rem;
  }
  /* Mobile Responsive */
  @media (max-width: 425px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 2rem;
    grid-template-areas:
      "logo profile"
      "search search";
  }
`;

export const SearchForm = styled.form`
  grid-area: search;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 30rem;
  margin: 0 auto;

  /* Mobile Responsive */
  @media (max-width: 426px) {
    /* margin: 1rem 0 0; */
    /* max-width: 100%; */
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
  grid-area: profile;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  max-width: 11.6rem;
  margin-left: auto;

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

export const LogoText = styled.h1`
  color: ${({ theme }) => theme["tea-dark-1"]};
`;
