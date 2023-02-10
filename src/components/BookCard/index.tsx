import React from 'react'

import { IBook } from '../../interfaces/boook'
import * as S from './styles'

interface IBookCardProps {
  id: string;
  image: string;
  title?: string;
  author?: string[];
}

function BookCard({ id, image, title, author }: IBookCardProps) {
  return (
    <S.Container>
      <img src={image} alt={title} />
      {title && <S.Title>{title}</S.Title>}
      {author && <S.Author>{author}</S.Author>}
    </S.Container>
  )
}

export { BookCard }