import type { DropdownsOption } from "../types";

type OptionsManagerProps = {
  options: DropdownsOption[];
  onOptionLabelChange: (id: string | number, newLabel: string) => void;
  onAddOption: () => void;
  onDeleteOption: (id: string | number) => void;
};

export function OptionsManager({
  options,
  onOptionLabelChange,
  onAddOption,
  onDeleteOption,
}: OptionsManagerProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <label className="block text-sm font-semibold text-gibraltar">
          Options
        </label>
        <button
          onClick={onAddOption}
          className="px-4 py-1 bg-gibraltar text-white rounded-lg hover:opacity-90 transition-opacity text-sm cursor-pointer"
        >
          + Add Option
        </button>
      </div>
      <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
        {options.map((option) => (
          <div
            key={option.id}
            className="flex gap-2 items-center p-2 border border-silver-chalice rounded-lg hover:bg-kodama-white transition-colors"
          >
            <input
              type="text"
              value={option.label}
              onChange={(e) => onOptionLabelChange(option.id, e.target.value)}
              className="flex-1 px-3 py-1.5 border border-silver-chalice rounded focus:outline-none focus:border-gibraltar transition-colors text-sm"
            />
            <button
              onClick={() => onDeleteOption(option.id)}
              className="px-3 py-1.5 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm cursor-pointer"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
