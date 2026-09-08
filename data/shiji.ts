import { Book } from './types';
import { wudiBenji } from './shiji/01-wudi-benji';
import { qinshihuangBenji } from './shiji/03-qinshihuang-benji';
import { xiangyuBenji } from './shiji/04-xiangyu-benji';
import { gaozuBenji } from './shiji/05-gaozu-benji';
import { yuewangGoujianShijia } from './shiji/06-yuewangoujian-shijia';
import { kongziShijia } from './shiji/07-kongzi-shijia';
import { liuhouShijia } from './shiji/08-liuhou-shijia';
import { boyiLiezhuan } from './shiji/09-boyi-liezhuan';
import { guanyanLiezhuan } from './shiji/10-guanyan-liezhuan';
import { wuzixuLiezhuan } from './shiji/11-wuzixu-liezhuan';
import { shangjunLiezhuan } from './shiji/12-shangjun-liezhuan';
import { suqinLiezhuan } from './shiji/13-suqin-liezhuan';
import { chensheShijia } from './shiji/02-chenshe-shijia';

export const shiji: Book = {
  id: 'shiji',
  title: '史記',
  author: '司馬遷',
  description:
    '西漢司馬遷所著紀傳體通史,上起黃帝、下至漢武帝,為二十四史之首。呢度精選本紀、世家、列傳當中最經典嘅篇章,逐篇加入。',
  chapters: [
    wudiBenji,
    qinshihuangBenji,
    xiangyuBenji,
    gaozuBenji,
    yuewangGoujianShijia,
    kongziShijia,
    liuhouShijia,
    boyiLiezhuan,
    guanyanLiezhuan,
    wuzixuLiezhuan,
    shangjunLiezhuan,
    suqinLiezhuan,
    chensheShijia,
  ],
};
