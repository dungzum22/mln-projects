'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render placeholder identical on server and first client paint to avoid hydration mismatch
    return <div suppressHydrationWarning />;
  }
  return (
    <>
      <Header />
      <main className="pt-20">
        {children}
      </main>
    </>
  );
}


