import React, { useEffect, useState } from 'react'

import { BookCard } from '../../../components/BookCard';
import { useBooks } from '../../../services/hooks/useBooks';
import { useSearch } from '../../../contexts/SearchContext';
import * as S from './styles';
import { useBookSearch } from '../../../hooks/useBookSearch';
import { IBookSearch } from '../../../interfaces/boook';

function BooksList() {
  const { queryBooks, booksFiltered } = useBookSearch();
  const { data, fetchNextPage, isFetchingNextPage, isLoading } = queryBooks;

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) fetchNextPage();
    });

    intersectionObserver.observe(document.querySelector('#observerDiv')!);

    return () => intersectionObserver.disconnect();
  }, [])

  return (
    <S.Container>
      {isLoading && <p>Carregando...</p>}
      {booksFiltered?.map((book, index) => (
        <BookCard
          key={`${book.id}-${index}`}
          id={book.id}
          title={book.title}
          image={book.image}
          author={book.author}
        />
      ))}
      {isFetchingNextPage && !isLoading && <p>Carregando mais posts...</p>}
      <S.ObserverInfiniteScroll id="observerDiv" />
    </S.Container>
  )
}

export { BooksList }