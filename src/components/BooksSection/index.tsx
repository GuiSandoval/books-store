import React from 'react'

import { Carousel } from '../../common/Carousel';
import { useBooksCategory } from '../../services/hooks/useBooks';
import { BookCard } from '../BookCard';
import * as S from './styles';

interface IBooksSectionProps {
  title: string;
  category: string;
}

function BooksSection({ title, category }: IBooksSectionProps) {
  if (!category) return null;
  const { data: books, isLoading } = useBooksCategory(category);

  if (isLoading) {
    return <h1>Loading...</h1>
  }

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