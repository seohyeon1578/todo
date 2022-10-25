import styled from 'styled-components';

export const Container = styled.form`
  position: relative;

  margin: 12px 0 12px 0;
`;

export const AddInput = styled.input`
  width: 368px;
  
  margin-right: 12px;
  padding-bottom: 4px;

  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid black;

  :focus-visible {
    outline: none;
  }
`;

export const AddBtn = styled.button`
  cursor: pointer;

  position: absolute;
  bottom: 0;

  width: 20px;
  height: 20px;

  margin: 0;
  padding: 3px 0 0 0;

  background: white;
  border: 1px solid black;
  border-radius: 50%;

  img {
    width: 12px;
    height: 12px;
  }
`;