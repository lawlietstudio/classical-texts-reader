import { Book } from './types';
import { wudiBenji } from './shiji/01-wudi-benji';
import { qinshihuangBenji } from './shiji/03-qinshihuang-benji';
import { chensheShijia } from './shiji/02-chenshe-shijia';

export const shiji: Book = {
  id: 'shiji',
  title: '史記',
  author: '司馬遷',
  description:
    '西漢司馬遷所著紀傳體通史,上起黃帝、下至漢武帝,為二十四史之首。呢度精選本紀、世家、列傳當中最經典嘅篇章,逐篇加入。',
  chapters: [wudiBenji, qinshihuangBenji, chensheShijia],
};
