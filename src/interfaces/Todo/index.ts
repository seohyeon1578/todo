export type TodoId = string;

export interface Todo {
  id: TodoId,
  title: string,
  date?: string,
  isDone?: boolean,
  isEdit?: boolean
}

export interface TodoList {
  list: Todo[];
}

export interface TodoState extends TodoList {
  currentDate: string
}

