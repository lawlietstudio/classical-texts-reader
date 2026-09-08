import { Book } from './types';
import { lunyu } from './lunyu';
import { xinjing } from './xinjing';
import { zhuangzi } from './zhuangzi';
import { baiyujing } from './baiyujing';
import { guiquilaici } from './guiquilaici';
import { liuzu } from './liuzu';
import { mozi } from './mozi';
import { mengzi } from './mengzi';
import { sanguoyanyi } from './sanguoyanyi';
import { shiji } from './shiji';
import { lvshichunqiu } from './lvshichunqiu';
import { sunzibingfa } from './sunzibingfa';

export const books: Book[] = [
  lunyu,
  xinjing,
  zhuangzi,
  baiyujing,
  guiquilaici,
  liuzu,
  mozi,
  mengzi,
  sanguoyanyi,
  shiji,
  lvshichunqiu,
  sunzibingfa,
];

export function getBook(id: string): Book | undefined {
  return books.find((b) => b.id === id);
}
