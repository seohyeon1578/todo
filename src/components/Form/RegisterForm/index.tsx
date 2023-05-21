import { SubmitHandler, useForm } from "react-hook-form"
import { IAuth } from "../../../interfaces/Auth";
import Button from "../../../components/CustomButtons";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../CustomInput";
import { yupResolver } from "@hookform/resolvers/yup"
import { object, string, ref } from "yup";
import { ErrorMsg } from "../form.style";

const RegisterForm = () => {
  const formSchema = object({
    id: string()
      .required('아이디를 입력해주세요.'),
    password: string()
      .required('비밀번호를 입력해주세요.')
      .min(8, '최소 8자 이상 가능합니다.')
      .max(15, '최대 15자 까지만 가능합니다.')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/,
        '영문 숫자포함 8자리를 입력해주세요.'
      ),
    passwordConfirm: string()
      .oneOf([ref('password')], '비밀번호가 다릅니다.')
  })

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<IAuth>({ 
    mode: 'onChange', 
    resolver: yupResolver(formSchema)
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IAuth> = ({ id, password }) => {
    navigate('/login');
  }
  
  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <CustomInput
        type="text"
        name="id"
        label="아이디"
        register={register}
      />
      <ErrorMsg>{errors.id && errors.id.message}</ErrorMsg>
      <CustomInput
        type="password"
        name="password"
        label="비밀번호"
        register={register}
      />
      <ErrorMsg>{errors.password && errors.password.message}</ErrorMsg>
      <CustomInput
        type="passwordConfirm"
        name="passwordConfirm"
        label="비밀번호 확인"
        register={register}
      />
      <ErrorMsg>{errors.passwordConfirm && errors.passwordConfirm.message}</ErrorMsg>
      <Button 
        type="submit"
        size="lg"
      >
        가입하기
      </Button>
    </form>
  )
}

export default RegisterForm