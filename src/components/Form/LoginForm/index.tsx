import { SubmitHandler, useForm } from "react-hook-form"
import { loginUser } from "../../../store/actions/userAction";
import { IAuth } from "../../../interfaces/Auth";
import { useAppDispatch } from "../../../store/hooks";
import Button from "../../CustomButtons";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../CustomInput";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useEffect } from "react";

const LoginForm = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<IAuth>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state: RootState) => state.user)

  const onSubmit: SubmitHandler<IAuth> = ({ email, password }) => {
    dispatch(loginUser({email, password}))
  }
  
  useEffect(() => {
    if(loading == "success") {
      navigate('/')
    }
  }, [loading])

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <CustomInput
        type="text"
        name="email"
        label="이메일"
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