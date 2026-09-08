import { Book } from './types';
import { jipian } from './sunzibingfa/01-jipian';
import { zuozhan } from './sunzibingfa/02-zuozhan';
import { mougong } from './sunzibingfa/03-mougong';
import { junxing } from './sunzibingfa/04-junxing';
import { bingshi } from './sunzibingfa/05-bingshi';
import { xushi } from './sunzibingfa/06-xushi';
import { junzheng } from './sunzibingfa/07-junzheng';
import { jiubian } from './sunzibingfa/08-jiubian';
import { xingjun } from './sunzibingfa/09-xingjun';
import { dixing } from './sunzibingfa/10-dixing';
import { jiudi } from './sunzibingfa/11-jiudi';
import { huogong } from './sunzibingfa/12-huogong';
import { yongjian } from './sunzibingfa/13-yongjian';

export const sunzibingfa: Book = {
  id: 'sunzibingfa',
  title: '孫子兵法',
  author: '孫武',
  description:
    '春秋末年孫武所著嘅兵學經典,共十三篇,係現存最早、影響最深遠嘅兵書,武經七書之首。呢度收錄全書十三篇。',
  chapters: [
    jipian,
    zuozhan,
    mougong,
    junxing,
    bingshi,
    xushi,
    junzheng,
    jiubian,
    xingjun,
    dixing,
    jiudi,
    huogong,
    yongjian,
  ],
};
