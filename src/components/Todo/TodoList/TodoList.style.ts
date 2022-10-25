import styled from "styled-components";
import CheckedIcon from "../../../assets/imgs/checked-icon.png";

export const Container = styled.div`
  max-height: 250px;
  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    height: 30%;
    background: black;

    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #DBDDDF;
  }
  
  ul li {
    position: relative;

    margin-bottom: 8px;
  }

  ul li::after {
    content: "";
    display: block;
    clear: both;
  }
`;

export const CheckBox= styled.input.attrs({ type: 'checkbox' })`
  display: none;

  :checked + label {
    background: url(${CheckedIcon}) black no-repeat center;
    background-size: cover;
    border-radius: 4px;
  }
`;

export const CheckBoxLabel = styled.label`
  cursor: pointer;

  width: 24px;
  height:24px;
  
  display: inline-block;

  background: #DBDDDF;
  border-radius: 4px;

  span {
    position: absolute;
    top: 50%;
    left: 32px;
    transform: translateY(-50%);
  }
`;

export const OptionBtn = styled.button`
  cursor: pointer;
  
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);

  background: none;
  border: none;
  outline: none;

  img {
    width: 16px;
    height: 16px;
  }
`;