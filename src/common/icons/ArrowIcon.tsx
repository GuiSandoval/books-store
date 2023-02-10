import React from 'react'

interface IArrowIconProps {
  position?: 'top' | 'bottom' | 'left' | 'right';
  color?: string;
  width?: string;
}

function ArrowIcon({ position, color, width }: IArrowIconProps) {
  return (
    <svg
      width={width || "16"}
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={color || "currentColor"}
        d="M6.00021 5.6543L1.83526 0.89436C1.59281 0.617269 1.17163 0.58919 0.894543 0.831645C0.617452 1.0741 0.589373 1.49527 0.831828 1.77237L5.49849 7.1057C5.7641 7.40925 6.23632 7.40925 6.50193 7.1057L11.1686 1.77237C11.4111 1.49527 11.383 1.0741 11.1059 0.831645C10.8288 0.58919 10.4076 0.617269 10.1652 0.89436L6.00021 5.6543Z"
      />
    </svg>

  )
}

export { ArrowIcon }