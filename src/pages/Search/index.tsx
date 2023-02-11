import React, { useEffect, useRef, useState } from 'react'
import { useSearch } from '../../contexts/SearchContext';
import { useBooks } from '../../services/hooks/useBooks';

import * as S from './styles';
import { BookCard } from '../../components/BookCard';
import { CheckboxInput } from '../../common/CheckboxInput';
import { IBook } from '../../interfaces/boook';

function Search() {
  console.log("executou aqui")
  const { searchValue } = useSearch();
  const { data, isLoading, hasNextPage, fetchNextPage } = useBooks(searchValue);
  const [books, setBooks] = useState<IBook[]>([]);
  const [filterValues, setFilterValues] = useState({
    price0To30: false,
    price31To50: false,
    price51To100: false,
    price100: false,
    isAvailable: false,
    isUnavailable: false,
    epub: false,
    pdf: false,
  });

  function handleFilter(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, checked } = e.currentTarget;

    setFilterValues(prev => ({
      ...prev,
      [value]: checked,
    }));
  }
  function refetchBooks() {
    fetchNextPage();
  }

  useEffect(() => {
    if (isLoading) return;

    const dataFormatted = data?.pages.reduce((acc, page) => {
      return [...acc, ...page];
    }, []);

    setBooks(dataFormatted);

  }, [isLoading, data]);

  useEffect(() => {
    if (isLoading) return;

    const intersectionObserver = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        console.log('Intersecting');
        refetchBooks();
      }
    }
    );

    intersectionObserver.observe(document.querySelector('#observerDiv')!);

    return () => intersectionObserver.disconnect();
  }, [isLoading])

  if (isLoading) return <div>Loading...</div>

  return (
    <S.Container>
      <S.FilterAside>
        <h4>Filtrar</h4>
        <p>Preço</p>
        <CheckboxInput labelText='de R$0 até R$30' value={'price0To30'} onChange={handleFilter} />
        <CheckboxInput labelText='de R$31 até R$50' value={'price31To50'} onChange={handleFilter} />
        <CheckboxInput labelText='de R$51 até R$100' value={'pric51To100'} onChange={handleFilter} />
        <CheckboxInput labelText='Mais de R$100' value={'price100'} onChange={handleFilter} />
        <p>Disponível para venda</p>
        <CheckboxInput labelText='Disponível' value={'isAvailable'} onChange={handleFilter} />
        <CheckboxInput labelText='Indisponível' value={'isUnavailable'} onChange={handleFilter} />
        <p>Formatos disponíveis</p>
        <CheckboxInput labelText='e-pub' value={'epub'} onChange={handleFilter} />
        <CheckboxInput labelText='PDF' value={'pdf'} onChange={handleFilter} />
      </S.FilterAside>
      <S.AreaBooks>
        <h4>Resultados para "{searchValue}":</h4>
        <S.BooksList>
          {books?.map(book => (
            <BookCard
              key={book.id}
              id={book.id}
              image={book.image}
              author={book.author}
              title={book.title}
            />
          ))}
          <S.ObserverInfiniteScroll id="observerDiv" />
        </S.BooksList>
      </S.AreaBooks>
    </S.Container>
  )
}

export { Search }