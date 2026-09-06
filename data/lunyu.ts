import { Book } from './types';
import { xueer } from './lunyu/01-xueer';
import { weizheng } from './lunyu/02-weizheng';
import { bayi } from './lunyu/03-bayi';
import { liren } from './lunyu/04-liren';
import { gongyechang } from './lunyu/05-gongyechang';
import { yongye } from './lunyu/06-yongye';
import { shuer } from './lunyu/07-shuer';
import { taibo } from './lunyu/08-taibo';
import { zihan } from './lunyu/09-zihan';
import { xiangdang } from './lunyu/10-xiangdang';
import { xianjin } from './lunyu/11-xianjin';
import { yanyuan } from './lunyu/12-yanyuan';
import { zilu } from './lunyu/13-zilu';
import { xianwen } from './lunyu/14-xianwen';
import { weilinggong } from './lunyu/15-weilinggong';
import { jishi } from './lunyu/16-jishi';
import { yanghuo } from './lunyu/17-yanghuo';
import { weizi } from './lunyu/18-weizi';
import { zizhang } from './lunyu/19-zizhang';
import { yaoyue } from './lunyu/20-yaoyue';

export const lunyu: Book = {
  id: 'lunyu',
  title: '論語',
  author: '孔子及其弟子',
  description: '儒家經典,記錄孔子及其弟子言行,共二十篇全本。',
  chapters: [
    xueer,
    weizheng,
    bayi,
    liren,
    gongyechang,
    yongye,
    shuer,
    taibo,
    zihan,
    xiangdang,
    xianjin,
    yanyuan,
    zilu,
    xianwen,
    weilinggong,
    jishi,
    yanghuo,
    weizi,
    zizhang,
    yaoyue,
  ],
};
