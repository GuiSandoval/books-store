import React from 'react'
import * as S from './styles';

interface ICheckboxInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
}

function CheckboxInput({ labelText, ...props }: ICheckboxInputProps) {
  return (
    <S.Container>
      <input type="checkbox" {...props} />
      {labelText}
    </S.Container>
  )
}

export { CheckboxInput }