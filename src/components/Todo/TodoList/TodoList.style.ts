import styled from "styled-components";
import CheckedIcon from "../../../assets/imgs/checked-icon.png";

export const Container = styled.div`
  height: auto;
  
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
    background: #DBDDDF;
  }
`;

export const CheckBoxLabel = styled.label`
  cursor: pointer;

  width: 24px;
  height:24px;
  
  display: inline-block;

  background: url(${CheckedIcon}) black no-repeat center;
  background-size: cover;
  border-radius: 4px;

  span {
    position: absolute;
    top: 50%;
    left: 32px;
    transform: translateY(-50%);
  }
`;