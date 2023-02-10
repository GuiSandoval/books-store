import React from 'react'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { BooksSection } from '../../components/BooksSection'
import * as S from './styles';

function Home() {
  const books = [
    {
      id: 1,
      title: 'O Senhor dos Anéis',
    },
    {
      id: 2,
      title: 'Harry Potter e a Pedra Filosofal',
    },
  ]

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