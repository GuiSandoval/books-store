import React from 'react'
import * as S from './styles';
import { CheckboxInput } from '../../../common/CheckboxInput';
import { useBookSearch } from '../../../hooks/useBookSearch';

function FilterAside() {
  const { updateFilterValues } = useBookSearch();

  function handleFilter(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, checked } = e.currentTarget;

    updateFilterValues(value, checked)
  }

  return (
    <S.Container>
      <h4>Filtrar</h4>
      <p>Preço</p>
      <CheckboxInput labelText='de R$0 até R$30' value={'price0To30'} onChange={handleFilter} />
      <CheckboxInput labelText='de R$31 até R$50' value={'price31To50'} onChange={handleFilter} />
      <CheckboxInput labelText='de R$51 até R$100' value={'price51To100'} onChange={handleFilter} />
      <CheckboxInput labelText='Mais de R$100' value={'price100'} onChange={handleFilter} />
      <p>Disponível para venda</p>
      <CheckboxInput labelText='Disponível' value={'isAvailable'} onChange={handleFilter} />
      <CheckboxInput labelText='Indisponível' value={'isUnavailable'} onChange={handleFilter} />
      <p>Formatos disponíveis</p>
      <CheckboxInput labelText='e-pub' value={'epub'} onChange={handleFilter} />
      <CheckboxInput labelText='PDF' value={'pdf'} onChange={handleFilter} />
    </S.Container>
  )
}

export { FilterAside }