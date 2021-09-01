export interface ITodo {
  readonly id: string;
  content: string;
  isCheck: boolean;
  createdAt: string;
}

export type partialTodo = Partial<Omit<ITodo, 'id'>>;
