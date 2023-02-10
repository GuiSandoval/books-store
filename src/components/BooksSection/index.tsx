import React from 'react'
import * as S from './styles';
import { IBook } from '../../interfaces/boook';
import { BookCard } from '../BookCard';

interface IBooksSectionProps {
  title: string;
  books?: IBook[];
}

function BooksSection({ title, books }: IBooksSectionProps) {
  return (
    <S.Container>
      <h3>{title}</h3>
      <S.AreaBooks>
        {books?.map(book => (
          <BookCard key={book.id}
            id={book.id}
            image={book.image}
          />
        ))}
      </S.AreaBooks>

    </S.Container>
  )
}

export { BooksSection }