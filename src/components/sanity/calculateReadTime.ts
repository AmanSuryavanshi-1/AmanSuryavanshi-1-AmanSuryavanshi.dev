import type { PortableTextBlockType } from '@/sanity/sanity';

export const calculateReadTime = (body: PortableTextBlockType[] | undefined): number => {
  if (!body || !Array.isArray(body)) return 0;
  
  // Different reading speeds for different content types
  const wordsPerMinute = {
    text: 180,        // Slightly slower than average reading speed (200-250) since it's technical content
    heading: 200      // Headers are read quickly
  };

  let totalTime = 0;  // Total time in minutes
  
  body.forEach(block => {
    // Handle different block types
    switch (block._type) {
      case 'block':
        // Text content
        let blockWords = 0;
        block.children.forEach((child) => {
          if (child._type === 'span' && child.text) {
            blockWords += child.text.split(/\s+/).filter(Boolean).length;
          }
        });
        
        // Calculate time based on block style (heading vs normal text)
        const isHeading = block.style?.startsWith('h');
        totalTime += blockWords / (isHeading ? wordsPerMinute.heading : wordsPerMinute.text);
        break;

      case 'video':
        // Add a fixed time for video blocks (e.g., 0.5 minutes to read video caption)
        totalTime += 0.5;
        break;
    }
  });

  // Round up to nearest minute
  return Math.max(1, Math.ceil(totalTime));
};
