import styled from "styled-components";

interface IArrowButtonProps {
  direction: "left" | "right";
}

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

export const CarouselContent = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ArrowButton = styled.button<IArrowButtonProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  border: none;
  outline: none;
  cursor: pointer;
  height: 100%;
  padding: 0 0.4rem;
  z-index: 10;

  @media (min-width: 768px) {
    background: none;

    > svg {
      width: 1.6rem;
      height: 1.5rem;
      background: #fff;
      border-radius: 50%;
      padding: 0.5rem;
    }
  }

  background: ${({ direction }) =>
    direction === "left"
      ? "linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%)"
      : "linear-gradient(270deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%)"};

  ${({ direction }) => (direction === "left" ? ` left: 0;` : `right: 0; `)}
`;
