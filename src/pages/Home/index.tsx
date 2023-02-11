import React from 'react'

import { BooksSection } from '../../components/BooksSection'
import * as S from './styles';

function Home() {
  return (
    <S.Container>
      <BooksSection title='Aventura' category='adventures' />
      <BooksSection title="Ação" category='action' />
      <BooksSection title="Destaques" category='kids' />
      <BooksSection title="Infantil" category='kids' />
    </S.Container>
  )
}

export { Home }