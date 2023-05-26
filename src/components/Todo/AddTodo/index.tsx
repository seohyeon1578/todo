import { useForm, SubmitHandler } from "react-hook-form";
import { addItem, currentDateTodos } from "../../../store/reducers/todo";

import PlusIcon from "../../../assets/imgs/plus_icon.png";
import * as A from './AddTodo.style';
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

interface Inputs {
  title: string
}

const AddTodo = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<Inputs>();
  const currentDate = useAppSelector(currentDateTodos);
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = ({ title }) => {
    dispatch(addItem({ id: Date.now().toString(), title, date: currentDate, isDone: false, isEdit: false }));
    setValue("title", "");
  };

  return (
    <A.Container onSubmit={handleSubmit(onSubmit)}>
      <A.AddInput 
        type="text"
        placeholder="입력"
        {...register('title', {
          required: "내용을 입력해주세요."
        })}
      />
      <A.AddBtn type="submit"><img src={PlusIcon} alt="추가"/></A.AddBtn>
    </A.Container>
  );
};

export default AddTodo;