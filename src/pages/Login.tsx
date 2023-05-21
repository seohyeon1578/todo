import LoginForm from "../components/Form/LoginForm"
import { Container } from "../assets/styles/index.style";
import Title from "../components/TItle";
import FindWrap from "../components/FindWrap";

const Login = () => {
  return(
    <Container>
      <Title/>
      <LoginForm/>
      <FindWrap/>
    </Container>
  )
}

export default Login