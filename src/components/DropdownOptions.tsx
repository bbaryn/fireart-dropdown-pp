import { useState } from "react";
import type { DropdownOptionProps } from "../types";

export const DropdownOption = ({ option, onSelect }: DropdownOptionProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type="button"
      onClick={() => onSelect(option)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`w-full text-sm text-left px-4 py-2 text-black transition-colors cursor-pointer ${
        isHovered ? "bg-kodama-white" : "bg-white"
      }`}
    >
      {option.label}
    </button>
  );
};
