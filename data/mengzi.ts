import { Book } from './types';
import { liangHuiWangShang } from './mengzi/01-liang-hui-wang-shang';
import { liangHuiWangXia } from './mengzi/02-liang-hui-wang-xia';
import { gongsunChouShang } from './mengzi/03-gongsun-chou-shang';
import { gongsunChouXia } from './mengzi/04-gongsun-chou-xia';
import { tengWenGongShang } from './mengzi/05-teng-wen-gong-shang';
import { tengWenGongXia } from './mengzi/06-teng-wen-gong-xia';
import { liLouShang } from './mengzi/07-li-lou-shang';
import { liLouXia } from './mengzi/08-li-lou-xia';
import { wanZhangShang } from './mengzi/09-wan-zhang-shang';
import { wanZhangXia } from './mengzi/10-wan-zhang-xia';
import { gaoziShang } from './mengzi/11-gaozi-shang';
import { gaoziXia } from './mengzi/12-gaozi-xia';
import { jinxinShang } from './mengzi/13-jinxin-shang';
import { jinxinXia } from './mengzi/14-jinxin-xia';

export const mengzi: Book = {
  id: 'mengzi',
  title: '孟子',
  author: '孟子及其弟子',
  description: '儒家經典,記錄孟子與諸侯、弟子問答,論仁政王道、性善之說,共七篇十四卷全本。',
  chapters: [
    liangHuiWangShang,
    liangHuiWangXia,
    gongsunChouShang,
    gongsunChouXia,
    tengWenGongShang,
    tengWenGongXia,
    liLouShang,
    liLouXia,
    wanZhangShang,
    wanZhangXia,
    gaoziShang,
    gaoziXia,
    jinxinShang,
    jinxinXia,
  ],
};
