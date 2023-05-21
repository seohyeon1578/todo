import styled, { FlattenSimpleInterpolation, css } from "styled-components";
import { SizeType } from "../../interfaces/size.type";

export const CustomButton = styled.button<{
  size: Exclude<SizeType,"md">;
}>`
  cursor: pointer;
  
  display: block;

  border-radius: 6px;
  border: solid 1px black;

  background-color: black;
  color: white;

  box-sizing: border-box;

  margin-top: 24px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;

  justify-content: center;
  align-items: center;
  text-align: center;

  ${({ size }) => sizeStyle[size]}
`;

const sizeStyle: Record<Exclude<SizeType, "md">, FlattenSimpleInterpolation> = {
  lg: css`
    width: 402px;
    height: 46px;
  `,
  sm: css`
    width: 64px;
    height: 32px;
  `
}