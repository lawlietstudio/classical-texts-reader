import { Book } from './types';
import { hui001 } from './sanguoyanyi/001';
import { hui002 } from './sanguoyanyi/002';
import { hui003 } from './sanguoyanyi/003';
import { hui004 } from './sanguoyanyi/004';
import { hui005 } from './sanguoyanyi/005';
import { hui006 } from './sanguoyanyi/006';
import { hui007 } from './sanguoyanyi/007';
import { hui008 } from './sanguoyanyi/008';
import { hui009 } from './sanguoyanyi/009';
import { hui010 } from './sanguoyanyi/010';
import { hui011 } from './sanguoyanyi/011';
import { hui012 } from './sanguoyanyi/012';
import { hui013 } from './sanguoyanyi/013';

export const sanguoyanyi: Book = {
  id: 'sanguoyanyi',
  title: '三國演義',
  author: '羅貫中（毛宗崗批改本）',
  description:
    '明代長篇歷史小說，四大名著之一，寫東漢末年至西晉統一嘅魏蜀吳三國興亡故事，全書一百二十回，逐回加入。',
  chapters: [
    hui001,
    hui002,
    hui003,
    hui004,
    hui005,
    hui006,
    hui007,
    hui008,
    hui009,
    hui010,
    hui011,
    hui012,
    hui013,
  ],
};
