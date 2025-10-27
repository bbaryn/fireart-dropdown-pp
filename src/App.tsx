import Dropdown from "./components/Dropdown";
import { OptionsManager } from "./components/OptionsManager";
import { PlaceholderControl } from "./components/PlaceholderControl";
import { SelectedValueDisplay } from "./components/SelectedValueDisplay";
import { useDropdownState } from "./hooks/useDropdownState";

const initialOptions = [
  { id: 1, label: "Option 1" },
  { id: 2, label: "Option 2" },
  { id: 3, label: "Option 3" },
  { id: 4, label: "Option 4" },
  { id: 5, label: "Option 5" },
  { id: 6, label: "Option 6" },
  { id: 7, label: "Option 7" },
  { id: 8, label: "Option 8" },
  { id: 9, label: "Option 9" },
  { id: 10, label: "Option 10" },
];

function App() {
  const {
    selectedOption,
    placeholder,
    options,
    handleChange,
    handlePlaceholderChange,
    handleOptionLabelChange,
    handleAddOption,
    handleDeleteOption,
  } = useDropdownState(initialOptions);

  return (
    <div className="min-h-screen p-8 bg-doctor-white">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-black text-center">
          Dropdown Component
        </h1>
        <div className="flex justify-center mb-8">
          <Dropdown
            value={selectedOption}
            placeholder={placeholder}
            options={options}
            onChange={handleChange}
          />
        </div>
        <SelectedValueDisplay selectedOption={selectedOption} />
        <div className="space-y-6 bg-white p-6 border border-silver-chalice rounded-lg">
          <PlaceholderControl
            placeholder={placeholder}
            onChange={handlePlaceholderChange}
          />
          <OptionsManager
            options={options}
            onOptionLabelChange={handleOptionLabelChange}
            onAddOption={handleAddOption}
            onDeleteOption={handleDeleteOption}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
