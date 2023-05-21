import { UseFormRegister } from "react-hook-form"
import { IAuth } from "../../interfaces/Auth"
import { Input, InputContainer, InputLabel } from "./CustomInputs.syle"

interface InputProps {
  name: "id" | "password" | "passwordConfirm"
  label: string
  register: UseFormRegister<IAuth>
  type: string
}

const CustomInput: React.FC<InputProps> = ({
  name,
  label,
  register,
  type = "text",
}) => {
  return(
    <InputContainer>
      <InputLabel htmlFor={name}></InputLabel>
      <Input
        id={name}
        type={type}
        placeholder={label}
        {...register(name)}
        name={name}
      />
    </InputContainer>
  )
}

export default CustomInput