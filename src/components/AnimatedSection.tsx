import { useEffect, useRef } from "react";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
};

export default function AnimatedSection({
  children,
  className = "",
  threshold = 0.15,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
        } else {
          element.classList.remove("is-visible");
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
