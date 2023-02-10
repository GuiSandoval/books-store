import React from 'react'

import * as S from './styles';
import { Header } from '../../components/Header';

interface DefaultLayoutProps {
  children: React.ReactNode
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <S.Container>
      <Header />
      <S.Content>
        {children}
      </S.Content>
    </S.Container>
  )
}
export { DefaultLayout }