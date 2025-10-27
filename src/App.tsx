import { useState } from "react";
import Dropdown from "./components/Dropdown";
import type { DropdownsOption } from "./types";

function App() {
  const [selectedOption, setSelectedOption] = useState<DropdownsOption | null>(
    null
  );

  const options: DropdownsOption[] = [
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

  const handleChange = (option: DropdownsOption) => {
    setSelectedOption(option);
  };

  return (
    <div className="min-h-screen p-8 bg-doctor-white">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-black text-center">
          Dropdown Component
        </h1>
        <div className="flex justify-center">
          <Dropdown
            value={selectedOption}
            placeholder="Select an option"
            options={options}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
