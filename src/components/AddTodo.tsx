import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addItem } from "../store/reducers/todo";

interface Inputs {
  text: string
}

const AddTodo = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<Inputs>();;
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<Inputs> = ({ text }) => {
    dispatch(addItem({ id: Date.now().toString(), text, isDone: false }));
    setValue("text", "")
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input 
        type="text"
        placeholder="입력"
        {...register('text', {
          required: true
        })}
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default AddTodo;