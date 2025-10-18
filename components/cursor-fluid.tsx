"use client";

import React, { useEffect, useRef } from "react";
import { useTouchDevice } from "@/hooks/use-touch-device";

export function CursorFluid({ enabled }: { enabled: boolean }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isTouchDevice = useTouchDevice();

  useEffect(() => {
    if (!enabled) return;

    const cursor = ref.current;
    if (!cursor) return;

    function onMouseMove(e: MouseEvent) {
      const x = e.clientX;
      const y = e.clientY;

      if (cursor) {
        cursor.style.transform = `translate(${x}px, ${y}px)`;
      }
    }

    function onMouseEnter(e: MouseEvent) {
      const target = e.target as HTMLElement;
      // Ensure 'magnetic' property is checked before accessing
      if (target && target.dataset && target.dataset.magnetic && cursor) {
        const rect = target.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        cursor.style.transform = `translate(${x}px, ${y}px)`;
      }
    }

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [enabled]);

  return enabled && !isTouchDevice ? (
    <div
      ref={ref}
      aria-hidden
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: "rgba(255, 0, 255, 0.8)",
        pointerEvents: "none",
        zIndex: 50,
        transform: "translate(-50%, -50%)",
      }}
    />
  ) : null;
}