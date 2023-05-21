import { FindText, FindWrapContainer } from "./FindWrap.style"

const FindWrap = () => {
  return(
    <FindWrapContainer>
      <li>
        <FindText to="">비밀번호 찾기</FindText>
      </li>
      <li>
        <FindText to="">아이디 찾기</FindText>
      </li>
      <li>
        <FindText to="/register">회원가입</FindText>
      </li>
    </FindWrapContainer>
  )
}

export default FindWrap