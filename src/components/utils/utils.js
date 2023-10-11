import { useState } from "react";

// copy to clip board
export const copyToClipBoard = (text) => {
  navigator.clipboard.writeText(text);
};

// save as text file
export const saveAsTxtFile = (filename, text) => {
  const blob = new Blob([text], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
};

// Input with label
export function InputWithLabel({ id, label, value, event }) {
  const [isActive, setIsActive] = useState(false);

  const [isActiveInput, setIsActiveInput] = useState(false);

  const handleFocus = () => {
    setIsActive(true);
    setIsActiveInput(true);
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      setIsActive(false);
      setIsActiveInput(false);
    }
  };

  return (
    <div>
      <label htmlFor={id} className={isActive ? "active" : ""}>
        {label}
      </label>
      <input
        id={id}
        className={isActiveInput ? "active_input" : ""}
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        onChange={(e) => event(e.target.value)}
      />
    </div>
  );
}

// Select with label
export function SelectWithLabel({ id, label, options, event }) {
  const [isActive, setIsActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    event(e.target.value);

    if (e.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <div>
      <label htmlFor={id} className={isActive ? "active" : ""}>
        {label}
      </label>
      <select
        id={id}
        value={selectedValue}
        className={isActive ? "active_input" : ""}
        onFocus={handleFocus}
        onChange={handleChange}
      >
        <option value="" disabled hidden></option>
        {options.map((option, index) => (
          <option key={index} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
