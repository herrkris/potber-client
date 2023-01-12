import { User } from './user';

export interface Post {
  id: string;
  author: User;
  date: Date;
  title: string;
  content: string;
  editedCount: number;
  avatarId: string;
  threadId: string;
  boardId: string;
}

export interface PostXml {
  attributes: {
    id: { value: string };
  };
  children: {
    '0': {
      nodeName: 'user';
      attributes: { id: { value: string } };
    };
    '1': {
      nodeName: 'date';
      attributes: { timestamp: { value: string } };
    };
    '2': {
      nodeName: 'message';
      children: {
        '0': {
          nodeName: 'edited';
          attributes: {
            count: { value: string };
          };
        };
        '1': {
          nodeName: 'content';
          textContent: string;
        };
        '2': {
          nodeName: 'title';
          textContent: string;
        };
      };
    };
    '3': {
      nodeName: 'avatar';
      attributes: {
        id: { value: string };
      };
    };
    '4': {
      nodeName: 'in-thread';
      attributes: { id: { value: string } };
    };
    '5': {
      nodeName: 'in-board';
      attributes: { id: { value: string } };
    };
  };
}