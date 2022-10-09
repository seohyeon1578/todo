export type TodoId = string;

export interface Todo {
  id: TodoId,
  text: string,
  isDone: boolean,
}

export interface TodoList {
  list: Todo[];
}

