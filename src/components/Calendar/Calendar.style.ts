import styled from "styled-components";
import LeftIcon from "../../assets/imgs/left-icon.png";
import RightIcon from "../../assets/imgs/right-icon.png";

interface PIcon {
  item: string;
}

export const Header = styled.div`
  position: relative;

  width: 400px;
  height: 24px;

  p {
    height: 24px;
    display: flex;
    align-items: center;
  }
`;

export const NavBtnWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;

  button {
    cursor: pointer;

    width: 24px;
    height: 24px;

    padding: 0;
    margin: 0 12px 0 0;
  }

  button:nth-last-child(1) {
    color: white;
    background-color: black;
    border-radius: 8px;
  }
`;

export const IconBtn = styled.button<PIcon>`
  background-color: initial;
  background-image: url(${({ item }) => item === "left" ? LeftIcon : RightIcon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  border: none;
  outline: none;
`

export const CalenderUI = styled.div`
  width: 400px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
`;

export const CalendarStair = styled.div`
  width: 57.156248px;
  height: 57.156248px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;