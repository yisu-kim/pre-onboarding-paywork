import { ITodo } from 'constants/todoTypes';

const mockData: ITodo[] = [
  {
    id: '1',
    content: '할 일 생성하기',
    isCheck: true,
    createdAt: '2021-05-26T16:15:25.729Z',
  },
  {
    id: '2',
    content: '할 일 목록 불러오기',
    isCheck: true,
    createdAt: '2021-05-26T16:15:30.729Z',
  },
  {
    id: '3',
    content: '할 일 수정하기',
    isCheck: false,
    createdAt: '2021-05-26T16:15:35.729Z',
  },
  {
    id: '4',
    content: '할 일 체크하기',
    isCheck: false,
    createdAt: '2021-05-26T17:15:25.729Z',
  },
  {
    id: '5',
    content: '할 일 삭제하기',
    isCheck: false,
    createdAt: '2021-05-26T17:15:30.729Z',
  },
];

export default mockData;
