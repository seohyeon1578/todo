import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalBg = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  
  width: 380px;
  height: 160px;

  background-color: white;
  border-radius: 15px 15px 0 0;
`;