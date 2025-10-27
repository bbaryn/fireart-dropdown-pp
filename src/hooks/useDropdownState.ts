import { useCallback, useState } from "react";
import type { DropdownsOption } from "../types";

export const useDropdownState = (initialOptions: DropdownsOption[] = []) => {
  const [selectedOption, setSelectedOption] = useState<DropdownsOption | null>(
    null
  );
  const [placeholder, setPlaceholder] = useState("Select an option");
  const [options, setOptions] = useState<DropdownsOption[]>(initialOptions);

  const handleChange = useCallback((option: DropdownsOption) => {
    setSelectedOption(option);
  }, []);

  const handlePlaceholderChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPlaceholder(e.target.value);
    },
    []
  );

  const handleOptionLabelChange = useCallback(
    (id: string | number, newLabel: string) => {
      setOptions(
        options.map((opt) =>
          opt.id === id ? { ...opt, label: newLabel } : opt
        )
      );
    },
    [options]
  );

  const handleAddOption = useCallback(() => {
    const newId = Math.max(...options.map((opt) => Number(opt.id)), 0) + 1;
    setOptions([...options, { id: newId, label: `Option ${newId}` }]);
  }, [options]);

  const handleDeleteOption = useCallback(
    (id: string | number) => {
      setOptions(options.filter((opt) => opt.id !== id));
      if (selectedOption?.id === id) {
        setSelectedOption(null);
      }
    },
    [options, selectedOption]
  );

  return {
    selectedOption,
    placeholder,
    options,
    handleChange,
    handlePlaceholderChange,
    handleOptionLabelChange,
    handleAddOption,
    handleDeleteOption,
  };
};
