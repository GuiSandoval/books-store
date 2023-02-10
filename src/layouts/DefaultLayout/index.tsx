import React from 'react'
import { Outlet } from 'react-router-dom';

import { Header } from '../../components/Header';
import * as S from './styles';

function DefaultLayout() {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <Outlet />
      </S.Content>
    </S.Container>
  )
}
export { DefaultLayout }