import React, { useEffect, useState } from 'react'
import { useSearch } from '../../contexts/SearchContext';
import { useBooks } from '../../services/hooks/useBooks';

import * as S from './styles';
import { BookCard } from '../../components/BookCard';
import { CheckboxInput } from '../../common/CheckboxInput';

function Search() {
  const { searchValue } = useSearch();
  const { data, isLoading } = useBooks(searchValue);

  if (isLoading) return <div>Loading...</div>

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
      <S.BooksList>
        <h4>Resultados para "{searchValue}":</h4>
        <p>Lista aqui</p>
      </S.BooksList>
    </S.Container>
  )
}

export { Search }