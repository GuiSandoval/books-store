import React from 'react'

import { defaultTheme } from '../../styles/themes'
import { ArrowIcon } from '../../common/icons';
import * as S from './styles';

interface IProfileSectionProps {
  image: string;
  name: string;
}


function ProfileSection({ image, name }: IProfileSectionProps) {
  const colorIcon = defaultTheme['tea-dark-1']

  return (
    <S.Container>
      <img src={image} alt="" />
      <p>{name}</p>
      <ArrowIcon color={colorIcon} />
    </S.Container>
  )
}

export { ProfileSection }