export type DropdownsOption = {
  id: number;
  label: string;
};

export type DropdownProps = {
  value: DropdownsOption | null;
  placeholder: string;
  options: DropdownsOption[];
  onChange: (selectedOption: DropdownsOption) => void;
};

export type DropdownOptionProps = {
  option: DropdownsOption;
  onSelect: (option: DropdownsOption) => void;
};
