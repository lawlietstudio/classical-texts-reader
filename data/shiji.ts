import { Book } from './types';
import { wudiBenji } from './shiji/01-wudi-benji';
import { sj002 } from './shiji/j002';
import { sj003 } from './shiji/j003';
import { sj004 } from './shiji/j004';
import { sj005 } from './shiji/j005';
import { qinshihuangBenji } from './shiji/03-qinshihuang-benji';
import { xiangyuBenji } from './shiji/04-xiangyu-benji';
import { gaozuBenji } from './shiji/05-gaozu-benji';
import { sj009 } from './shiji/j009';
import { sj010 } from './shiji/j010';
import { sj011 } from './shiji/j011';
import { sj012 } from './shiji/j012';
import { sj031 } from './shiji/j031';
import { sj032 } from './shiji/j032';
import { sj033 } from './shiji/j033';
import { sj034 } from './shiji/j034';
import { sj035 } from './shiji/j035';
import { sj036 } from './shiji/j036';
import { sj037 } from './shiji/j037';
import { sj038 } from './shiji/j038';
import { sj039 } from './shiji/j039';
import { sj040 } from './shiji/j040';
import { yuewangGoujianShijia } from './shiji/06-yuewangoujian-shijia';
import { sj042 } from './shiji/j042';
import { sj043 } from './shiji/j043';
import { sj044 } from './shiji/j044';
import { sj045 } from './shiji/j045';
import { sj046 } from './shiji/j046';
import { kongziShijia } from './shiji/07-kongzi-shijia';
import { chensheShijia } from './shiji/02-chenshe-shijia';
import { sj049 } from './shiji/j049';
import { sj050 } from './shiji/j050';
import { sj051 } from './shiji/j051';
import { sj052 } from './shiji/j052';
import { sj053 } from './shiji/j053';
import { sj054 } from './shiji/j054';
import { liuhouShijia } from './shiji/08-liuhou-shijia';
import { sj056 } from './shiji/j056';
import { boyiLiezhuan } from './shiji/09-boyi-liezhuan';
import { guanyanLiezhuan } from './shiji/10-guanyan-liezhuan';
import { wuzixuLiezhuan } from './shiji/11-wuzixu-liezhuan';
import { shangjunLiezhuan } from './shiji/12-shangjun-liezhuan';
import { suqinLiezhuan } from './shiji/13-suqin-liezhuan';
import { zhangyiLiezhuan } from './shiji/14-zhangyi-liezhuan';
import { mengchangjunLiezhuan } from './shiji/15-mengchangjun-liezhuan';
import { weigongziLiezhuan } from './shiji/16-weigongzi-liezhuan';
import { lianpoLinxiangruLiezhuan } from './shiji/17-lianpo-linxiangru-liezhuan';
import { quyuanJiashengLiezhuan } from './shiji/18-quyuan-jiasheng-liezhuan';
import { lvbuweiLiezhuan } from './shiji/19-lvbuwei-liezhuan';
import { cikeLiezhuan } from './shiji/20-cike-liezhuan';
import { lisiLiezhuan } from './shiji/21-lisi-liezhuan';
import { huaiyinhouLiezhuan } from './shiji/22-huaiyinhou-liezhuan';
import { lijiangjunLiezhuan } from './shiji/23-lijiangjun-liezhuan';
import { youxiaLiezhuan } from './shiji/24-youxia-liezhuan';
import { huajiLiezhuan } from './shiji/25-huaji-liezhuan';
import { huozhiLiezhuan } from './shiji/26-huozhi-liezhuan';
import { taishigongZixu } from './shiji/27-taishigong-zixu';

export const shiji: Book = {
  id: 'shiji',
  title: '史記',
  author: '司馬遷',
  description:
    '西漢司馬遷所著紀傳體通史,上起黃帝、下至漢武帝,為二十四史之首。本紀、世家、列傳逐篇加入,每篇附粵語及普通話白話翻譯。',
  chapters: [
    wudiBenji,
    sj002,
    sj003,
    sj004,
    sj005,
    qinshihuangBenji,
    xiangyuBenji,
    gaozuBenji,
    sj009,
    sj010,
    sj011,
    sj012,
    sj031,
    sj032,
    sj033,
    sj034,
    sj035,
    sj036,
    sj037,
    sj038,
    sj039,
    sj040,
    yuewangGoujianShijia,
    sj042,
    sj043,
    sj044,
    sj045,
    sj046,
    kongziShijia,
    chensheShijia,
    sj049,
    sj050,
    sj051,
    sj052,
    sj053,
    sj054,
    liuhouShijia,
    sj056,
    boyiLiezhuan,
    guanyanLiezhuan,
    wuzixuLiezhuan,
    shangjunLiezhuan,
    suqinLiezhuan,
    zhangyiLiezhuan,
    mengchangjunLiezhuan,
    weigongziLiezhuan,
    lianpoLinxiangruLiezhuan,
    quyuanJiashengLiezhuan,
    lvbuweiLiezhuan,
    cikeLiezhuan,
    lisiLiezhuan,
    huaiyinhouLiezhuan,
    lijiangjunLiezhuan,
    youxiaLiezhuan,
    huajiLiezhuan,
    huozhiLiezhuan,
    taishigongZixu,
  ],
};
