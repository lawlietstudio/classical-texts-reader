import type { PassageMode } from '../hooks/usePassageMode';
import baiyujingParagraphs from './paragraphs/baiyujing.json';
import chenqingbiaoParagraphs from './paragraphs/chenqingbiao.json';
import chushibiaoParagraphs from './paragraphs/chushibiao.json';
import guiguziParagraphs from './paragraphs/guiguzi.json';
import guiquilaiciParagraphs from './paragraphs/guiquilaici.json';
import hanfeiziParagraphs from './paragraphs/hanfeizi.json';
import jianzhukeshuParagraphs from './paragraphs/jianzhukeshu.json';
import liuzuParagraphs from './paragraphs/liuzu.json';
import longzhongduiParagraphs from './paragraphs/longzhongdui.json';
import lunyuParagraphs from './paragraphs/lunyu.json';
import lvshichunqiuParagraphs from './paragraphs/lvshichunqiu.json';
import mengziParagraphs from './paragraphs/mengzi.json';
import moziParagraphs from './paragraphs/mozi.json';
import sanguoyanyiParagraphs from './paragraphs/sanguoyanyi.json';
import sanguozhiParagraphs from './paragraphs/sanguozhi.json';
import shijiParagraphs from './paragraphs/shiji.json';
import shishuoParagraphs from './paragraphs/shishuo.json';
import sunzibingfaParagraphs from './paragraphs/sunzibingfa.json';
import xinjingParagraphs from './paragraphs/xinjing.json';
import zhuangziParagraphs from './paragraphs/zhuangzi.json';
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
import { guiguzi } from './guiguzi';
import { hanfeizi } from './hanfeizi';
import { shishuo } from './shishuo';
import { jianzhukeshu } from './jianzhukeshu';
import { chushibiao } from './chushibiao';
import { longzhongdui } from './longzhongdui';
import { chenqingbiao } from './chenqingbiao';
import { sanguozhi } from './sanguozhi';

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
  guiguzi,
  hanfeizi,
  shishuo,
  jianzhukeshu,
  chushibiao,
  longzhongdui,
  chenqingbiao,
  sanguozhi,
];

const paragraphBooks: Book[] = [
  baiyujingParagraphs,
  chenqingbiaoParagraphs,
  chushibiaoParagraphs,
  guiguziParagraphs,
  guiquilaiciParagraphs,
  hanfeiziParagraphs,
  jianzhukeshuParagraphs,
  liuzuParagraphs,
  longzhongduiParagraphs,
  lunyuParagraphs,
  lvshichunqiuParagraphs,
  mengziParagraphs,
  moziParagraphs,
  sanguoyanyiParagraphs,
  sanguozhiParagraphs,
  shijiParagraphs,
  shishuoParagraphs,
  sunzibingfaParagraphs,
  xinjingParagraphs,
  zhuangziParagraphs,
];

export function getBook(id: string, mode: PassageMode = 'sentence'): Book | undefined {
  return (mode === 'paragraph' ? paragraphBooks : books).find((b) => b.id === id);
}
