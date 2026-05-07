"use client";

const EMAIL = "chiziaruhoma@gmail.com";

export function CopyEmail() {
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard?.writeText(EMAIL);
      }}
      className="text-black link-underline text-left relative group w-fit cursor-pointer text-[14px]"
      title="Click to copy"
    >
      <span>{EMAIL}</span>
      <span className="absolute left-0 bottom-full mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Click to copy
      </span>
    </button>
  );
}
