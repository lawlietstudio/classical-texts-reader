import { Book } from './types';
import { xingyou } from './liuzu/01-xingyou';
import { boruo } from './liuzu/02-boruo';
import { yiwen } from './liuzu/03-yiwen';
import { dinghui } from './liuzu/04-dinghui';
import { zuochan } from './liuzu/05-zuochan';
import { chanhui } from './liuzu/06-chanhui';
import { jiyuan } from './liuzu/07-jiyuan';
import { dunjian } from './liuzu/08-dunjian';
import { hufa } from './liuzu/09-hufa';
import { fuzhu } from './liuzu/10-fuzhu';

export const liuzu: Book = {
  id: 'liuzu',
  title: '六祖壇經',
  author: '惠能 說,法海 集記',
  description: '禪宗經典,唯一由中國人所講而稱「經」嘅佛典,共十品全本。',
  chapters: [
    xingyou,
    boruo,
    yiwen,
    dinghui,
    zuochan,
    chanhui,
    jiyuan,
    dunjian,
    hufa,
    fuzhu,
  ],
};
