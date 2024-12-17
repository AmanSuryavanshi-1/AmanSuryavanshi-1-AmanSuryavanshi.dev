import { PortableTextBlock, TypedObject } from '@portabletext/types';

export const calculateReadTime = (body: PortableTextBlock[] | undefined): number => {
  if (!body || !Array.isArray(body)) return 0;
  
  const wordsPerMinute = 200;
  let totalWords = 0;
  
  body.forEach(block => {
    if (block && block._type === 'block' && Array.isArray(block.children)) {
      block.children.forEach((child: TypedObject & { text?: string }) => {
        if (child && typeof child === 'object' && 'text' in child && typeof child.text === 'string') {
          totalWords += child.text.split(/\s+/).filter(Boolean).length;
        }
      });
    }
  });

  return Math.ceil(totalWords / wordsPerMinute);
};
