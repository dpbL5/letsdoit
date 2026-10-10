"use client";

function handleClick(label: string) {
  alert(label);
}

export default function Button({ label }: { label: string }) {
  return (
    <button
      onClick={() => handleClick(label)}
      className="
      hover:bg-amber-300 hover:text-gray-700
      bg-gray-900 p-1 rounded-md
        "
    >
      {label}
    </button>
  );
}
