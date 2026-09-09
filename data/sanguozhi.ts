import { Book } from './types';
import { xianzhuLiubei } from './sanguozhi/01-xianzhu-liubei';
import { wudiCaocao } from './sanguozhi/02-wudi-caocao';

export const sanguozhi: Book = {
  id: 'sanguozhi',
  title: '三國志',
  author: '陳壽',
  description:
    '西晉陳壽所編纂嘅三國正史,南朝宋裴松之作注,分魏書、蜀書、吳書共六十五卷,係二十四史之一。呢度精選當中最重要嗰批人物嘅傳記,同《三國演義》嗰部小說唔同,係真實嘅歷史記載。',
  chapters: [xianzhuLiubei, wudiCaocao],
};
