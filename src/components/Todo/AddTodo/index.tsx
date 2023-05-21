import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { addItem } from "../../../store/reducers/todo";

import PlusIcon from "../../../assets/imgs/plus_icon.png";
import * as A from './AddTodo.style';
import { useAppDispatch } from "../../../store/hooks";

interface Inputs {
  text: string
}

const AddTodo = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<Inputs>();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = ({ text }) => {
    dispatch(addItem({ id: Date.now().toString(), text, isDone: false }));
    setValue("text", "");
  };

  return (
    <A.Container onSubmit={handleSubmit(onSubmit)}>
      <A.AddInput 
        type="text"
        placeholder="입력"
        {...register('text', {
          required: "내용을 입력해주세요."
        })}
      />
      <A.AddBtn type="submit"><img src={PlusIcon} alt="추가"/></A.AddBtn>
    </A.Container>
  );
};

export default AddTodo;