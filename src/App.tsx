import React from 'react';
import styled from 'styled-components';
import AddTodo from './components/Todo/AddTodo';
import Calender from './components/Calendar';
import TodoList from './components/Todo/TodoList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const TodoWrap = styled.div`
  width: 400px;
`;

const App = () => {
  return (
    <Container>
      <Calender/>
      <TodoWrap>
        <AddTodo/>
        <TodoList/>
      </TodoWrap>
    </Container>
  );
}

export default App;
