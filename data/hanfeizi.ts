import { Book } from './types';
import { zhudao } from './hanfeizi/01-zhudao';
import { erbing } from './hanfeizi/02-erbing';
import { yangquan } from './hanfeizi/03-yangquan';
import { bajian } from './hanfeizi/04-bajian';
import { shiguo } from './hanfeizi/05-shiguo';
import { gufen } from './hanfeizi/06-gufen';
import { shuinan } from './hanfeizi/07-shuinan';
import { yongren } from './hanfeizi/08-yongren';
import { gongming } from './hanfeizi/09-gongming';
import { daiti } from './hanfeizi/10-daiti';
import { guanxing } from './hanfeizi/11-guanxing';
import { anwei } from './hanfeizi/12-anwei';
import { wangzheng } from './hanfeizi/13-wangzheng';
import { liufan } from './hanfeizi/14-liufan';
import { wudu } from './hanfeizi/15-wudu';
import { xianxue } from './hanfeizi/16-xianxue';
import { dingfa } from './hanfeizi/17-dingfa';

export const hanfeizi: Book = {
  id: 'hanfeizi',
  title: '韓非子',
  author: '韓非',
  description:
    '戰國末年法家集大成者韓非嘅著作,共五十五篇,融合法、術、勢三派學說,講領導統御、賞罰之道、識人用人。呢度精選當中最貼近職場管理同權力運作嘅十七篇。',
  chapters: [
    zhudao,
    erbing,
    yangquan,
    bajian,
    shiguo,
    gufen,
    shuinan,
    yongren,
    gongming,
    daiti,
    guanxing,
    anwei,
    wangzheng,
    liufan,
    wudu,
    xianxue,
    dingfa,
  ],
};
