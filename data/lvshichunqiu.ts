import { Book } from './types';
import { bensheng } from './lvshichunqiu/01-bensheng';
import { zhongji } from './lvshichunqiu/02-zhongji';
import { guigong } from './lvshichunqiu/03-guigong';
import { qusi } from './lvshichunqiu/04-qusi';

export const lvshichunqiu: Book = {
  id: 'lvshichunqiu',
  title: '呂氏春秋',
  author: '呂不韋',
  description:
    '戰國末年秦相呂不韋召集門客編纂嘅雜家鉅著,兼採儒、道、墨、法、陰陽各家學說,分十二紀、八覽、六論。呢度精選當中最經典嘅篇章,逐篇加入。',
  chapters: [bensheng, zhongji, guigong, qusi],
};
