import { ModalBg, ModalContainer } from "./Modal.style";

type ModalProps = {
  open: boolean,
  onClose: () => void,
  children: React.ReactNode
}


const Modal = ({ open, onClose, children }: ModalProps) => {
  return(
    <>
      {open &&
        <ModalContainer onClick={onClose}>
          <ModalBg onClick={(e) => e.stopPropagation()}>
            {children}
          </ModalBg>
        </ModalContainer>
      }
    </>
  )
}

export default Modal;