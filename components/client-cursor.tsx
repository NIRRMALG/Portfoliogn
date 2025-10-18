"use client";

import { useEffect, useState } from 'react';
import { CursorFluid } from "./cursor-fluid";

export function ClientCursor() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <CursorFluid enabled={true} />;
}