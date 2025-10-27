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
  }, [isOpen, dropdownRef]);

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
        className="min-w-[500px] max-h-[32px] px-4 py-2.5 bg-white border border-silver-chalice rounded-lg flex items-center justify-between cursor-pointer"
      >
        <span className={`${displayTextColor} text-sm`}>{displayText}</span>
        <svg
          className={`w-3.5 h-3.5 text-gibraltar -mr-2 transition-transform ease-in-out ${isOpen ? "rotate-0" : "rotate-180"}`}
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
        <div
          className={`z-10 absolute top-10 left-0 w-[500px] bg-white border border-silver-chalice rounded-lg overflow-hidden shadow-md/10 pr-2 ${options.length > 7 ? "h-[275px]" : "h-auto"}`}
        >
          <div
            className={`overflow-y-auto
              [&::-webkit-scrollbar]:w-0.25
              [&::-webkit-scrollbar-track]:my-2
              [&::-webkit-scrollbar-track]:bg-errigal-white
              [&::-webkit-scrollbar-thumb]:rounded-full
              [&::-webkit-scrollbar-thumb]:bg-gibraltar
              ${
                options.length > 7
                  ? "h-full custom-scrollbar"
                  : "overflow-y-visible"
              }`}
          >
            <div className="pt-2 pb-1 pr-2">
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
