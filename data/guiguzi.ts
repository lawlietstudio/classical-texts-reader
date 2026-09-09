import { Book } from './types';
import { baihe } from './guiguzi/01-baihe';
import { fanying } from './guiguzi/02-fanying';
import { neijian } from './guiguzi/03-neijian';
import { dixi } from './guiguzi/04-dixi';
import { feiqian } from './guiguzi/05-feiqian';
import { wuhe } from './guiguzi/06-wuhe';
import { chuaipian } from './guiguzi/07-chuaipian';
import { mopian } from './guiguzi/08-mopian';
import { quanpian } from './guiguzi/09-quanpian';
import { moupian } from './guiguzi/10-moupian';
import { juepian } from './guiguzi/11-juepian';
import { fuyan } from './guiguzi/12-fuyan';
import { shengshen } from './guiguzi/13-shengshen';
import { yangzhi } from './guiguzi/14-yangzhi';
import { shiyi } from './guiguzi/15-shiyi';
import { fenwei } from './guiguzi/16-fenwei';
import { sanshi } from './guiguzi/17-sanshi';
import { zhuanyuan } from './guiguzi/18-zhuanyuan';
import { sundui } from './guiguzi/19-sundui';
import { chishu } from './guiguzi/20-chishu';
import { zhongjing } from './guiguzi/21-zhongjing';

export const guiguzi: Book = {
  id: 'guiguzi',
  title: '鬼谷子',
  author: '鬼谷子',
  description:
    '戰國縱橫家經典,梁陶弘景注本,分捭闔、反應、內揵、抵巇等篇,專論游說、揣摩、權變之術,係中國最早嘅談判謀略學專著。呢度收錄現存全部篇章,轉丸、胠亂兩篇原文已失傳。',
  chapters: [
    baihe,
    fanying,
    neijian,
    dixi,
    feiqian,
    wuhe,
    chuaipian,
    mopian,
    quanpian,
    moupian,
    juepian,
    fuyan,
    shengshen,
    yangzhi,
    shiyi,
    fenwei,
    sanshi,
    zhuanyuan,
    sundui,
    chishu,
    zhongjing,
  ],
};
