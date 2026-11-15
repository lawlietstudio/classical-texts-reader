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
import { sj057 } from './shiji/j057';
import { sj058 } from './shiji/j058';
import { sj059 } from './shiji/j059';
import { sj060 } from './shiji/j060';
import { boyiLiezhuan } from './shiji/09-boyi-liezhuan';
import { guanyanLiezhuan } from './shiji/10-guanyan-liezhuan';
import { sj063 } from './shiji/j063';
import { sj064 } from './shiji/j064';
import { sj065 } from './shiji/j065';
import { wuzixuLiezhuan } from './shiji/11-wuzixu-liezhuan';
import { sj067 } from './shiji/j067';
import { shangjunLiezhuan } from './shiji/12-shangjun-liezhuan';
import { suqinLiezhuan } from './shiji/13-suqin-liezhuan';
import { zhangyiLiezhuan } from './shiji/14-zhangyi-liezhuan';
import { sj071 } from './shiji/j071';
import { sj072 } from './shiji/j072';
import { sj073 } from './shiji/j073';
import { sj074 } from './shiji/j074';
import { mengchangjunLiezhuan } from './shiji/15-mengchangjun-liezhuan';
import { sj076 } from './shiji/j076';
import { weigongziLiezhuan } from './shiji/16-weigongzi-liezhuan';
import { sj078 } from './shiji/j078';
import { sj080 } from './shiji/j080';
import { lianpoLinxiangruLiezhuan } from './shiji/17-lianpo-linxiangru-liezhuan';
import { sj082 } from './shiji/j082';
import { sj083 } from './shiji/j083';
import { quyuanJiashengLiezhuan } from './shiji/18-quyuan-jiasheng-liezhuan';
import { lvbuweiLiezhuan } from './shiji/19-lvbuwei-liezhuan';
import { cikeLiezhuan } from './shiji/20-cike-liezhuan';
import { lisiLiezhuan } from './shiji/21-lisi-liezhuan';
import { sj088 } from './shiji/j088';
import { sj089 } from './shiji/j089';
import { sj090 } from './shiji/j090';
import { sj091 } from './shiji/j091';
import { huaiyinhouLiezhuan } from './shiji/22-huaiyinhou-liezhuan';
import { sj093 } from './shiji/j093';
import { sj094 } from './shiji/j094';
import { sj095 } from './shiji/j095';
import { sj096 } from './shiji/j096';
import { sj097 } from './shiji/j097';
import { sj098 } from './shiji/j098';
import { sj099 } from './shiji/j099';
import { sj100 } from './shiji/j100';
import { sj101 } from './shiji/j101';
import { sj102 } from './shiji/j102';
import { sj103 } from './shiji/j103';
import { sj104 } from './shiji/j104';
import { sj106 } from './shiji/j106';
import { sj107 } from './shiji/j107';
import { sj108 } from './shiji/j108';
import { lijiangjunLiezhuan } from './shiji/23-lijiangjun-liezhuan';
import { sj110 } from './shiji/j110';
import { sj111 } from './shiji/j111';
import { sj112 } from './shiji/j112';
import { sj113 } from './shiji/j113';
import { sj114 } from './shiji/j114';
import { sj115 } from './shiji/j115';
import { sj116 } from './shiji/j116';
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
    sj057,
    sj058,
    sj059,
    sj060,
    boyiLiezhuan,
    guanyanLiezhuan,
    sj063,
    sj064,
    sj065,
    wuzixuLiezhuan,
    sj067,
    shangjunLiezhuan,
    suqinLiezhuan,
    zhangyiLiezhuan,
    sj071,
    sj072,
    sj073,
    sj074,
    mengchangjunLiezhuan,
    sj076,
    weigongziLiezhuan,
    sj078,
    sj080,
    lianpoLinxiangruLiezhuan,
    sj082,
    sj083,
    quyuanJiashengLiezhuan,
    lvbuweiLiezhuan,
    cikeLiezhuan,
    lisiLiezhuan,
    sj088,
    sj089,
    sj090,
    sj091,
    huaiyinhouLiezhuan,
    sj093,
    sj094,
    sj095,
    sj096,
    sj097,
    sj098,
    sj099,
    sj100,
    sj101,
    sj102,
    sj103,
    sj104,
    sj106,
    sj107,
    sj108,
    lijiangjunLiezhuan,
    sj110,
    sj111,
    sj112,
    sj113,
    sj114,
    sj115,
    sj116,
    youxiaLiezhuan,
    huajiLiezhuan,
    huozhiLiezhuan,
    taishigongZixu,
  ],
};
