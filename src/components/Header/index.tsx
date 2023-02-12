import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { LogoIcon, NotificationIcon, SearchIcon } from '../../common/icons';

import { ProfileSection } from '../ProfileSection';
import * as S from './styles';
import { useSearch } from '../../contexts/SearchContext';

function Header() {
  const { searchValue, setSearchValue } = useSearch();
  const [search, setSearch] = useState(searchValue || '');
  const navigate = useNavigate();

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearchValue(search)
    navigate({ pathname: '/search', search: `?q=${search}` }, { replace: true })
  }

  function handleHome() {
    console.log("executou aqui mt loko")
    setSearch('')
    navigate({ pathname: '/' }, { replace: true })
  }

  return (
    <S.Container>
      <Link to='/' onClick={handleHome}>
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
      <S.NotificationIcon>
        <NotificationIcon />
      </S.NotificationIcon>
      <ProfileSection image="foto-perfil.jpg" name='Guilherme' />
    </S.Container >
  )
}

export { Header }