import React from 'react'
import * as S from './styles';

interface IClearButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function ClearButton({ children, ...props }: IClearButtonProps) {
  return (
    <S.ClearButtonStyle {...props}>{children}</S.ClearButtonStyle>
  )
}

export { ClearButton }