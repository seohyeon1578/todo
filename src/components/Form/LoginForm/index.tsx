import { SubmitHandler, useForm } from "react-hook-form"
import { loginUser } from "../../../store/actions/userAction";
import { IAuth } from "../../../interfaces/Auth";
import { useAppDispatch } from "../../../store/hooks";
import Button from "../../CustomButtons";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../CustomInput";

const LoginForm = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<IAuth>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IAuth> = ({ id, password }) => {
    dispatch(loginUser({id, password}))
    navigate('/');
  }
  
  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <CustomInput
        type="text"
        name="id"
        label="아이디"
        register={register}
      />
      <CustomInput
        type="password"
        name="password"
        label="비밀번호"
        register={register}
      />
      <Button 
        type="submit"
        size="lg"
      >
        로그인
      </Button>
    </form>
  )
}

export default LoginForm