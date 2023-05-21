import styled from 'styled-components';
import AddTodo from '../components/Todo/AddTodo';
import Calender from '../components/Calendar';
import TodoList from '../components/Todo/TodoList';
import { Container } from '../assets/styles/index.style';

const TodoWrap = styled.div`
  width: 400px;
`;

const Main = () => {
  return(
    <Container>
      <Calender/>
      <TodoWrap>
        <AddTodo/>
        <TodoList/>
      </TodoWrap>
    </Container>
  )  
}

export default Main