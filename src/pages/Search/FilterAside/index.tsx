import React from 'react'
import * as S from './styles';
import { CheckboxInput } from '../../../common/CheckboxInput';
import { useBookSearch } from '../../../hooks/useBookSearch';

function FilterAside() {
  const { filterValues, updateFilterValues, clearFilterValues } = useBookSearch();

  function handleFilter(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, checked } = e.currentTarget;

    updateFilterValues(value, checked)
  }

  function handleClearFilter() {
    clearFilterValues()
  }

  const hasFilterSelected = Object.values(filterValues).some(Boolean);

  return (
    <S.Container>
      <h4>Filtrar</h4>
      {hasFilterSelected && <S.ClearButton type='button' onClick={handleClearFilter}>Limpar Filtro</S.ClearButton>}
      <p>Preço</p>
      <CheckboxInput labelText='de R$0 até R$30' value={'price0To30'} onChange={handleFilter} checked={filterValues.price0To30} />
      <CheckboxInput labelText='de R$31 até R$50' value={'price31To50'} onChange={handleFilter} checked={filterValues.price31To50} />
      <CheckboxInput labelText='de R$51 até R$100' value={'price51To100'} onChange={handleFilter} checked={filterValues.price51To100} />
      <CheckboxInput labelText='Mais de R$100' value={'price100'} onChange={handleFilter} checked={filterValues.price100} />
      <p>Disponível para venda</p>
      <CheckboxInput labelText='Disponível' value={'isAvailable'} onChange={handleFilter} checked={filterValues.isAvailable} />
      <CheckboxInput labelText='Indisponível' value={'isUnavailable'} onChange={handleFilter} checked={filterValues.isUnavailable} />
      <p>Formatos disponíveis</p>
      <CheckboxInput labelText='e-pub' value={'epub'} onChange={handleFilter} checked={filterValues.epub} />
      <CheckboxInput labelText='PDF' value={'pdf'} onChange={handleFilter} checked={filterValues.pdf} />
    </S.Container>
  )
}

export { FilterAside }