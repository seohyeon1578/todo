import styled from "styled-components";
import Image from "../../assets/imgs/Vector.png";
import Image2 from "../../assets/imgs/Padlock Outline.png"

export const InputContainer = styled.div`
  position: relative;

  display: table;

  text-align: left;

  width: 402px;
  height: 48px;


  box-sizing: border-box;

  border: 1px solid #dadada;
  border-radius: 6px 6px 0 0;

  padding: 14px 17px 13px;
`;

export const InputLabel = styled.label<{
  htmlFor: string
}>`
  display: table-cell;
  width: 16px;
  height: 16px;

  background-image: url(${({ htmlFor}) => htmlFor === "id" ? Image: Image2});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const Input = styled.input`
  cursor: pointer;

  width: 100%;
  height: 19px;
  line-height: 19px;

  margin-left: 8px;

  font-size: 16px;
  font-weight: 400;

  border: none;
  outline: none;
`;