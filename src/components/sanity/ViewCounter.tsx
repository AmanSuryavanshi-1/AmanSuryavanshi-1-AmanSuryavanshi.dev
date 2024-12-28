'use client';

import { useEffect, useState, useRef } from 'react';
import { client } from '@/sanity/lib/client';

interface ViewCounterProps {
  postId: string;
  noCount?: boolean;
  increment?: boolean;
}

export default function ViewCounter({ postId, noCount = false, increment = false }: ViewCounterProps) {
  const [views, setViews] = useState<number>(0);
  const hasIncremented = useRef(false);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        // Get the current views
        const currentViews = await client.fetch(
          `*[_id == $postId][0].viewCount`,
          { postId }
        );

        setViews(currentViews || 0);

        // Only increment if we're on the blog post page and haven't incremented yet
        if (increment && !hasIncremented.current) {
          hasIncremented.current = true;
          await fetch('/api/increment-views', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ postId }),
          });

          // Update the local state
          setViews((prev) => prev + 1);
        }
      } catch (error) {
        console.error('Error with views:', error);
      }
    };

    fetchViews();
  }, [postId, increment]);

  if (noCount) {
    return null;
  }

  return <span>{views} views</span>;
}
