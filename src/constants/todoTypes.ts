export interface ITodo {
  readonly id: string;
  content: string;
  isCheck: boolean;
  createdAt: string;
}

export type TodoId = ITodo['id'];

export type partialTodo = Partial<Omit<ITodo, 'id'>>;
