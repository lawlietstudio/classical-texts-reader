import { Book } from './types';
import { xianzhuLiubei } from './sanguozhi/01-xianzhu-liubei';
import { wudiCaocao } from './sanguozhi/02-wudi-caocao';
import { zhugeliangLiezhuan } from './sanguozhi/03-zhugeliang-liezhuan';
import { guanzhangmahuangzhaoLiezhuan } from './sanguozhi/04-guanzhangmahuangzhao-liezhuan';
import { pangtongfazhengLiezhuan } from './sanguozhi/05-pangtongfazheng-liezhuan';
import { jiangwanfeiyijiangweiLiezhuan } from './sanguozhi/06-jiangwanfeiyijiangwei-liezhuan';
import { sunpolutaoniLiezhuan } from './sanguozhi/07-sunpolutaoni-liezhuan';
import { wuzhuzhuan } from './sanguozhi/08-wuzhuzhuan';
import { zhouyuluxulyumengLiezhuan } from './sanguozhi/09-zhouyuluxulyumeng-liezhuan';
import { luxunLiezhuan } from './sanguozhi/10-luxun-liezhuan';
import { dongeryuanliuLiezhuan } from './sanguozhi/11-dongeryuanliu-liezhuan';
import { lubuzanghongLiezhuan } from './sanguozhi/12-lubuzanghong-liezhuan';
import { zhuxiahoucaoLiezhuan } from './sanguozhi/13-zhuxiahoucao-liezhuan';
import { erxunjiaLiezhuan } from './sanguozhi/14-erxunjia-liezhuan';
import { chengguodongliujiangliuLiezhuan } from './sanguozhi/15-chengguodongliujiangliu-liezhuan';

export const sanguozhi: Book = {
  id: 'sanguozhi',
  title: '三國志',
  author: '陳壽',
  description:
    '西晉陳壽所編纂嘅三國正史,南朝宋裴松之作注,分魏書、蜀書、吳書共六十五卷,係二十四史之一。呢度精選當中最重要嗰批人物嘅傳記,同《三國演義》嗰部小說唔同,係真實嘅歷史記載。',
  chapters: [
    xianzhuLiubei,
    wudiCaocao,
    zhugeliangLiezhuan,
    guanzhangmahuangzhaoLiezhuan,
    pangtongfazhengLiezhuan,
    jiangwanfeiyijiangweiLiezhuan,
    sunpolutaoniLiezhuan,
    wuzhuzhuan,
    zhouyuluxulyumengLiezhuan,
    luxunLiezhuan,
    dongeryuanliuLiezhuan,
    lubuzanghongLiezhuan,
    zhuxiahoucaoLiezhuan,
    erxunjiaLiezhuan,
    chengguodongliujiangliuLiezhuan,
  ],
};
