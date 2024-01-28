import React, { useState } from 'react'

import { defaultTheme } from '../../styles/themes'
import { ArrowIcon } from '../../common/icons';
import { useConfigProject } from '../../hooks/useProjectApp';
import * as S from './styles';

interface IProfileSectionProps {
  image: string;
  name: string;
}

function handleClickOption(cb: () => void) {
  return (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    cb();
  }

}

function ProfileSection({ image, name }: IProfileSectionProps) {
  const colorIcon = defaultTheme['tea-dark-1']
  const { themeLayout, toggleLayoutMode } = useConfigProject();

  const [openDropdown, setOpenDropdown] = useState(false);
  const OPTIONS_DROPDOWN = [
    {
      label: `${themeLayout === 'light' ? 'Dark' : 'Light'} mode`,
      onClick: handleClickOption(() => { toggleLayoutMode() })
    },
    {
      label: 'Perfil',
      onClick: handleClickOption(() => console.log('Perfil'))
    },
    {
      label: 'Configurações',
      onClick: handleClickOption(() => console.log('Configurações'))
    },
    {
      label: 'Sair',
      onClick: handleClickOption(() => console.log('Sair'))
    }
  ]
  function handleProfileClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
    e.stopPropagation();
    setOpenDropdown(prev => !prev);
  }
  return (
    <S.Container
      onClick={handleProfileClick}
    >
      <img src={image} alt="" />
      <p>{name}</p>
      <ArrowIcon color={colorIcon} />
      <S.ProfileDrowdown $isOpen={openDropdown} >
        {OPTIONS_DROPDOWN.map((option, index) => (
          <S.ProfileDrowdownItem
            key={index}
            onClick={option.onClick}
          >
            {option.label}
          </S.ProfileDrowdownItem>
        ))
        }
      </S.ProfileDrowdown>
    </S.Container>
  )
}

export { ProfileSection }