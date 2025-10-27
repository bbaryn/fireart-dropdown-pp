import type { DropdownsOption } from "../types";

type SelectedValueDisplayProps = {
  selectedOption: DropdownsOption | null;
};

export function SelectedValueDisplay({
  selectedOption,
}: SelectedValueDisplayProps) {
  if (!selectedOption) return null;

  return (
    <div className="mb-8 p-4 bg-white border border-silver-chalice rounded-lg">
      <p className="text-gibraltar">
        <span className="font-semibold">Selected:</span> {selectedOption.label}{" "}
        (ID: {selectedOption.id})
      </p>
    </div>
  );
}
