import { Book } from './types';
import { bensheng } from './lvshichunqiu/01-bensheng';
import { zhongji } from './lvshichunqiu/02-zhongji';
import { guigong } from './lvshichunqiu/03-guigong';
import { qusi } from './lvshichunqiu/04-qusi';
import { qingyu } from './lvshichunqiu/05-qingyu';
import { jinshu } from './lvshichunqiu/06-jinshu';
import { quanxue } from './lvshichunqiu/07-quanxue';
import { zunshi } from './lvshichunqiu/08-zunshi';
import { gule } from './lvshichunqiu/09-gule';
import { yingtong } from './lvshichunqiu/10-yingtong';
import { quyou } from './lvshichunqiu/11-quyou';
import { benwei } from './lvshichunqiu/12-benwei';
import { yibao } from './lvshichunqiu/13-yibao';
import { shijie } from './lvshichunqiu/14-shijie';
import { chenglian } from './lvshichunqiu/15-chenglian';
import { chajin } from './lvshichunqiu/16-chajin';
import { quyou2 } from './lvshichunqiu/17-quyou2';
import { jingyu } from './lvshichunqiu/18-jingyu';
import { gaoyi } from './lvshichunqiu/19-gaoyi';
import { changli } from './lvshichunqiu/20-changli';
import { chaxian } from './lvshichunqiu/21-chaxian';
import { yisi } from './lvshichunqiu/22-yisi';
import { chachuan } from './lvshichunqiu/23-chachuan';
import { zhijian } from './lvshichunqiu/24-zhijian';

export const lvshichunqiu: Book = {
  id: 'lvshichunqiu',
  title: '呂氏春秋',
  author: '呂不韋',
  description:
    '戰國末年秦相呂不韋召集門客編纂嘅雜家鉅著,兼採儒、道、墨、法、陰陽各家學說,分十二紀、八覽、六論。呢度精選當中最經典嘅篇章,逐篇加入。',
  chapters: [
    bensheng,
    zhongji,
    guigong,
    qusi,
    qingyu,
    jinshu,
    quanxue,
    zunshi,
    gule,
    yingtong,
    quyou,
    benwei,
    yibao,
    shijie,
    chenglian,
    chajin,
    quyou2,
    jingyu,
    gaoyi,
    changli,
    chaxian,
    yisi,
    chachuan,
    zhijian,
  ],
};
