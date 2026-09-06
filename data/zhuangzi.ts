import { Book } from './types';
import { xiaoyaoyou } from './zhuangzi/01-xiaoyaoyou';
import { qiwulun } from './zhuangzi/02-qiwulun';
import { yangshengzhu } from './zhuangzi/03-yangshengzhu';
import { renjianshi } from './zhuangzi/04-renjianshi';
import { dechongfu } from './zhuangzi/05-dechongfu';
import { dazongshi } from './zhuangzi/06-dazongshi';
import { yingdiwang } from './zhuangzi/07-yingdiwang';

export const zhuangzi: Book = {
  id: 'zhuangzi',
  title: '莊子(內篇)',
  author: '莊周',
  description: '道家經典,內篇七章全本,寓言說理,汪洋恣肆。',
  chapters: [
    xiaoyaoyou,
    qiwulun,
    yangshengzhu,
    renjianshi,
    dechongfu,
    dazongshi,
    yingdiwang,
  ],
};
