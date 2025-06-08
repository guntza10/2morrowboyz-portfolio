import React from "react";
import { useInView } from "../../hooks/useInView";

export default function RevealOnScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ease-in ${
        isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
