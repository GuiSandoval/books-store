import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  > img {
    display: block;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    object-fit: cover;
  }

  > p {
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme["tea-dark-1"]};
  }

  /* Desktop Responsive */
  @media (min-width: 1025px) {
    width: 100%;
  }

  /* Tablet Responsive */
  @media (max-width: 1024px) {
    > p,
    > svg {
      display: none;
    }
  }
`;

interface IProfileDrowdown {
  $isOpen: boolean;
}
const HEIGHT_PROFILE_DROPDOWN = "auto";
export const ProfileDrowdown = styled.div<IProfileDrowdown>`
  position: absolute;
  height: ${HEIGHT_PROFILE_DROPDOWN};
  width: 100%;
  top: calc(100% + 0.5rem);
  left: 0;
  background: ${({ theme }) => theme["ice-blue-2"]};
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  /* padding: 0.6rem 0; */
`;

export const ProfileDrowdownItem = styled.div`
  padding: 0.6rem 0.4rem;
  transition: background 0.2s ease-out;
  user-select: none;

  &:hover {
    background: ${({ theme }) => theme["ice-blue-1"]};
  }
`;
