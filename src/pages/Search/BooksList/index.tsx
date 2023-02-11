import React, { useEffect, useState } from 'react'

import { BookCard } from '../../../components/BookCard';
import { useBooks } from '../../../services/hooks/useBooks';
import { useSearch } from '../../../contexts/SearchContext';
import * as S from './styles';

function BooksList() {
  const { searchValue } = useSearch();
  const { data, isLoading, fetchNextPage, isFetchingNextPage } = useBooks(searchValue);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) fetchNextPage();
    });

    intersectionObserver.observe(document.querySelector('#observerDiv')!);

    return () => intersectionObserver.disconnect();
  }, [])


  const books = data?.pages.reduce((acc, page) => ([...acc, ...page]), [])

  return (
    <S.Container>
      {isLoading && <p>Carregando...</p>}
      {books?.map(book => (
        <BookCard
          key={book.id}
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