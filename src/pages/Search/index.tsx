import React, { useEffect, useRef, useState } from 'react'

import { useSearch } from '../../contexts/SearchContext';
import { BooksList } from './BooksList';
import { FilterAside } from './FilterAside';
import * as S from './styles';
import { SearchValueProvider } from '../../hooks/useBookSearch';

function Search() {
  const { searchValue } = useSearch();

  function handleModalFilter() {
    console.log("abrir modal aqui")
  }

  return (
    <S.Container>
      <SearchValueProvider>
        <FilterAside />
        <S.AreaBooks>
          <h4>Resultados para "{searchValue}":</h4>
          <S.AreaFiltersMobile>
            <button type="button" onClick={() => window.location.reload()}>Limpar Busca</button>
            <button type="button" onClick={() => handleModalFilter()}>Filtrar</button>
          </S.AreaFiltersMobile>
          <BooksList />
        </S.AreaBooks>
      </SearchValueProvider>
    </S.Container >
  )
}

export { Search }