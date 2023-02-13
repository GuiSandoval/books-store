import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { FilterIcon } from "../icons";

interface Props {
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
}

const Modal: React.FC<Props> = ({ title, children, onClose = () => { } }) => {
  const [isShowing, setIsShowing] = useState(false);

  const handleOpen = () => {
    setIsShowing(true);
  }

  const handleClose = () => {
    setIsShowing(false);
    onClose();
  };

  return (
    <>
      <S.ButtonOpenModal onClick={handleOpen}>
        <FilterIcon />
        <span>Filtrar</span>
      </S.ButtonOpenModal>
      {isShowing && (
        <S.Container>
          <S.ModalContainer>
            <S.ModalHeader>
              <h3>{title}</h3>
              <S.ButtonCloseModalIcon onClick={handleClose}>
                X
              </S.ButtonCloseModalIcon>
            </S.ModalHeader>
            <S.ModalContent>

              {children}
            </S.ModalContent>
            <S.ModalFooter>
              <S.ButtonOpenModal onClick={handleClose}>Filtrar Agora</S.ButtonOpenModal>
            </S.ModalFooter>
          </S.ModalContainer>
        </S.Container>
      )}
    </>
  );
};

export { Modal };