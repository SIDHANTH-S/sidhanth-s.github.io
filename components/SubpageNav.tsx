'use client';

import { usePathname } from 'next/navigation';
import { Navigation } from './Navigation';

export function SubpageNav() {
  const pathname = usePathname();

  // Do not show the top navigation on the root page
  if (pathname === '/') {
    return null;
  }

  return <Navigation />;
}
