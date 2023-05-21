import { Link } from "react-router-dom";
import styled from "styled-components";

export const FindWrapContainer = styled.ul`
  padding: 20px 0;
  text-align: center;

  list-style: none;

  li {
    position: relative;
    display: inline-block;
  
    &:not(:first-child) {
      padding-left: 28px;
    }
    
    &:not(:first-child)::before {
      content: '';

      position: absolute;
      top: 3px;
      left: 12px;

      width: 1px;
      height: 12px;

      border-radius: 0.5px;
      background-color: #dadada;
    }
  }
`;

export const FindText = styled(Link)`
  display: inline-block;
  
  font-size: 14px;
  line-height: 17px;

  text-decoration: none;
  color: #888;
`;