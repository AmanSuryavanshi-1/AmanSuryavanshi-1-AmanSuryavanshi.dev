import type { PortableTextBlockType } from '@/types/sanity';

export const calculateReadTime = (body: PortableTextBlockType[] | undefined): number => {
  if (!body || !Array.isArray(body)) return 0;
  
  const wordsPerMinute = 200;
  let totalWords = 0;
  
  body.forEach(block => {
    if (block._type === 'block') {
      block.children.forEach((child) => {
        if (child._type === 'span' && child.text) {
          totalWords += child.text.split(/\s+/).filter(Boolean).length;
        }
      });
    }
  });

  return Math.ceil(totalWords / wordsPerMinute);
};
