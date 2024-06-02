import React, { useState } from "react";

function InputField({ type, placeholder }) {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (inputValue === "") {
      setIsFocused(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="relative mt-8">
      <input
        type={inputType}
        className="peer block w-full appearance-none border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        required
      />
      <label
        className={`absolute left-0 top-3.5 cursor-text text-sm text-gray-500 transition-all duration-200 ease-in-out
          ${
            isFocused || inputValue
              ? "top-0 -translate-y-6 text-xs text-blue-600"
              : ""
          }`}
      >
        {placeholder}
      </label>
      {type === "password" && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-0 top-2 text-gray-600 focus:outline-none"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      )}
    </div>
  );
}

export default InputField;
