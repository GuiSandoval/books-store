import React, { useEffect, useRef, useState } from 'react'

import { useSearch } from '../../contexts/SearchContext';
import { BooksList } from './BooksList';
import { FilterAside } from './FilterAside';
import * as S from './styles';
import { SearchValueProvider, useBookSearch } from '../../hooks/useBookSearch';
import { Modal } from '../../common/Modal';
import { ClearButton } from '../../components/ClearButton';

function SearchInside() {
  const { searchValue } = useSearch();
  const { clearFilterValues, filterValues } = useBookSearch();

  function handleClearSearch() {
    clearFilterValues()
  }

  const hasFilterSelected = Object.values(filterValues).some(Boolean);

  return (
    <S.Container>
      <FilterAside />
      <S.AreaBooks>
        <h4>Resultados para "{searchValue}":</h4>
        <S.AreaFiltersMobile>
          <Modal title="Filtrar" >
            <FilterAside isModalFilter />
          </Modal>
          {hasFilterSelected &&
            <ClearButton type="button" onClick={handleClearSearch}>
              Limpar Busca
            </ClearButton>
          }
        </S.AreaFiltersMobile>
        <BooksList />
      </S.AreaBooks>
    </S.Container >
  )
}
const Search = () =>
  <SearchValueProvider>
    <SearchInside />
  </SearchValueProvider>

export { Search }