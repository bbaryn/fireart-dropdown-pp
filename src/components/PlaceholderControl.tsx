type PlaceholderControlProps = {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function PlaceholderControl({
  placeholder,
  onChange,
}: PlaceholderControlProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gibraltar mb-2">
        Placeholder Text
      </label>
      <input
        type="text"
        value={placeholder}
        onChange={onChange}
        className="w-full px-4 py-2 border border-silver-chalice rounded-lg focus:outline-none focus:border-gibraltar transition-colors"
        placeholder="Enter placeholder text"
      />
    </div>
  );
}
