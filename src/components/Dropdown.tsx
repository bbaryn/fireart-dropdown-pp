import { useEffect, useRef, useState } from "react";
import type { DropdownProps, DropdownsOption } from "../types";
import { DropdownOption } from "./DropdownOptions";

export default function Dropdown({
  value,
  placeholder,
  options,
  onChange,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (option: DropdownsOption) => {
    onChange(option);
    setIsOpen(false);
  };

  const displayText = value ? value.label : placeholder;
  const displayTextColor = value ? "text-gibraltar" : "text-vesper-violet";

  return (
    <div className="relative w-[500px]" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="min-w-[500px] px-4 py-3 bg-white border border-[#E0E0E0] rounded-lg flex items-center justify-between hover:border-[#D0D0D0] transition-colors cursor-pointer"
      >
        <span className={`${displayTextColor} text-sm`}>{displayText}</span>
        <svg
          className="w-3.5 h-3.5 text-gibraltar transition-transform -mr-2"
          style={{
            transform: isOpen ? "rotate(0deg)" : "rotate(180deg)",
          }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="relative top-2.5 left-0 w-[500px] h-[275px] bg-white border border-[#E0E0E0] rounded-lg overflow-hidden shadow-md/10 pr-2">
          <div
            className={`h-full overflow-y-auto
              [&::-webkit-scrollbar]:w-0.25
              [&::-webkit-scrollbar-track]:my-2
              [&::-webkit-scrollbar-track]:bg-errigal-white
              [&::-webkit-scrollbar-thumb]:rounded-full
              [&::-webkit-scrollbar-thumb]:bg-gibraltar`}
          >
            <div className="pt-1.5 pb-1 pr-2">
              {options.map((option) => (
                <DropdownOption
                  key={option.id}
                  option={option}
                  onSelect={handleSelect}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
