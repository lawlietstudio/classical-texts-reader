import { Book } from './types';
import { shuihu001 } from './shuihu/001';
import { shuihu002 } from './shuihu/002';
import { shuihu003 } from './shuihu/003';
import { shuihu004 } from './shuihu/004';

export const shuihu: Book = {
  id: 'shuihu',
  title: '水滸傳',
  author: '施耐庵（容與堂本百回）',
  description:
    '明代長篇白話小說,四大名著之一,寫宋江等一百零八條好漢聚義梁山泊、受招安、征方臘嘅故事。全書一百回(容與堂本),逐回加入。',
  chapters: [
    shuihu001,
    shuihu002,
    shuihu003,
    shuihu004,
  ],
};
