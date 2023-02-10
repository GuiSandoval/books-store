import React from 'react'
import * as S from './styles';

interface IBooksSectionProps {
  title: string;
  books: any[]
}

function BooksSection({ title, books }: IBooksSectionProps) {
  return (
    <S.Container>
      <h3>{title}</h3>
      <S.AreaBooks>
        area do livro
      </S.AreaBooks>

    </S.Container>
  )
}

export { BooksSection }