// src/components/AnimatedTabs.tsx
import React, { useEffect, useRef, useState } from "react";

type Tab = { id: string | number; label: string };

export default function AnimatedTabs({
  tabs,
  activeId,
  onChange,
  className = "",
}: {
  tabs: Tab[];
  activeId: string | number;
  onChange: (id: string | number) => void;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const activeEl =
      container.querySelector<HTMLElement>('[data-tab-active="true"]') ||
      container.querySelector<HTMLElement>("[data-tab-id]");
    if (!activeEl) return;
    const rect = activeEl.getBoundingClientRect();
    const parentRect = container.getBoundingClientRect();
    setIndicator({ left: rect.left - parentRect.left, width: rect.width });
    // re-calc on resize
    const onResize = () => {
      const a = container.querySelector<HTMLElement>(
        '[data-tab-active="true"]'
      );
      if (!a) return;
      const r = a.getBoundingClientRect();
      const pr = container.getBoundingClientRect();
      setIndicator({ left: r.left - pr.left, width: r.width });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeId, tabs]);

  return (
    <div className={`tabs ${className}`} ref={containerRef}>
      <div className="flex gap-4 overflow-x-auto">
        {tabs.map((t) => {
          const isActive = t.id === activeId;
          return (
            <button
              key={t.id}
              data-tab-id={t.id}
              data-tab-active={isActive ? "true" : "false"}
              onClick={() => onChange(t.id)}
              className={`py-2 text-sm font-medium ${
                isActive ? "text-teal-600" : "text-gray-600"
              } whitespace-nowrap`}
              style={{ background: "transparent" }}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {/* indicator */}
      <div
        className="tab-indicator"
        style={{
          left: indicator.left,
          width: indicator.width,
        }}
        aria-hidden
      />
    </div>
  );
}
