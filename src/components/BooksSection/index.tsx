import React from 'react'
import * as S from './styles';
import { IBook } from '../../interfaces/boook';
import { BookCard } from '../BookCard';
import { Carousel } from '../../common/Carousel';

interface IBooksSectionProps {
  title: string;
  books?: IBook[];
}

function BooksSection({ title, books }: IBooksSectionProps) {
  return (
    <S.Container>
      <h3>{title}</h3>
      <Carousel>
        <S.AreaBooks>
          {books?.map(book => (
            <BookCard key={book.id}
              id={book.id}
              image={book.image}
            />
          ))}
        </S.AreaBooks>
      </Carousel>

    </S.Container>
  )
}

export { BooksSection }