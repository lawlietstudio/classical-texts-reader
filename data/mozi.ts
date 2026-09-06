import { Book } from './types';
import { qinshi } from './mozi/01-qinshi';
import { xiushen } from './mozi/02-xiushen';
import { suoran } from './mozi/03-suoran';
import { fayi } from './mozi/04-fayi';
import { qihuan } from './mozi/05-qihuan';
import { ciguo } from './mozi/06-ciguo';
import { sanbian } from './mozi/07-sanbian';
import { shangxianShang } from './mozi/08-shangxian-shang';
import { shangxianZhong } from './mozi/09-shangxian-zhong';
import { shangxianXia } from './mozi/10-shangxian-xia';
import { shangtongShang } from './mozi/11-shangtong-shang';
import { shangtongZhong } from './mozi/12-shangtong-zhong';
import { shangtongXia } from './mozi/13-shangtong-xia';
import { jianaiShang } from './mozi/14-jianai-shang';
import { jianaiZhong } from './mozi/15-jianai-zhong';
import { jianaiXia } from './mozi/16-jianai-xia';
import { feigongShang } from './mozi/17-feigong-shang';
import { feigongZhong } from './mozi/18-feigong-zhong';
import { feigongXia } from './mozi/19-feigong-xia';
import { jieyongShang } from './mozi/20-jieyong-shang';
import { jieyongZhong } from './mozi/21-jieyong-zhong';
import { jiezangXia } from './mozi/22-jiezang-xia';
import { tianzhiShang } from './mozi/23-tianzhi-shang';
import { tianzhiZhong } from './mozi/24-tianzhi-zhong';
import { tianzhiXia } from './mozi/25-tianzhi-xia';
import { mingguiXia } from './mozi/26-mingguixia';
import { feiyueShang } from './mozi/27-feiyueshang';
import { feimingShang } from './mozi/28-feiming-shang';
import { feimingZhong } from './mozi/29-feiming-zhong';
import { feimingXia } from './mozi/30-feiming-xia';
import { feiruXia } from './mozi/31-feiruxia';
import { genzhu } from './mozi/32-genzhu';
import { guiyi } from './mozi/33-guiyi';
import { gongmeng } from './mozi/34-gongmeng';
import { luwen } from './mozi/35-luwen';
import { gongshu } from './mozi/36-gongshu';

export const mozi: Book = {
  id: 'mozi',
  title: '墨子',
  author: '墨翟 及其後學',
  description:
    '先秦墨家經典,兼愛非攻、尚賢節用,收錄核心思想篇同對話敘事篇共三十六章全本。',
  chapters: [
    qinshi,
    xiushen,
    suoran,
    fayi,
    qihuan,
    ciguo,
    sanbian,
    shangxianShang,
    shangxianZhong,
    shangxianXia,
    shangtongShang,
    shangtongZhong,
    shangtongXia,
    jianaiShang,
    jianaiZhong,
    jianaiXia,
    feigongShang,
    feigongZhong,
    feigongXia,
    jieyongShang,
    jieyongZhong,
    jiezangXia,
    tianzhiShang,
    tianzhiZhong,
    tianzhiXia,
    mingguiXia,
    feiyueShang,
    feimingShang,
    feimingZhong,
    feimingXia,
    feiruXia,
    genzhu,
    guiyi,
    gongmeng,
    luwen,
    gongshu,
  ],
};
