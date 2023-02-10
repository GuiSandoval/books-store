import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import ImageProfile from '../../assets/images/profile.jpg';
import { LogoIcon, SearchIcon } from '../../common/icons';

import { ProfileSection } from '../ProfileSection';
import * as S from './styles';

function Header() {
  const [search, setSearch] = useState('');
  const redirect = useNavigate();

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(search);
    setSearch('');
    redirect('/search');
  }

  return (
    <S.Container>
      <Link to='/'>
        <LogoIcon />
      </Link>
      <S.SearchForm onSubmit={handleSearch}>
        <S.SearchInput
          type="text"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          placeholder="Search"
        />
        <S.SearchButton type='submit' >
          <SearchIcon />
        </S.SearchButton>

      </S.SearchForm>

      <ProfileSection image="foto-perfil.jpg" name='Guilherme' />
    </S.Container >
  )
}

export { Header }