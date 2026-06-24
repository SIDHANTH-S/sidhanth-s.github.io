'use client';

import { useRef } from 'react';
import dynamic from 'next/dynamic';
import { useInView } from 'framer-motion';

const GitHubActivity = dynamic(() => import("@/components/GitHubActivity"), { ssr: false });

export function LazyGitHubSection() {
  const ref = useRef(null);
  const show = useInView(ref, { once: true, margin: "200px" });

  return (
    <div ref={ref} className="min-h-[300px]">
      {show && <GitHubActivity />}
    </div>
  );
}
