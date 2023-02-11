import React, { useEffect } from 'react'
import { useSearch } from '../../contexts/SearchContext';
import { useBooks } from '../../services/hooks/useBooks';

import * as S from './styles';
import { BookCard } from '../../components/BookCard';

function Search() {
  const { searchValue } = useSearch();
  const { data, isLoading } = useBooks(searchValue);

  if (isLoading) {
    return <div>Loading...</div>
  }

  console.log('data')
  console.log(data)

  return (
    <S.Container>
      <S.FilterAside>
        <h4>Filtrar</h4>
        <p>Preço</p>
        <input type="checkbox" name="" id="" />
        <input type="checkbox" name="" id="" />
        <input type="checkbox" name="" id="" />
        <input type="checkbox" name="" id="" />
        <p>Disponível para venda</p>
        <input type="checkbox" name="" id="" />
        <input type="checkbox" name="" id="" />
        <p>Formatos disponíveis</p>
        <input type="checkbox" name="" id="" />
        <input type="checkbox" name="" id="" />
      </S.FilterAside>
      <S.BooksList>
        <h4>Resultados para "{searchValue}":</h4>
        <p>Lista aqui</p>
      </S.BooksList>
    </S.Container>
  )
}

export { Search }