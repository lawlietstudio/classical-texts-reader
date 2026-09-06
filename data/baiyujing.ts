import { Book } from './types';
import { part1 } from './baiyujing/01-part1';
import { part2 } from './baiyujing/02-part2';
import { part3 } from './baiyujing/03-part3';
import { part4 } from './baiyujing/04-part4';

export const baiyujing: Book = {
  id: 'baiyujing',
  title: '百喻經',
  author: '僧伽斯那 集,求那毗地 譯',
  description: '佛教經典,九十八則譬喻故事全本,以生活趣事說明佛法道理。',
  chapters: [part1, part2, part3, part4],
};
