import { SizeType } from "../../interfaces/size.type"
import { CustomButton } from "./CustomButtons.style"

interface IButtonProps {
  onClick?: () => void
  children: React.ReactNode
  type: "button" | "submit" | "reset"
  size: SizeType
}

const Button: React.FC<IButtonProps> = ({
  onClick,
  children,
  type = "button",
  size = "sm"
}) => {
  return(
    <CustomButton
      size={size}
      type={type}
      onClick={onClick}
    >
      {children}
    </CustomButton>
  )
}

export default Button