import React from 'react'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { BooksSection } from '../../components/BooksSection'
import * as S from './styles';
import { useBooks } from '../../services/hooks/useBooks';

function Home() {
  const { data: books } = useBooks('adventures');
  console.log("executou aqui ")

  if (!books) {
    return <p>Carregando...</p>
  }

  return (
    <S.Container>
      <BooksSection title='Aventura' books={books} />
      <BooksSection title="Ação" books={books} />
      <BooksSection title="Destaques" books={books} />
      <BooksSection title="Infantil" books={books} />
    </S.Container>
  )
}

export { Home }