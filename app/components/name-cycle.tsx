"use client";

import { useState, type KeyboardEvent } from "react";

const aliases = ["Chizi", "Chiziaruhoma", "@zfinix"];

export function NameCycle() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % aliases.length);
  const onKey = (e: KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      next();
    }
  };

  return (
    <span
      role="button"
      tabIndex={0}
      onClick={next}
      onKeyDown={onKey}
      aria-label="Cycle through names"
      title="Other names"
      className="draw-underline cursor-pointer select-none"
    >
      {aliases[index]}
    </span>
  );
}
