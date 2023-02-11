import React, { useRef } from 'react'

import { ArrowIcon } from '../icons';
import { defaultTheme } from '../../styles/themes';
import * as S from './styles';

interface ICarouselProps {
  children: React.ReactNode;
}

const COLOR_ARROW_ICON = defaultTheme['ice-blue-1']

function Carousel({ children }: ICarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)

  function handleLeftClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (carouselRef?.current) {
      carouselRef.current.scrollLeft -= carouselRef?.current?.offsetWidth;
    }
  }

  function handleRightClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (carouselRef?.current) {
      carouselRef.current.scrollLeft += carouselRef?.current?.offsetWidth;
    }
  }

  return (
    <S.Container>
      <S.CarouselContent ref={carouselRef} data-testid="area-carousel">
        {children}
      </S.CarouselContent>
      <S.ArrowButton
        direction="left"
        data-testid="left-arrow-carousel"
        onClick={(e) => handleLeftClick(e)}
      >
        <ArrowIcon color={COLOR_ARROW_ICON} direction='left' />
      </S.ArrowButton>
      <S.ArrowButton
        direction="right"
        data-testid="right-arrow-carousel"
        onClick={(e) => handleRightClick(e)}
      >
        <ArrowIcon color={COLOR_ARROW_ICON} direction='right' />
      </S.ArrowButton>

    </S.Container>
  )
}

export { Carousel }